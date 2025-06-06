FROM node:16 as build

WORKDIR /app
COPY src/ /app/src
COPY package.json /app/
WORKDIR /app
RUN npm install --registry=https://registry.npmmirror.com
FROM node:16-buster-slim
COPY --from=build /app /app
WORKDIR /app
CMD [ "node", "src/servermonitor.js" ]
