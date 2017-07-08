import sys
import os 
import subprocess
from datetime import datetime

TEMPLATE = """
Title: {title}
Slug: {slug}
Date: {year}-{month}-{day} {hour}:{minute:02d}
Category: Data | DLT | Engineering | Finance | Front-end | Lifestyle | Startups | Tools 
Tags:
Image: src="/images/filename.extension" alt=" " 1200x627px
Tweet: #hashtags
Summary:
Status: draft

"""


def make_entry(title):
    today = datetime.today()
    slug = title.lower().strip().replace(' ', '-')
    f_create = "content/articles/{}.md".format(slug)
    t = TEMPLATE.strip().format(title=title,
                                hashes='#' * len(title),
                                year=today.year,
                                month=today.month,
                                day=today.day,
                                hour=today.hour,
                                minute=today.minute,
                                slug=slug)
    with open(f_create, 'w') as w:
        w.write(t)
    print("File created -> " + f_create)
    os.system("open "+f_create)

'''
    App_Path = '/usr/local/Cellar/macvim/8.0-127/MacVim.app'
    subprocess.Popen([App_Path, f_create], shell = True)
'''
if __name__ == '__main__':

    if len(sys.argv) > 1:
        make_entry(sys.argv[1])
    else:
        print("No title given")

