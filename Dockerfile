FROM node:10.16-alpine

RUN npm install -g nodemon

COPY . /home/node

WORKDIR /home/node

RUN npm install

CMD ["nodemon", "-L", "index"]