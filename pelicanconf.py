#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

RELATIVE_URLS = True #False for www, True for development/testing # If set to False, Pelican will use the SITEURL setting to construct absolute URLs.

#WRITE_SELECTED = ["/output/multisig.html"]

AUTHOR = 'John Mathews'
SITENAME = "John Mathews"
SITEURL = 'http://johnmathews.eu' # should include http://
ASSET_URL = './css/'

STATIC_CREATE_LINKS = True

USE_CATEGORIES = False # on index page show either chronologial or grouped by categories
USE_FOLDER_AS_CATEGORY = False
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False 
SLUGIFY_SOURCE = 'basename' # 'title' uses post title, 'basename' uses filename of content
DIRECT_TEMPLATES = (('index', 'tags', 'categories', 'archives'))
NO_HEADER = ['archives','tags', 'categories']
SITEMAP = {
    'format': 'xml' ,
    'priorities' : {'articles': 0.5, 
                  'pages': 0.5,
                  'indexes': 0.5 
                 },
    'changefreqs': { 'articles': 'daily',
                  'pages': 'daily',
                  'indexes': 'daily'
                }
        }

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.fenced_code': {}
    },
    'output_format': 'html5',
}
PATH = 'content' 
OUTPUT_PATH = 'output/'
PLUGIN_PATHS = ['./plugins']
PLUGINS = ['ipynb.markup', 'neighbors', 'render_math', 'assets', 'sitemap',
           'pelican_alias', 'share_post', 'tag_cloud', 'encrypt_content'] #, 'optimize_images'
LOAD_CONTENT_CACHE = False

ENCRYPT_CONTENT = {
    'title_prefix': '',
    'summary': ''
}

IPYNB_IGNORE_CSS = False
IPYNB_USE_META_SUMMARY = True
IGNORE_FILES = ['.ipynb_checkpoints']

THEME = 'theme/nested'
MARKUP = ('md', 'ipynb')
PYGMENTS_STYLE = 'bw'
TYPOGRIFY = True
# JINJA_FILTERS = {'datetime':format_datetime}
SUMMARY_MAX_LENGTH = 0


DEFAULT_METADATA = {
}

DEFAULT_DATE_FORMAT = '%b %d %Y'
TIMEZONE = 'Europe/Paris'
DEFAULT_LANG = 'en'
WITH_FUTURE_DATES = False # if False, future dates have default status of 'draft'

TAG_CLOUD_STEPS = 4
TAG_CLOUD_MAX_ITEMS = 100 # Count of different font sizes in the tag cloud.
TAG_CLOUD_SORTING = 'alphabetically' # The tag cloud ordering scheme. Valid values: random, alphabetically, alphabetically-rev, size and size-rev
TAG_CLOUD_BADGE = False # Optionnal setting : can bring badges, which mean say : display the number of each tags present on all articles.

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
#NEST_HEADER_LOGO = '/images/john_mathews.jpeg'
NEST_HEADER_LOGO_BIG = '/images/logo_big.jpeg'

TWITTER_HANDLE = 'johnmathews' # dont need the @
EMAIL_ICON = '/images/email_logo.png'
LINKEDIN_ICON = '/images/linkedin_logo.png'
FACEBOOK_ICON = '/images/facebook_logo.png'
TWITTER_ICON = '/images/twitter_logo.png'

# Static files
STATIC_PATHS = ['images', 'documents', 'extra/robots.txt', 'extra/favicon.png', 'extra/logo.svg', 'CNAME']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.png': {'path': 'favicon.png'},
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
NEST_INDEX_HEAD_DESCRIPTION = u'Homepage'
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
NEST_TAGS_CONTENT_TITLE = u''
NEST_TAGS_CONTENT_LIST = u'tagged'

