FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

ENV MYPORT 3000

EXPOSE $MYPORT

CMD ["npm","start"]



