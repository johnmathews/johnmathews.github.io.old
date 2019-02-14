Title: zsh startup speed
Status: Published
Slug: shell
Date: 2019-2-14 11:32
Category: Tools
Tags: shell, unix, zsh, bash
Image: src="/images/zsh_order_blind_profiling.jpg" alt="what zsh spends its time doing when it starts"
Tweet: Measure how slow you shell is and find out which components are causing the biggest delays
Summary: I used profiling to see why zsh was taking so long to load

Opening up a new shell is annoyingly slow. Its not terrible, but its annoying.
The delay is long enough to be noticable and interrupt my flow. Its a niggle.

I wanted to find out which components were causing the most delay, so I used
the `time` to measure how long it takes to launch a shell. Even though shells
might appear to be part of the low level 'guts' of a computer, each shell is an
executable and can be treated as such.

To measure the startup speed of your shell, do:
``` zsh
for i in $(seq 1 10); do /usr/bin/time $SHELL -i -c exit; done
```

![zsh profile]({filename}/images/zsh_startup_speed.jpg)

This shows that it takes 0.84 seconds to start `zsh` - not terrible, but not
great:

You can compare the performance of different shells by replacing `$SHELL` with
`zsh`, `bash`, `fish` etc.

Here are the results if I used `BASH` instead of `zsh` - 9.3x faster! (but
without useful tools and plugins):
![bash profile]({filename}/images/bash_startup_speed.jpg)

Now that I can measure how long it takes to start, it would be useful to know
which proccesses are causing the greatest delays. This could be done with
something like `zsh -xv` which enables verbose output and xtrace. This creates
a tonne of output, but doesnt inlcude timestamps. All I really want is
a summary of how much time each subproccess required to run, i.e. an order blind profiler.

Add `zmodload zsh/zprof` at the start of `.zshrc` and `zprof` at the very end.
Now when I start `zsh` I see the following: 

![zsh startup components]({filename}/images/zsh_order_blind_profiling.jpg)

Next steps - make virtualenvwrapper run faster, or asyncronously, or
not at all...
