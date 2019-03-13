FROM node:10 as dev

ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm i -g yarn
RUN yarn add --force node-sass
RUN yarn run build

CMD ["yarn", "start"]

FROM nginx:1.15-alpine as prod

COPY --from=dev /app/build /usr/share/nginx/html
