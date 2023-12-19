/* eslint-disable no-template-curly-in-string */

import fs from 'node:fs'

import * as R from 'remeda'

// Default: ['{projectRoot}/dist', '{projectRoot}/build']
const outputs = []

const inputsIgnore = R.map(R.map(outputs, R.concat), fn => fn('!'))

const config = {
  $schema: './node_modules/nx/schemas/nx-schema.json',
  namedInputs: {
    sharedGlobals: [
      '{projectRoot}/.env.*',
      '{projectRoot}/tsconfig.json',
      { env: 'NODE_ENV' },
    ],
    default: [
      'sharedGlobals',
      '{projectRoot}/**/*',
      '!{projectRoot}/**/?(*.)+spec.ts',
    ],
  },
  targetDefaults: {
    build: {
      dependsOn: ['^build'],
      cache: true,
      executor: '@nx/vite:build',
      inputs: ['default'],
      outputs: ['{options.outputPath}'],
      options: {
        outputPath: '{projectRoot}/dist',
      },
      configurations: {
        ci: {
          options: {
            // Generate a lockfile (e.g. package-lock.json) that matches the workspace lockfile to ensure package versions match.
            generateLockfile: true,
          },
        },
      },
    },

    test: {
      dependsOn: ['build'],
      cache: true,
      executor: '@nx/vite:test',
      outputs: ['{options.reportsDirectory}'],
      inputs: [
        '{projectRoot}/src/**/*.js',
        '{projectRoot}/src/**/*.jsx',
        '{projectRoot}/src/**/*.ts',
        '{projectRoot}/src/**/*.tsx',
        '{projectRoot}/test/**/*.js',
        '{projectRoot}/test/**/*.jsx',
        '{projectRoot}/test/**/*.ts',
        '{projectRoot}/test/**/*.tsx',
        '{projectRoot}/src/**/*.vue',
      ],
    },

    dev: {
      cache: false,
    },

    lint: {
      dependsOn: [
        // To pass "--fix"
        { project: 'self', target: 'eslint', params: 'forward' },
        { project: 'self', target: 'stylelint', params: 'forward' },
      ],
      cache: true,
      inputs: [...inputsIgnore],
      // Can't use "nx:noop" for it doesn't allow passing args
      // executor: 'nx:noop',
      executor: 'nx:run-commands',
      options: {
        command: 'echo lint done, args:',
      },
    },
    eslint: {
      cache: true,
      executor: 'nx:run-commands',
      options: {
        command: 'FIX={args.fix}; eslint src --fix=${FIX:-false}',
      },
    },
    stylelint: {
      cache: true,
      executor: 'nx:run-commands',
      options: {
        command: 'FIX={args.fix}; stylelint "src/**/*.{css,scss,vue,tsx}" --fix=${FIX:-false}',
      },
    },

    container: {
      dependsOn: ['build'],
      cache: true,
      options: {
        load: true,
        platforms: ['linux/amd64', 'linux/arm64'],
      },
      configurations: {
        ci: {
          load: false,
          push: true,
        },
      },
    },

    deploy: {
      dependsOn: ['build', 'test', 'lint'],
      cache: false,
    },
  },
}

fs.writeFileSync('./nx.json', JSON.stringify(config, undefined, 2))
