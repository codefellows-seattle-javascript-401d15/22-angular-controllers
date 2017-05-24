# Lab 22: Angular Controllers

## Description
For this lab we used cow say to work with controllers and scope.

* [Cowsay](http://www.cowsays.com)

For more information see:
* [Class 22](https://github.com/codefellows/seattle-javascript-401d15/tree/master/class-22-angular-controllers)
* [Lab 22](https://github.com/codefellows-seattle-javascript-401d15/22-angular-controllers)

## Version
* 0.1.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init

npm install -S angular babel-core babel-loader babel-preset-es2015 cowsay-browser css-loader extract-text-webpack-plugin html-webpack-plugin node-sass sass-loader style-loader webpack

npm install -D webpack-dev-server
```

Add the following to package.json:
```
"scripts": {
  "build": "webpack",
  "watch": "webpack-dev-server --inline --hot"
}
```

### Dependencies
The result of installation above.

```
"dependencies": {
  "angular": "^1.6.4",
  "babel-core": "^6.24.1",
  "babel-loader": "^7.0.0",
  "babel-preset-es2015": "^6.24.1",
  "cowsay-browser": "^1.1.8",
  "css-loader": "^0.28.2",
  "extract-text-webpack-plugin": "^2.1.0",
  "html-webpack-plugin": "^2.28.0",
  "node-sass": "^4.5.3",
  "sass-loader": "^6.0.5",
  "style-loader": "^0.18.1",
  "webpack": "^2.6.0"
},
"devDependencies": {
  "webpack-dev-server": "^2.4.5"
}
```

## Application
In Terminal run `webpack`
In your browser visit `http://localhost:8080/`

To change the cowsay ASCII art update index.js using the following resource:
https://helloacm.com/cowsay/

Add `$log.log(cowsay);` to index.js in the `CowsayController` function.
Open your console in the web browser and explore cowsay.

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

There are no tests for this lab.

## Resources
* [Learn Angular](https://thinkster.io/a-better-way-to-learn-angularjs)
* [Guide to AngularJS](https://docs.angularjs.org/guide)
* [What is Webpack](https://webpack.github.io/docs/what-is-webpack.html)
* [Webpack Tutorial](https://webpack.github.io/docs/tutorials/getting-started/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/22-angular-controllers/blob/lab-22/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
