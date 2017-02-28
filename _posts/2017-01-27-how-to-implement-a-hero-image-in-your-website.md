---
title: "How to Implement a Hero Image In Your Website"
description: "Hero images are a growing web design trend seen in most modern websites today. In this tutorial we will look at how to implement a simple hero image."
excerpt: "Hero images are a growing web design trend seen in most modern websites today. It grabs the visitor's attention due to it's aesthetically pleasing layout. In this tutorial we will look at how to implement a simple hero image as shown above."
date: 2017-01-27
tags: ['html', 'css', 'hero image', 'tutorial']
image: post-hero-image-tutorial.png
---
## Introduction
Hero images are a growing web design trend seen in most modern websites today. It grabs the visitor's attention due to it's aesthetically pleasing layout. In this tutorial we will look at how to implement a simple hero image as shown above.

## 1. Picking an Image
Make sure your image is a high resolution photo, or it might not look so good. If you're downloading an image off the internet, you have to make sure you own the rights to that image, especially if you're going to upload your website to production. [Makerbook][makerbook], which links to different photo hosting websites, has tons of high resolution images that are under the creative commons zero license, meaning they're 100% free to use.

[makerbook]: http://makerbook.net/

## 2. Coding the HTML
Most hero images implemented in a web browser have a `heading and tagline text` in the middle of the site, a fixed transparent `navigation bar` at the top of the page and maybe a `ghost button` below your text. All of those elements will be inside of a div with an id of `hero`. To get the texts and button in the middle of the page, we will place them inside of a div with an id of `hero-mid`.

### Index.html
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hero Image Tutorial</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="hero">
        <nav>
            <logo>&#127796; LOGO</logo>
            <ul id="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Locations</li>
            </ul>
        </nav>
        <div id="hero-mid">
            <p id="tagline">City of Champions</p>
            <h1 id="headline">TAMPA BAY</h1>
            <a id="ghost-btn" href="#">Learn More</a>
        </div>
    </div>
</body>
</html>
{% endhighlight %}

## 3. Coding the CSS
The final step to make this all work is to code the `styles.css` file. We'll split it to four parts: `html & body`, `hero div`, `hero-mid div` and `navigation bar`.

### Html & Body
First we have to give the html and body tags a height of 100% so that the document takes up the full height of the browser window.
{% highlight CSS %}
html, body{
    height: 100%;
    font-family: monospace;
}
{% endhighlight %}

### Hero Div
Next, we'll take the hero div, enter the url for the image and keep it centered. Then we want to set the height to 100% so that it takes up the full height of the browser and also set the `background-size` property to cover so that the image is fully inside the window. Finally, like most hero images, an overlay is usually applied. To achieve this we will set the `background-blend-mode` property to overlay and then set the `background-color` to an rgba value.
{% highlight CSS %}
#hero{
    background: url('https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=472955c703541d5820e9f52eadee7bc4') center no-repeat;
    height: 100%;
    background-size: cover;
    background-blend-mode: overlay;
    background-color: rgba(80, 73, 48, 0.9);
}
{% endhighlight %}

### Hero-mid Div
For the hero-mid div we will assign property values so that the div and all of its containing elements will align to the middle of the containing `hero div`. After that you can style the headline, tagline and ghost button however you like.
{% highlight CSS %}
#hero-mid{
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    text-align: center;
}
#headline{
    font-family: fantasy;
    font-size: 4.5em;
    letter-spacing: .09em;
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;
}
#tagline{
    font-size: 1.5em;
    letter-spacing: .2em;
    margin: 0;
    color: rgba(255,255,255,.9);
}
#ghost-btn{
    color: white;
    text-decoration: none;
    border: 3px solid white;
    padding: 12px;
    display: inline-block;
    margin-top: 30px;
    letter-spacing: .08em;
}
{% endhighlight %}

### Navigation Bar
Last but not least, we'll code the navigation bar. We'll give the nav element a `fixed` position in order for it to stay at the top of the document even after scrolling the page, and a `z-index` of 1001 so that it will stay above other elements that may have a high z-index. We'll want the logo div on the left and the nav-menu on the right, so we will give them a `float` property of left and right respectively.
{% highlight CSS %}
nav{
    position: fixed;
    z-index: 1001;
    width: 100%;
    padding-top: 10px;
}
nav logo{
    float: left;
    margin: 13px 0;
    padding-left: 40px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
}
nav #nav-menu{
    float: right;
    padding: 0;
    padding-right: 40px;
}
#nav-menu li{
    display: inline;
    color: white;
    margin: 0 15px;
    font-size: 1.2em;
}
{% endhighlight %}
## Conclusion
And we're done! Now this isn't the de-facto way to create a hero image, this is just to give you an idea. You could rearrange and style the text, logo, navigation and buttons however you wish. You could even re-create the overlay blend in photoshop or gimp, it could be easier to find a suitable blend that way instead of playing with rgba values. But I'd suggest keeping the text in html for SEO purposes.