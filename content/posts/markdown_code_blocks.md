# code blocks

## Python test
The beginning of the test
<!-- language: lang-python -->

    import re
    # ...
    print("foo")
    from pandas import anything
    # this is a comment
    '''
    this is a long comment
    '''
    print("foo")
    def myfunc(a,b):
        for i in b:
            a**2 / b + 5
            b=[]
            c={b:a,c:d}
    return

This is another method

    #!/usr/bin/python
    import abc

This is another little test:

    #!python
    import abc
    print("foo")
    def myfunc(a,b):
        for i in b:
            aˆ2
            b=[]
            c={b:a,c:d}
    return


This is a test of how to show python code:

    :::python
    from pygments.formatters import HtmlFormatter

    code = 'print "Hello World"'
    print highlight(code, PythonLexer(), HtmlFormatter())

    print("foo")
    from pandas import anything
    # this is a comment
    '''
    this is a long comment
    '''
    print("foo")
    def myfunc(a,b):
        for i in b:
            aˆ2
            b=[]
            c={b:a,c:d}
    return
    
```python
print("foo")
from pandas import anything
# this is a comment
'''
this is a long comment
'''
print("foo")
def myfunc(a,b):
    for i in b:
        aˆ2
        b=[]
        c={b:a,c:d}
return
```

Inside a list:

1. Here is some text. Let us try the ::: version of syntax highlighting.

    Only four spaces to indent:

    :::python
    print("foo")

    Using eight spaces to indent:
    
        :::python
        from pandas import anything
        # this is a comment
        '''
        this is a long comment
        '''
        print("foo")
        def myfunc(a,b):
        for i in b:
            aˆ2
            b=[]
            c={b:a,c:d}
        return

2. Now let us try the ``` version of syntax highlighting.

    Only four spaces to indent:

    ```python
    print("foo")

    def myfunc(a,b):
        for i in b:
            aˆ2
        return

    ```

    Using eight spaces to indent:

        ```python
        print("foo")
        
        ```
    
End of test.

