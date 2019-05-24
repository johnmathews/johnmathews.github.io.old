#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

DISQUS_SITENAME = 'johnmathews'
GOOGLE_ANALYTICS = 'UA-82253540-1'

DELETE_OUTPUT_DIRECTORY = False
RELATIVE_URLS = False #False for www, True for development/testing # If set to False, Pelican will use the SITEURL setting to construct absolute URLs.

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

''' specified in pelicanconf.py
SITEURL = 'johnmathews.eu'
'''

