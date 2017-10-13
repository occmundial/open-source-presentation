FROM node:#WA_OPENSOURCE_NODE_VERSION#

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run-script build

EXPOSE #WA_OPENSOURCE_PORT#

CMD npm run start:Prod