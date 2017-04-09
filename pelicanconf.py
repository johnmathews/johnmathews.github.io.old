#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

RELATIVE_URLS = True #True for www, True for local # If set to False, Pelican will use the SITEURL setting to construct absolute URLs.

AUTHOR = 'John Mathews'
SITENAME = "John Mathews"
SITEURL = 'http://johnmathews.eu' # should include http://
ASSET_URL = './css/'
DISQUS_SITENAME = 'johnmathews'
GOOGLE_ANALYTICS = 'UA-82253540-1'

USE_FOLDER_AS_CATEGORY = False
DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False
SLUGIFY_SOURCE = 'basename' # 'title' uses post title, 'basename' uses filename of content

'''
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}
'''

'''
MARKDOWN = ['codehilite(css_class=highlight,guess_lang=False,linenums=False)',
                 'headerid',
                 'extra']
'''

PATH = 'content' 
OUTPUT_PATH = 'output/'
PLUGIN_PATHS = ['./plugins']
PLUGINS = ['ipynb.markup', 'neighbors', 'render_math', 'assets']
LOAD_CONTENT_CACHE = False

IPYNB_IGNORE_CSS = False
IGNORE_FILES = ['.ipynb_checkpoints']

THEME = 'theme/nest'
MARKUP = ('md', 'ipynb')
PYGMENTS_STYLE = 'bw'
TYPOGRIFY = True
# JINJA_FILTERS = {'datetime':format_datetime}

DEFAULT_METADATA = {
}

DEFAULT_DATE_FORMAT = '%b %d %Y'
TIMEZONE = 'Europe/Paris'
DEFAULT_LANG = 'en'
WITH_FUTURE_DATES = True # if False, future dates have default status of 'draft'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = () #its a list of lists. each item is a list where the first item is the text and the scond is the url

# Social widget
SOCIAL = ()

DEFAULT_PAGINATION = 20

# Add items to top menu before pages
MENUITEMS = [] #[('Homepage', '/'),('Categories','/categories.html')]

# Add header background image from content/images : 'background.jpg'
NEST_HEADER_IMAGES = ''
NEST_HEADER_LOGO = '/images/logo.jpeg'

# Static files
STATIC_PATHS = ['images', 'documents', 'extra/robots.txt', 'extra/favicon.ico', 'extra/logo.svg']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/logo.svg': {'path': 'logo.svg'}
}

# Footer
NEST_SITEMAP_COLUMN_TITLE = u'Sitemap'
NEST_SITEMAP_MENU = [('Archives', '/archives.html'),('Tags','/tags.html'), ('Authors','/authors.html')]
NEST_SITEMAP_ATOM_LINK = u'Atom Feed'
NEST_SITEMAP_RSS_LINK = u'RSS Feed'
NEST_SOCIAL_COLUMN_TITLE = u'Social'
NEST_LINKS_COLUMN_TITLE = u'Links'
NEST_COPYRIGHT = u'&copy; blogname 2015'
# Footer optional
NEST_FOOTER_HTML = ''
# index.html
NEST_INDEX_HEAD_TITLE = u'Homepage'
NEST_INDEX_HEADER_TITLE = u'My Awesome Blog'
NEST_INDEX_HEADER_SUBTITLE = u'Smashing The Stack For Fun And Profit'
NEST_INDEX_CONTENT_TITLE = u''

# archives.html
NEST_ARCHIVES_HEAD_TITLE = u'Archives'
NEST_ARCHIVES_HEAD_DESCRIPTION = u'Posts Archives'
NEST_ARCHIVES_HEADER_TITLE = u'Archives'
NEST_ARCHIVES_HEADER_SUBTITLE = u'Archives for all posts'
NEST_ARCHIVES_CONTENT_TITLE = u'Archives'
# article.html
NEST_ARTICLE_HEADER_BY = u'By'
NEST_ARTICLE_HEADER_MODIFIED = u'modified'
NEST_ARTICLE_HEADER_IN = u'in category'
# author.html
NEST_AUTHOR_HEAD_TITLE = u'Posts by'
NEST_AUTHOR_HEAD_DESCRIPTION = u'Posts by'
NEST_AUTHOR_HEADER_SUBTITLE = u'Posts archives'
NEST_AUTHOR_CONTENT_TITLE = u'Posts'
# authors.html
NEST_AUTHORS_HEAD_TITLE = u'Author list'
NEST_AUTHORS_HEAD_DESCRIPTION = u'Author list'
NEST_AUTHORS_HEADER_TITLE = u'Author list'
NEST_AUTHORS_HEADER_SUBTITLE = u'Archives listed by author'
# categories.html
NEST_CATEGORIES_HEAD_TITLE = u'Categories'
NEST_CATEGORIES_HEAD_DESCRIPTION = u'Archives listed by category'
NEST_CATEGORIES_HEADER_TITLE = u'Categories'
NEST_CATEGORIES_HEADER_SUBTITLE = u'Archives listed by category'
# category.html
NEST_CATEGORY_HEAD_TITLE = u'Category Archive'
NEST_CATEGORY_HEAD_DESCRIPTION = u'Category Archive'
NEST_CATEGORY_HEADER_TITLE = u'Category'
NEST_CATEGORY_HEADER_SUBTITLE = u'Category Archive'
# pagination.html
USE_PAGER = False
NEST_PAGINATION_PREVIOUS = u'Previous'
NEST_PAGINATION_NEXT = u'Next'
# period_archives.html
NEST_PERIOD_ARCHIVES_HEAD_TITLE = u'Archives for'
NEST_PERIOD_ARCHIVES_HEAD_DESCRIPTION = u'Archives for'
NEST_PERIOD_ARCHIVES_HEADER_TITLE = u'Archives'
NEST_PERIOD_ARCHIVES_HEADER_SUBTITLE = u'Archives for'
NEST_PERIOD_ARCHIVES_CONTENT_TITLE = u'Archives for'
# tag.html
NEST_TAG_HEAD_TITLE = u'Tag archives'
NEST_TAG_HEAD_DESCRIPTION = u'Tag archives'
NEST_TAG_HEADER_TITLE = u'Tag'
NEST_TAG_HEADER_SUBTITLE = u'Tag archives'
# tags.html
NEST_TAGS_HEAD_TITLE = u'Tags'
NEST_TAGS_HEAD_DESCRIPTION = u'Tags List'
NEST_TAGS_HEADER_TITLE = u'Tags'
NEST_TAGS_HEADER_SUBTITLE = u'Tags List'
NEST_TAGS_CONTENT_TITLE = u'Tags List'
NEST_TAGS_CONTENT_LIST = u'tagged'

