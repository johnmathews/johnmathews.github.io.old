import os
import subprocess
import tempfile

(fd, path) = tempfile.mkstemp()
fp = os.fdopen(fd, 'w')
fp.write('default')
fp.close()

editor = os.getenv('EDITOR', 'vi')
print(editor, path)
subprocess.call('%s %s' % (editor, path), shell=True)

with open(path, 'r') as f:
    print(f.read())

os.unlink(path)
