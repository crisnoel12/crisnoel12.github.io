---
title: "Getting Started With Node.js"
description: "In this lesson we'll get into the basics of Node and NPM. NPM will help us install different modules used in modern javascript development."
excerpt: "Node is a javascript runtime environment that was built on top of google chrome's V8 engine. It can be used to build many different things such as web and desktop apps, APIs, real-time applications, games, it can even act as a web server. In this lesson we'll get into the basics of Node and NPM (Node Package Manager)."
date: 2017-02-28
tags: ['nodejs', 'javascript', 'npm', 'tutorial']
image: nodejs-getting-started.png
---
## Introduction
Node is a javascript runtime environment that was built on top of google chrome's V8 engine. It can be used to build many different things such as web and desktop apps, APIs, real-time applications, games, it can even act as a web server. In this lesson we'll get into the basics of Node and NPM (Node Package Manager). NPM will help us install different modules used in modern javascript development.

## Pre-requisites
*  A text editor
*  Some knowledge in javascript
*  A command line application and a [basic understanding of how to use it](https://crisnoel.com/blog/introduction-to-the-command-line){:target="_blank"}.
*  And of course, you need to have [Node.js installed](https://nodejs.org/en/){:target="_blank"}.

## Setup
First, let's create a folder in the desktop directory or any directory that you prefer. We'll name it `node-intro`.
    
    $ mkdir node-intro

Then, cd into that directory and run `npm init`. It will prompt you to enter some information regarding the project information. For this tutorial it isn't important so let's just enter through it.

Once you've gone through all the prompts, you should notice a `package.json` file was created in `node-intro`. This file holds all the information that you would of entered in the previous step, along with the list of npm packages you will install, which we'll get into later.

## Using NPM
NPM is a CLI tool that will help us manage javascript packages necessary for various projects. We'll go through installing, updating, uninstalling and listing packages.

### Installing Packages

    $ npm install <package-name>

There are 3 different flags we can append to the end of the install command to save them in different locations:
*  **Global Flag (-g) -** Packages that you tend to use in multiple projects. Can be used in any directory you're in. Will save in your global packages list.
*  **Save Flag (-S) -** Packages that your project depends on to function. Will save in your project's package.json file under **dependencies**. Will be used in production environment.
*  **Dev Dependency Flag (-D) -** Packages that your project doesn't depend on to function. Will save in package.json file under **devDependecies**. Won't be used in production environment.

<span><i>*These flags can be used for update and uninstall as well, depending on the package you're targeting.</i></span>

Using the CLI inside the `node-intro` directory, let's install 3 different packages using the optional flags:

#### Nodemon
A utility that restarts server upon code change.

    $ npm install nodemon -g

<br>

#### Express
A node web framework.

    $ npm install express -S

<br>

#### Webpack
A front-end module bundler

    $ npm install nodemon -D

After installing **express** and **webpack**, you should notice a **node_modules** folder was created. This holds the express and webpack packages along with their dependencies. Your packages.json should be updated as well and look like this:

{% highlight json %}
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.1"
  },
  "devDependencies": {
    "webpack": "^2.2.1"
  }
}
{% endhighlight %}

A cool little tidbit with the package.json file. When sharing your project with colleagues through github, you generally dont want to include the node_modules folder since it can be quite large in file size. So how do your colleagues install all those packages that could total a dozen? As long as you uploaded the package.json file and saved the packages to the appropriate dependencies, then all they need to do is clone the project and run one command: `npm install`. It can save time and finger muscle fatigue.

### Updating Packages

    $ npm update <package-name>

To view your project's outdated packages, run: `npm outdated`.

### Uninstalling Packages

    $ npm uninstall <package-name>

To remove packages from package.json file, append the necessary flags.

### Listing Packages

    $ npm list --depth=0

When listing packages, npm will list **ALL** the packages in the node_modules or global repository, add the **depth** flag and set it to **0** to view only the top level packages. To view global packages, append the `-g` flag.

## Using Node
### Running Javascript Files
With node we can run javascript files and see the output right in CLI. In the `node-intro` folder, create a new file called `app.js`. Let's output a simple `Hello World!` message.

    console.log("Hello World!");

Now run: 

    $ node app.js

We should see **Hello World!** printed in the CLI.

### Creating a Web Server
If you want to run a web server, node can do that too. Let's create another file called `server.js` and paste in this code:

{% highlight javascript %}
var http = require('http');
var port = 8000;

var server = http.createServer(function (req, res) {

  /*
    Response: plain text
  */
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Hello World!");
  res.end();

}).listen(port);

console.log("Server running on port " + port);
{% endhighlight %}

#### Install http
Notice that we're requiring the `http` package. Let's install that with **NPM**.

#### Create web server
To use the http package as a web server, we set a variable called **server** and set it equal to the **createServer** method of http. Within that, we insert a callback function with two parameters: **req** and **res** (req standing for **request** and res standing for **response**). Since we don't have routes set up for this example, the req and res data will be reflected once a http request is made to `localhost:8000`.

#### Fill with response data
Inside the **server** callback function we call the res object and call on methods to set various data. We use **writeHead** to send a header with type of **text/plain** along with a 200 http status code. With the **write** method we can add any text we want to the document's body. The **end** method will close the body, without this, the document won't load.

#### Listen function
The final piece to the puzzle is the listen function, we pass it the port number from line 2. So when a request is made to `localhost:8000`, the response data inside the server object will fire off. 

### Starting the Web Server
We're ready to run the web server. Run `node server.js` in the CLI. It should display **Server running on port 8000**.

Now open a web browser of your choice and enter `http://localhost:8000` in the address bar. If all goes to plan, you should see `Hello World!` printed out again, this time in the browser.

To stop the server, press `ctrl + c` in the CLI.

## Conclusion
Through the end of this tutorial, we've learned how to **install**, **update**, **uninstall** and **list** packages with **NPM**. We've covered the basics, but you can learn more at the [npm docs](https://docs.npmjs.com/){:target="_blank"} or if you want to look through the [most popular packages](https://www.npmjs.com/browse/star){:target="_blank"}. With node, we've learned how to **process a javascript file** through the CLI, as well as **create a simple web server**.