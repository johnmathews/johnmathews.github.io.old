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

and Github. I wanted to host my site using Github Pages so setting up a repository of the output was necessary, but I



1.  CSS
2.  JavaScript
3.  Jinja templates
4.  Pelican
5.  Git



