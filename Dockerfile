FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /Docker1
#copy source destination
COPY . .

RUN npm install
EXPOSE 8000
ENTRYPOINT [ "node", "index.js" ] 