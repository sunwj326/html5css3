# demo for live debugging
FROM node:7.9-slim
# File Author / Maintainer
MAINTAINER Sun, Wen-Jun <wen-jun.sun@hpe.com>
#set proxy
ENV http_proxy http://web-proxy.rose.hpecorp.net:8080
ENV https_proxy http://web-proxy.rose.hpecorp.net:8080

WORKDIR /code

RUN npm install -g nodemon

COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

COPY . /code

CMD ["npm", "start"]
