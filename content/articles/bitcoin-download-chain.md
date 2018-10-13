Title: bitcoin-download-chain
Status: Published
Slug: bitcoin-download-chain
Date: 2018-10-13 20:34
Category: Disintermediation
Tags: Bitcoin
Tweet: Sync a BTC node for the first time, quickly, on a spinning disk by moving chainstate to an SSD and symlinking to it. 
Summary: move `chainstate` to an SSD and symlink to it from the magnetic disk.

In order to run your own bitcoin node, or lightning node, you'll need to
download the entire bitcoin blockchain and then validate it. This takes ages on
a magnetic disk due to the random access speed of the contents of the
chainstate directory.

To remove this bottle-kneck, move the chainstate directory to an SSD (its only
a few GB) and symlink to it from the bitcoin data directory. More details are
[on the Bitcoin wiki](https://en.bitcoin.it/wiki/Splitting_the_data_directory)
