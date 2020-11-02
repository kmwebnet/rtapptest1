FROM node:14.5.0-buster-slim

ENV PORT 5000
EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build

CMD [ "node", "index.js" ]
#CMD ["/bin/bash"]
#CMD [ "DEBUG=express:*", "node", "index.js" ]