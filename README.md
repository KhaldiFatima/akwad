# Analysis API

An api for auditing web pages.

## Description

This API utilizes express.js, lighthouse, and axe-core to audit web pages.

## Getting Started

### Dependencies

- This program requires node.js
- it also uses multible node dependencies, such as:
  - Express.js
  - lighthouse
  - axe-core
  - puppeteer
  - Eslint
  - Prettier
  - nodemon

### Installing

To use this API on your local machine, follow these steps:

- Run the following command in your terminal to clone this repo:

```
git clone git@github.com:akwadsa/analysis.git
```

- After this repo is cloned to your device, enter the project directory and enter the following command:

```
npm install
```

Now, this project with all of the necessary dependancies can be run from your local device.

### Executing program

this application runs on localhost on port 3000, and postgresql runs on 5432, Ways to use this API through terminal:

- To run this code for development:

```
npm run dev
```

- To format the code using Prettier

```
npm run prettier
```

- To lint the code using eslint

```
npm run lint
```

## API Endpoints

#### Products

- POST: /audit = (body: {url: string}) -> runs auditing script on the provided url in request body.

## Version History

- 1.0.0
  - Initial Release
