Title: Bitcoin Lightning
Status: Published
Slug: bitcoin-lightning
Date: 2019-1-24 12:57
Category: Disintermediation
Tags: Bitcoin, Lightning, Crypto
Image: src="/images/lightning_sticker.jpg" alt="I got lightning working but all i got was this sticker"
Tweet: Bitcoin Lightning, on a Raspberry Pi...
Summary: I set up a  node on the Bitcoin Lightning network and sent a payment of $0.005 which confirmed in a few seconds.

One of the largest obstacles (second only to privacy in my opinion) to widespread adoption of Bitcoin is its limited volume. Bitcoin cannot faciliate payments fast enough such that it could compete with Visa or Mastercard. 

The most interesting solution to this problem is the [Lightning protocol](https://lightning.network/) - a separate protocol that sits ontop of the Bitcoin protocol (a so-called 'Layer 2' solution). Lightning uses hashed time locked contracts (HTLCs) to trustlessly and privately move transactions off-chain. This allows payments to be faster, cheaper and more frequent. It also has interesting implications for enhancing privacy. 

There are a lot of resources about what the Lightning network is, why it's neccesary and how it works. There are also several good guides available about how to set up and maintain a node. I used a Raspberry Pi with an external hdd. It took a few attempts, mostly because it's my first time working with an unix operating system and I tried to move a swap file to a disk that wasnt formmated as HFS+... 

Anyway, I've opened and closed some channels, connected to peers, and made some transactions. I even bought some stickers using Lightning!

You can find my node using these details:

``` zsh
Alias: "johnmathews.eu"
Public Key: "025469b50de125b4cd97457c0da67365519f0cd0f441c2ced0978fb6ae7802ae76"
IP address: 85.145.183.145
Port: 9735
```

Some useful resources:

* [Lightning network explorer](https://explorer.acinq.co/n/025469b50de125b4cd97457c0da67365519f0cd0f441c2ced0978fb6ae7802ae76)
* [Lightning node information](https://1ml.com/node/025469b50de125b4cd97457c0da67365519f0cd0f441c2ced0978fb6ae7802ae76)
* [Interesting things to do](https://incoherency.co.uk/blog/stories/spelunking-ln.html)
