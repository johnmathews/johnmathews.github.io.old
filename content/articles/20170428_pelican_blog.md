Title: Blogging with Pelican
Slug: pelican
Date: 2017-4-28 1:21
Category: Tools
Tags: Pelican, Blog, Python 
Status: published 
Image: src="/images/get_pelican.jpg" alt="Pelican"
Summary: I became frustrated with my WordPress blog and switched to Pelican. Creating a blog in Pelican is a great way to learn HTML, CSS, Jinja templates and Git.

When I began to blog in 2016, I noticed the design of other blogs I admired, and I realised that many of them were static sites that had realtively simple designs. Their design made it easier to focus on the content by removing visual clutter and I wanted this for my blog, too. Examples of blog designs I admire are [unwiredcouch.com](https://unwiredcouch.com) and [CuriousGnu](https://www.curiousgnu.com). I used Wordpress to buid and publish my blog, which is a great way to begin, but I began to feel like I was compromising on the design and functionality. I wanted to have control over my blog's features. 

This led me to learn about static sites, which contain only fixed content, and are faster to load and easier to design that a dynamic site built using PHP, such as Wordpress. Because I was familiar with Python already, I chose to use [Pelican](https://blog.getpelican.com/) rather than another static site generator such as  Jekyll.

There are plenty of sites to tell you how to start blogging in Pelican, so here I will inlcude my experience of the learning curve once the site was initally set-up. When I was learning how to begin, I found [Amy Hanlons](http://mathamy.com/migrating-to-github-pages-using-pelican.html) blog particularly useful and clear.

## The learning curve

… was longer than I expected. Since setting out to convert my blog from Wordpress to Pelican, I've taught myself enough of the following tools to hack my blog together. 

### HTML

I find HTML quirky but intuitive. Tags make sense, comments are laborious and learning by google is relatively quick. 

### CSS

Writing CSS feels a lot more concise that HTML. It also feels like its impossible to learn and hack together new phrases by only looking at examples. There was a lightbulb moment when I realised CSS Selectors were a thing...

I ended up using a trial subscription to [Thinkfuls](https://www.thinkful.com/bootcamp/web-development/) Front-end developer course, which is pretty good at explaining how CSS is structured and how to arrange content on a page. If I still had access, I'd be completing the second half of the course :)

### Jinja templates

Jinja is a tool written in Python to create HTML pages. It doesnt look intuitive to me, but I've been able to get enough done by copy-pasting similar snippets from other parts of the theme I started with ([Thanks Molivier!](https://github.com/molivier/nest)) to make the changes I wanted. I'd like to learn more as it seems to be powerful and simple.

### Pelican

To build a website using Pelican, you need to run commands from the terminal. There are various options but I found myself using only a few commands regularly. "Pelican-quickstart" will generate a project skeleton to get you started. "make devserver" will initialise a local server so that I can view changes locally before uploading (and its opposite, "make stopserver" to stop running localhost) and then "pelican content -s publishconf.py" generates the html and css for remote hosting (on github pages, which I didn't initally realise was possible)

### Git

This really challenged me, and I still dont feel like I know what I'm doing. Git is far more powerful than I need it to be, when all I want to do is undo some erronous edits and upload a new version of the site to Github. 

I can stage and commit files, I can create local and remote repo's from the command line. I can change a remote's URL, reset a repo and force a push or a pull. That's all. I haven't tried to merge or to create a test branch, and if some part of the process goes wrong it usually takes hours to make it right again. 

This is one tool for which the awesome SO and Google cannot magic up the exact right answer immediatly, unfortunately. 

For example, there is still an output folder in the [source repo](https://github.com/johnmathews/blog) that is… mysterious to me. Its not the real output, its a version frozen in time from a few weeks ago, and it has an "@" in its name. I don't know how it got there. It was created one afternoon in a blur of frustrated google queries and copy/paste/hope terminal commands. 

I find git's commands the least intuitive of all the tools I use, with its preceeding single dashes and double dashes, and random words thrown into the middle of otherwise reasonable commands. 

But Git is ubiquitous and Github is awesome, so I will learn it. 

## Github pages with an external URL

You'll need to add a file called CNAME to the repo containing the output. CNAME should contain the address of your site in lowercase. Simple.

You'll also need to update the DNS records of your domain name to point the name at Github's servers. For Github, you need two "A Records" with host type "@" and values "192.30.252.153" and "192.30.252.154" respectively. You also need a CNAME record with host type "www" and the value equal to "username.github.io". It took about 12 hours for the changes to propagate, and during that time I had variable success loading the site. 

## Plugins

One thing I didn't want when moving away from Wordpress was a site bloated with features that didn't make the content easier to read. However I found I still needed a few plugins to optimise my site and provide some basic functionality that doesnt come with the vanilla Pelican.

### iPython notebooks 

Super useful, as all I need to do to publish a notebook as a webpage is copy the .ipynb file into the context directory and add a sidecar .ipynb-meta file with standard meta data. This functionality is one of the main reasons why Pelican is popular with data bloggers. (Though [Nikola](https://getnikola.com/) is another option).

### Neighbors

At the end of a post there should be a link to the previous and next blog posts - I was surprised this wasn't included as standard. After putting the plugin in the plugins folder and updating pelicanconf.py, you need to copy a couple of jinja snippets into a template, and maybe add some css to make the links look nice.

### Optimise images

Make those images as small as possible to help make the site as fast as possible. Add the plugin, update pelicanconf.py, and thats all.

### Assets

Before I started working with Pelican, minifying css and JavaScript would have seemed totally beyond me. But once [Pingdom](https://tools.pingdom.com/) and Googles [Pagespeed](https://developers.google.com/speed/pagespeed/insights/) started criticising me for my multiple .css files, I decided to see what could be done. As with all these plugins, you can get it from Github and the readme is clear and accurate. 

## Conclusion

I'm super happy wth the websites design and functionality. It's designed the way I want it, and I've learnt a ton of useful stuff along the way.
