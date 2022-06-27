FROM node:16-alpine
ARG PNPM_VERSION=7.1.6
RUN npm --location=global install pnpm@${PNPM_VERSION}

WORKDIR /root/app
COPY . .
RUN pnpm i --prod
RUN pnpm build
CMD pnpm preview --host
