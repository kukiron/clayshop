# ClayShop React App

[![Build Status](https://travis-ci.org/kukiron/clayshop.svg?branch=master)](https://travis-ci.org/kukiron/clayshop) [![bitHound Dependencies](https://www.bithound.io/github/kukiron/clayshop/badges/dependencies.svg)](https://www.bithound.io/github/kukiron/clayshop/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/kukiron/clayshop/badges/devDependencies.svg)](https://www.bithound.io/github/kukiron/clayshop/master/dependencies/npm) [![Known Vulnerabilities](https://snyk.io/test/github/kukiron/clayshop/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kukiron/clayshop?targetFile=package.json)

ClayShop react app uses `https://api-clayshop.herokuapp.com` for the REST API endpoints. This app implements a web interface for a smart-lock screen. Check the [Demo](https://clayshop.herokuapp.com).

Follow [this repo](https://github.com/kukiron/rest-api-server) to setup the server & database on your local machine.

## Running the app

To build the client side application, clone the repo & run `npm install` from the root directory.

Then, run `npm run dev:client` for the development build & go to `http://localhost:8080`

### Sample Account

Try to login using the following credentials:

```shell
Email: example@clayshop.com
password: example123
```

Only users with admin priviledge can create & delete users accounts. Admin routes are protected & can't be accessed with the example credentials.
