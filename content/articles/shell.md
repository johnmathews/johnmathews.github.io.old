Title: Shell Speed
Status: Draft
Slug: shell
Date: 2019-2-14 11:32
Category: Tools
Tags: shell, unix, zsh, bash
Image: src="/images/filename.extension" alt=" "
Tweet: Measure how slow you shell is and find out which components are causing
the biggest delays
Summary:

Opening up a new shell is annoyingly slow. Its not terrible, but its annoying.
The delay is long enough to be noticable and interrupt my flow. Its a niggle.

I wanted to find out which components were causing the most delay, so I used
the `time` to measure how long it takes to launch a shell. Even though shells
might appear to be part of the low level 'guts' of a computer, each shell is an
executable and can be treated as such.

To measure the startup speed of your shell, do:
``` Python
for i in $(seq 1 10); do /usr/bin/time $SHELL -i -c exit; done
```

This shows that it takes x to start `zsh`:
![Alt Text]({filename}/images/zsh_startup_speed.jpg)


You can compare the performance of difference shells by replacing `$SHELL` with
`zsh`, `bash`, `fish` etc.

Here are the results if I used `BASH` instead of `zsh` - 9.3x faster! (but
without useful tools and plugins):
![Alt Text]({filename}/images/bash_startup_speed.jpg)

Now that I can measure how long it takes to start, it would be useful to know
which proccesses are causing the greatest delays. This could be done with
something like `zsh -xv` which enables verbose output and xtrace. This creates
a tonne of output, but doesnt inlcude timestamps. All i really want is
a summary of how much time each subproccess required to run, i.e. a profiler
(an order blind profiler to be exact).

Add `zmodload zsh/zprof` at the start of `.zshrc` and `zprof` at the very end.
Now when I start `zsh` I see the following: 

![Alt Text]({filename}/images/zsh_order_blind_profiling.jpg)

Now all I need to do is make virtualenvwrapper run faster, or asyncronously, or
not at all...
