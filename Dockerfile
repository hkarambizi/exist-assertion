FROM cypress/browsers:node12.13.0-chrome80-ff74

WORKDIR /tests
ENV CI=1

ARG CYPRESS_VERSION="4.5.0"

RUN npm install "cypress@${CYPRESS_VERSION}"

COPY package.json .

RUN npm install

ENV PATH $PATH:/tests/node_modules/cypress/bin
ENV NODE_PATH $NODE_PATH:/tests/node_modules

RUN cypress verify

ENTRYPOINT ["cypress", "run"]