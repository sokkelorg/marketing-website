FROM node:lts-alpine AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Opt out of sending telemetry about our build to Astro: https://astro.build/telemetry
ENV ASTRO_TELEMETRY_DISABLED=1

# Install dependencies.
COPY pnpm-lock.yaml package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the app.
COPY . .
RUN --mount=type=cache,id=astro-build-artifacts,target=/app/node_modules/.astro pnpm build

# ---
# Serve the static app with nginx.
# ---
FROM nginx:stable-alpine

ENV PORT=8080
COPY default.conf.template /etc/nginx/templates/default.conf.template

COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE ${PORT}
