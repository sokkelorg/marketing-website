FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY pnpm-lock.yaml /app/pnpm-lock.yaml
COPY package.json /app/package.json

WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . /app

RUN pnpm run build

FROM base

COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD [ "node", "./dist/server/entry.mjs" ]
