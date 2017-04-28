Title: Pelican
Slug: pelican
Date: 2017-4-28 1:21
Category: Tools
Tags: Pelican, Blog, css, html, Python
Status: draft
Summary:



# Blogging using Pelican

Wordpress is a great way to being blogging, but after awhile I began to feel like I was compromising on the design and functionality of my blog, and I wanted to tailor its design and features. After I began blogging in 2016, I began to notice the design of other blogs I admired, and I realised that many of them were static sites that had realtively simple designs so that it was easy to focus on the content. Examples of blog designs I admire are **unwiredcouch.com** and **here** .

This led me to learn about static sites, which contain only HTML and CSS, and are faster to load and easier to design that a dynamic site built using PHP, such as Wordpress. Because I was familiar with PYthon already, I chose to use Pelican rather thank Jekyll or Ghost, which are other popular static site generators.

There are plenty of sites to tell you how to download and get started with blogging in Pelican, so here I will only inlcude my experience of the learning curve once the site was initally set-up. When I was learning how to begin to use Pelican, I found **amyhanlons** blog particularly useful and clear.

## The learning curve

… was much longer than I expected. Since setting out to convert my blog from Wordpress to Pelican, I've taught myself enough of the following languages and tools to hack my blog together:

### HTML

Its quirky, but its intuitive. Tags make sense, comments are laborious, learning by google is relatively quick.

### CSS

Much more concise that HTML, and impossible (to me) to learn justby looking at examples. There was a lightbulb moment when I realised CSS Selectors were a thing...

I ended up using a trial subscription to **Thinkfuls** Front-end developer course, which is pretty good at explaining how CSS is structured and how to arrange content on a page. If I still had access, I'd be completing the second half of the course :)

### Jinja templates

Jinja is a tool written in Python to create HTML pages. It doesnt look intuitive to me, but I've been able to get enough done by copy-pasting similar snippets from other parts of the theme I originally downloaded (Thanks **Molivier**!) to make the changes I wanted. I'd like to learn more as it seems to be both powerful and simple (once you know how to read the syntax)

### Pelican

To build a website using Pelican, you need to run a command from the terminal. There are various options but I found myself using only two commands so far. "make devserver" to initialise a local server and view my changes locally before uploading (and its opposite, "make stopserver" to stop running localhost) and then "pelican content -s publishconf.py" to generate the output suitable for remote hosting (on github pages, which I didn't initally realise was possible)

### Git

This really challenged me, and I still dont feel like I know what I'm doing. Git is far more powerful than I need it to be, when all I want to do is undo some erronous edits and upload a new version of the site to Github. 

I can stage and commit files, I can create local and remote repo's from the command line. I can change a remote's URL, reset a repo and force a push or a pull. That's all. I haven't tried to merge or to create a test branch, and if some part of the process goes wrong it usually takes hours to make it right again. 

This is one tool that the awesome SO/Google tag team cannot magic up the exact right answer immediatly, unfortunately. 

There is still an output folder in the source file repo **blog** that is… mysterious to me. Its not the real output, its a version frozen in time from a few weeks ago. How did it get there and what is it doing… I cannot say. It was created one afternoon in a blur of frustrated google queries and copy/paste/hope terminal commands. 

I find git's commands the least intuitive of all the tools I use, with its preceeding single dashes and double dashes, and random words thrown into the middle of otherwise reasonable commands. 

But Git is ubiquitous and Github is awesome, so I will learn it. 



## Github pages with an external URL

You'll need to add a file called CNAME to the repo containing the output. CNAME should contain the address of your site in lowercase. Simple.

You'll also need to update the DNS (?) of your domain name to point the name at Github's servers. Here is the explanation i used. It took about 12 hours for the changes to propagate, and during that time I had variable success loading the site. 

## Plugins

One thing I didn't want when moving away from Wordpress was a site bloated with features that didn't make the content easier to read. However I found I still needed a few plugins to optimise my site and provide some basic functionality that doesnt come baked into vanilla Pelican.

### ipython notebooks 

Super useful, as all I need to do to publish a notebook as a webpage is copy the .ipynb file into the context directory and add a sidecar .ipynb-meta file with the standard meta data. This functionality is one of the main reasons why Pelican is popular with data bloggers. (Though Nikola is another option).

### Neighbors

At the end of a post, provide a link to the previous and next blog posts - I was surprised this wasn't included as standard. After putting the plugin in the plugins folder and updating pelicanconf.py, you need to copy a couple of jinja snippets into a template.

### Optimise images

Make those images as small as possible to help make the site as fast as possible. Add the plugin, update pelicanconf.py, and thats all.

### Assets

Before I started working with Pelican, minifying css and JavaScript would have seemed totally beyond me. But once pingdom.com and googles pagespeed started complaining about my multiple .css files, I decided to see what could be done. As usual, the plugin is on Github and the  readme is clear and accurate. 