FROM node:16-alpine
RUN corepack enable
WORKDIR /root/app
COPY . .
RUN pnpm i --prod
RUN pnpm build
CMD pnpm preview --host
