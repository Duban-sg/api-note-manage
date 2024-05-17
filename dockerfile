FROM node:18-alpine as build



WORKDIR /public/wwww/note-dock

COPY package.json /public/wwww/note-dock/package.json
COPY package-lock.json /code/package-lock.json
RUN npm i 

COPY public/ /public/wwww/note-dock/public/
COPY src/ /public/wwww/note-dock/src/

RUN npm install

RUN npm run build

FROM nginx
COPY --from=build /public/wwww/note-dock/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
