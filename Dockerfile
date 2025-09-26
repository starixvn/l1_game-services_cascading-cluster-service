FROM hub.lumigame.com/base/node:20-alpine-25h2 AS builder
WORKDIR /app
COPY package.json yarn.lock tsconfig.json .modprunerrc ./
RUN npm run reg \
    && yarn install \
    && npx mod-pruner prune --force
COPY ./src/ ./src/
RUN npm run build

FROM hub.lumigame.com/base/node:20-alpine-25h2
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
RUN mkdir /app && chown node:node /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN npm run reg && yarn install --production

USER node
ENV PATH /app/node_modules/.bin:$PATH
COPY --from=builder /app/dist ./dist

HEALTHCHECK --interval=10s CMD node --es-module-specifier-resolution=node ./dist/healthcheck.js

CMD [ "node", "--import=extensionless/register", "./dist/app.js" ]
