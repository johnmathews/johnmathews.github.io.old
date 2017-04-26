Title: Time Since
Date: 2016-07-30 13:29
Author: John Mathews
Category: Other
Tags: CoffeeScript, JavaScript, Time Since, Übersicht, Widgets
Slug: time-since
Status: published

# 'Time since'
[Übersicht](http://tracesof.net/uebersicht/) is a desktop widgets app
for OS X. Its free, open source, and has a pretty good widgets library
to download and play with. A widget is a small app or feature that
embeds into the desktop and displays some simple information. It can
tell you what song is currently playing, a weather forecast, disk space
remaining, etc. The widgets are written in CoffeeScript, which is a
variant of JavaScript.

When I started using Übersicht I began playing with the widgets,
changing their appearance and their position on the screen. Some of the
widgets are too complicated to mess with without specific programming
knowledge, but others are surprisingly simple and intuitive.

By trial and error, I began to customize widgets to my preferences. One
widget I wanted to have but couldn't simply download was a timer to tell
me exactly how much time had elapsed since a specific past event.

By combining the display attributes of one widget and the calculation
method of another, I was able to mash together a foundation for a new
widget. I then added some extra features including:

-   Optional text before and after the elapsed time
-   Choice of expanded or abbreviated display styles
-   Flexible formatting to remove and zero amounts

The widget is called ["Time Since"](http://tracesof.net/uebersicht-widgets/#time_since) and is in
the Übersicht [widgets gallery](http://tracesof.net/uebersicht-widgets/).
