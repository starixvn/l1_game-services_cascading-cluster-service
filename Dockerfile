FROM hub.lumigame.com/base/node:20-alpine-25h2 AS builder
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json yarn.lock tsconfig.json .modprunerrc ./
RUN npm run reg && \
    yarn install --frozen-lockfile --production=false --ignore-optional && \
    yarn remove @swc/core @swc/jest || true && \
    npx mod-pruner prune --force
COPY --chown=node:node ./src/ ./src/
RUN npm run build


FROM hub.lumigame.com/base/node:20-alpine-25h2 AS production

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN rm -rf /tmp/* /var/cache/apk/* && \
    mkdir -p /app && \
    chown -R node:node /app

WORKDIR /app
USER node

COPY --chown=node:node package.json yarn.lock ./

RUN npm run reg && \
    yarn install --frozen-lockfile --production --ignore-scripts && \
    yarn cache clean

COPY --from=builder --chown=node:node /app/dist ./dist

ENV PATH=/app/node_modules/.bin:$PATH

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node --es-module-specifier-resolution=node ./dist/healthcheck.js

CMD ["node", "--import=extensionless/register", "./dist/app.js"]
