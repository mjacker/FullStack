FROM node:16-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

# RUN npm init -y

COPY http.js .

EXPOSE 3000

CMD ["node", "/home/app/http.js"]
