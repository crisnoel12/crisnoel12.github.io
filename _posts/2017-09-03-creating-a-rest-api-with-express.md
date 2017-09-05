---
title: "Creating a REST API with Express"
description: "Express is a Node Web Framework that was created to build Web apps and APIs. In this tutorial, we're going to look at how to create a todo API using express."
excerpt: "Express is a Node Web Framework that was created to build Web apps and APIs. In this tutorial, we're going to look at how to create a todo API using express. Now what is a REST API? REST stands for (Representational State Transfer), while API stands for (Application Programming Interface). Basically a REST API allows developers to make **HTTP** requests to it and in return receive a response."
date: 2017-09-04
tags: ['rest', 'api', 'express']
image: rest-api.png
---
## Introduction
Express is a Node Web Framework that was created to build Web apps and APIs. In this tutorial, we're going to look at how to create a todo API using express. Now what is a REST API? **REST** stands for (Representational State Transfer), while **API** stands for (Application Programming Interface). Basically a REST API allows developers to make **HTTP** requests to it and in return receive a response.

## Pre-requisites
*  A text editor
*  Command Line / Terminal
*  [Node.js](https://nodejs.org/en/){:target="_blank"}. 
*  [MongoDB](https://www.mongodb.com/){:target="_blank"}. 
*  [Postman](https://www.getpostman.com/){:target="_blank"}.

## Directory Structure
This project will be nice and small. Here's a look at the base files and folders.

    todo-api
    |--models
    |----todo.js
    |--node_modules
    |--routes
    |----todos.js
    |--package.json
    |--server.js

## Project Setup
1. Start up MongoDB
2. Create a directory anywhere in your computer and change directories into it.
3. Open a up a terminal and run `npm init` and hit enter through the prompts.
4. Install nodemon globally. `npm install -g nodemon`. This will refresh changes to our project.
5. Install **dependencies**

{% highlight bash %}
npm install -S express mongoose body-parser morgan cors
{% endhighlight %}

or if you prefer [Yarn](https://yarnpkg.com/){:target="_blank"}:

{% highlight bash %}
yarn add express mongoose body-parser morgan cors
{% endhighlight %}

## Server.js
Create a file called server.js in your project. This file will essentially have all of our server logic hence the name server.js.

{% highlight javascript %}
'use strict';

/* Packages */
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var port = process.env.PORT || 8080;
var app = express();

/* Connect to Mongo */
mongoose.connect("mongodb://localhost:27017/todos");
var db = mongoose.connection;
db.on("error", function (err) {
    console.error("\x1b[31m%s\x1b[0m", "Connection error:", err);
});
db.once("open", function () {
    console.log("\x1b[36m%s\x1b[0m", "Connected to Mongo");
});

/* Middleware */
app.use(logger("dev")); // logs http requests in console
app.use(bodyParser.json()); // enables us to get data from a post request

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Start Server
app.listen(port, function () {
    console.log("\x1b[36m%s\x1b[0m", "Server up and running on port:", port);
});
{% endhighlight %}

Just with any node project, we require our dependencies that we installed earlier at the top of the file. Next we connect to our local MongoDB service and append the name of the database we want to create which is `/todos`.

Now, in your terminal run: `nodemon server.js`. Make sure you are running MongoDB in the background or else you might receive a console error in your terminal. If everything went smoothly, you should see:

    Server up and running on port: 8080
    Connected to Mongo

at the end of your console.

Notice the `app.use()` methods in the file. These are express' middleware. They handle events and routes when triggered. Later we will add our `todos routes middleware` into the mix so we can **create, read, update and delete todos**.

Lastly we have the `app.listen()` method, this basically starts our server at a given port. We set it to the node environment's port **or** port 8080. You can visit `localhost:8080` in your browser, you should see an error message saying `not found`. We have not set any routes in the root of the server, that's why it defaulted to use the `404` middleware.

## Creating our Todo Model
In your project directory create a folder called `Models` and then a file called `Todo.js` within it. This file will shape how we want our todos to look. We want a **title, status and creation_date** for every todo. We'll use the [mongoose](http://mongoosejs.com/docs/guide.html){:target="_blank"} package to help us achieve this. 

### Models/Todo.js
{% highlight javascript %}
'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    creation_date: { 
        type: Date,
        required: true, 
        default: Date.now 
    }
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo; // export `Todo` variable to be available for other files
{% endhighlight %}

## Todo Routes
Now is the time to create our routes and test our endpoints. We'll be using Express' router to help us. When we send a `GET` request to `localhost:8080/api/todos`, our goal is to get a list of all the todos from the todos database in json form. When we send a `POST` request to the same endpoint, we want to create a new todo from a parsed json object. Here's a table to better illustrate what we're trying to accomplish.

{:.table .table-striped}
| Route          | HTTP Verb     | Action          |
|:-------------- |:------------- |:--------------- |
| /api/todos     | `GET`         | Get all todos   |
| /api/todos     | `POST`        | Create a todo   |
| /api/todos/:id | `GET`         | Get single todo |
| /api/todos/:id | `PUT`         | Update a todo   |
| /api/todos/:id | `DELETE`      | Delete a todo   |

Create a routes folder, then create a file named Todos.js inside.

### Routes/Todos.js
{% highlight javascript %}
"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

var Todo = require("../models/todo");

router.get('/', function(req, res, next) {
    res.json({message: 'API working!'})
});

module.exports = router; // export `router` variable to be available for other files
{% endhighlight %}

Import the `routes/todos.js` file near top of server.js file.

### Server.js
{% highlight javascript %}
var todosRoute = require('./routes/todos.js');
{% endhighlight %}

Add a todos route middleware at `/api/todos` just above the 404 error handler.

{% highlight javascript %}
// Register 'todos' Route
app.use("/api/todos", todosRoute);
{% endhighlight %}

Notice how we're using `/api/todos` in the route middleware and then passing the `todosRoute` that we imported. All the routes that we define in the **Routes/todos.js** will be based on **/api/todos**. So routes referencing `"/"` in **Routes/todos.js** will go to **/api/todos (localhost:8080/api/todos)**.

## Postman
Open up postman. Postman will help us test HTTP verbs that aren't supported by browsers by default. Now in Postman's url bar go to `localhost:8080/api/todos`, make sure the HTTP verb is set to **GET** and press send. You should see something like this.

![Cris Noel postman api is working image.](/assets/blog/postman-api-working.png)

Let's actually get some real todo data up in here. First let's create a post method.

### Routes/todos.js
{% highlight javascript %}
router.post('/', function(req, res, next) {
    var todo = new Todo(req.body);
    todo.save(function(err, todo) {
        if (err) return next(err);
        res.status(201);
        res.json({message: "Todo Created!", todo: todo});
    });
});
{% endhighlight %}

Now let's add our first todo! Change the HTTP Verb from **GET** to **POST**. Click the `body` tab, select the **raw** radio button and select `JSON(application/json)` from the dropdown. Let's set `Mow the lawn` as our first todo. Since our **Todo Model** has default fields for the creation date and status, we only need to supply the title field. In the textarea below the radio buttons enter a json object for the todo like so.

![Cris Noel postman post image.](/assets/blog/postman-post.png)

Add another todo, `Get a haircut` just for kicks.

Let's change our `get all todos` method to retrieve all of our todos.

### Routes/todos.js
{% highlight javascript %}
router.get('/', function(req, res, next) {
    Todo.find(function(err, todos){
        if (err) return next(err);
        res.json(todos);
    });
});
{% endhighlight %}

Test with postman, change HTTP verb back to **GET**, make sure url is `localhost:8080/api/todos` and press send. We should get back two total todos: **Mow the lawn** and **Get a haircut**.

## Get Single Todo
We have three more actions to finish. All three will use the `id` params. Thankfully, Mongo automatically creates an `id` field for each todo document of type **ObjectId**.

{% highlight javascript %}
router.get('/:id', function(req, res, next) {
    var id = mongoose.Types.ObjectId(req.params.id); // cast id param to ObjectId
    Todo.findById(id, function (err, todo) {
        if (err) return next(err);
        if (!todo) { err = new Error("Todo Not Found"); err.status = 404; return next(err); } // if todo doesn't exist, set err
        res.json(todo);
    });
});
{% endhighlight %}

In Postman, copy the `id` value for `Mow the lawn` and append it to the url to check.

## Update Todo
We'll use the `put` method to update our todos. Within that we'll use the `findByIdAndUpdate` mongoose method. This will allow us to return the new todo in the response with the use of the `{ new: true }` parameter. We'll also set the `validators` to **true** so users can't enter a **null** todo.

{% highlight javascript %}
router.put('/:id', function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function (err, todo) {
        if (err) return next(err);
        if (!todo) { err = new Error("Todo Not Found"); err.status = 404; return next(err); }
        res.json({ message: "Todo updated!", todo: todo });
    });
});
{% endhighlight %}

Change the HTTP verb in Postman to `put`. Make sure url is at `localhost:8080/api/todos/[id-of-mow-the-lawn]`. Now just like the **post** method we're going to go the body tab, select raw and select JSON(application/json) from the dropdown. Let's update `Mow the lawn`'s status to true, meaning we've completed the todo. In the textarea, type a json object with status equaling true.

    {
        "status": true
    }

## Delete Todo
Finally, for our last HTTP operation, we'll set up a delete route. We can use **mongoose's** remove method to achieve deleting a todo from the database.

{% highlight javascript %}
router.delete('/:id', function (req, res, next) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        if (!todo) { err = new Error("Todo Not Found"); err.status = 404; return next(err); }
        todo.remove(function(err){
            if (err) return next(err);
            res.json({message: "Todo deleted!"});
        })
    });
});
{% endhighlight %}

## Conclusion
And just like that, we have a RESTful API up and running. In order for other domains to interact and fetch data from this API we will have to enable the [cors](https://github.com/expressjs/cors){:target="_blank"} package. CORS stands for **Cross-Origin Resource Sharing**. Domains, by default don't allow other domains to fetch their data, we can remedy this by enabling cors to specific routes or all routes. We will tackle this in a future blog post with React.js.

<hr />
{:.row}
[View Code on GitHub](https://github.com/crisnoel12/express-todo-api){:.btn .col-xs-10 .col-xs-offset-1 .col-md-12 .col-md-offset-0 target="_blank"}
