# Testcafe
Example automation with the basic test configuration, contains examples of the different utilities offered by the automation framework

Contains:
- Automation made in JavaScript with basic examples of Testcafe features (API tests, UI tests with different configurations)

## Prerequisites
- Verify that you have `Git` installed
```shellscript
$ git --version
```
- Verify that you have `Node.js` installed
```shellscript
$ node --version
```
For Node.js if you do not return, for example, a value similar or superior to `v18.12.1` or if your terminal does not recognize the command, we recommend installing Node as detailed in the official TestCafe [guide](https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe)

Node.js installers include the npm command line utility, verify that everything was installed correctly executing the following commands in the console
```shellscript
$ node --version
```
```shellscript
$ npm --version
```

## Use sample project locally
- Clone the repository and move inside that path:
```shellscript
$ git clone git@github.com:eataborda/testcafe.git
$ cd ./testcafe
```
- Install the project dependencies using npm:
```shellscript
$ npm install
```
This creates the node_modules folder with everything needed to be able to run the automated tests

## Run tests
Verify that you are in the root of the repository (testcafe folder), after that, run different types of tests depending on what you need to perform:

You can run simple tests where you can choose the preferred browser(s) or even emulate devices
```shellscript
$ npm run test:chrome
$ npm run test:firefox
$ npm run test:edge
$ npm run test:cf
$ npm run test:emulation:iphonex
```
You can run tests with execution speed in mind, if you need to run the tests in headless mode, using parallelism or a combination of these
```shellscript
$ npm run test:speed:10
$ npm run test:headless
$ npm run test:parallel
$ npm run test:test:headless:3
```
You can run the tests by taking evidence such as screenshots or recording videos
```shellscript
$ npm run test:screenshots
$ npm run test:videos
```
You can run specific test classes or specific tests within classes using the metadata of the fixtures or tests
```shellscript
$ npm run test:regression
$ npm run test:endToEnd
$ npm run test:api
$ npm run test:loginNegative
```
For more information please consult the official TestCafe [documentation](https://testcafe.io/documentation/402635/getting-started) to continue learning more about the automation framework
