# Use an official Node image
FROM node:latest

ARG user=node
ARG group=node
ARG app_port_1=3000
ARG app_port_2=9229

ENV WORKING_DIR=/usr/src/app

RUN mkdir -p ${WORKING_DIR}
WORKDIR ${WORKING_DIR}
COPY . ${WORKING_DIR}

RUN npm install

RUN chown -R ${user}:${group} "${WORKING_DIR}"

EXPOSE ${app_port} ${app_port_2}

CMD ["npm", "run", "start"]