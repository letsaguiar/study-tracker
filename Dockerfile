FROM node:20-alpine as build-server

WORKDIR /app

COPY server/package.json .

RUN npm install

COPY server .

RUN npm run build

FROM node:20-alpine as build-client

WORKDIR /app

COPY client/package.json .

RUN npm install

COPY client .

RUN npm run build

FROM ubuntu:20.04 as production

ENV NODE_MAJOR=20
ENV VITE_SERVER_HOST=http://localhost/api

RUN apt-get update \
    && apt-get install -y ca-certificates curl gnupg nginx supervisor \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y nodejs

WORKDIR /app

COPY --from=build-server /app/package.json .

RUN npm install --omit=dev

COPY --from=build-server /app/dist ./dist

COPY --from=build-client /app/dist /usr/share/nginx/html 

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN nginx -t

EXPOSE 80

CMD ["/usr/bin/supervisord"]
