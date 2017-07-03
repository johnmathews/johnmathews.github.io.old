Title: Blockchains from the ground up: Part 2
Slug: blockchain-networks
Date: 2017-6-21 13:52
Category: Blockchains, Digital Currencies
Tags: Blockchains, Digital Currencies, Distributed Ledger Technology, Distributed Consensus, Sybil, 
Image: (1200x627px ideally) src="/images/filename.extension" alt=" "
Tweet: (include hashtags)
Summary:
Status: draft

## Maintain an accurate list of transactions across a large group of users, without a central authority

This is part 2 of an introduction to the key features of a generalised blockchain. [Part 1]({filename}../content/articles/20170525_blockchain-introduction.md) introduced key features of immutable record creation between 2 parties using public key cryptography. Part 2 explores how many users can all maintain the same true list of transactions and protect each other against fraud. 

## Double Spending

Back in part 1, we saw Lizzie, John and Chris exchanging coins. Lizzie also paid John with coins that were owed to her by Chris. As the number of people in the network grows, the transfer of coins from one user to another becomes harder to track and this creates an opportunity to use coins that have already been spent to pay someone who doesn't know they've already been used. This is double spending, and is possible because the ledger of everyones transactions that is shared amongst all members of the group only has *weak consistency*. 

Weak consistency can be solved by requiring that everyone accept a transaction before it is accepted into the ledger (Unanimous consensus), or to save time we could less the requirements so that only 50% of all users need to validate a transaction before it is accepted into the ledger (Quorum consensus). Either of these solutions is possible for a small local group with a list of all users. 

Unanimous or Quorum consensus doesn't solve the weak consistency problem if:

1. The group is large
2. The group is small but spread across different locations or timezones
3. It is not possible to know how many members there are and therefore what proportion of uses are participating.
4. The identity of a user is unknown

In these cases a peer-to-peer network is required where transactions between users require approval by other users before being confirmed. This has not been trivial to solve, as some users would be incentivised to double spend (lie), and some may make mistakes. This is the distributed consensus problem, which on [wikipedia](https://en.wikipedia.org/wiki/Consensus_(computer_science)) is defined as: 

>The consensus problem requires agreement among a number of agents for a single data value. Some of the processes (agents) may fail or be unreliable in other ways, so consensus protocols must be fault tolerant or resilient. The processes must somehow put forth their candidate values, communicate with one another, and agree on a single consensus value.

When the number and identity of participants is known, distributed consensus is possible. Two types of protocol which allows all users in a distributed system to agree on a transaction are the [Paxos](https://en.wikipedia.org/wiki/Paxos_(computer_science)) family of protocols and the [Two-phase commit](http://courses.cs.vt.edu/~cs5204/fall00/distributedDBMS/duckett/tpcp.html) protocol. Both of these would require that only at least 50% of all users reach agreement in order to add a new transaction. 

However in a public peer-to-peer network the total number of active users is not known, and it's possible to quickly and cheaply create new user profiles. This makes it impossible to know how many users 50% would be. Additionally, because its possible to cheaply create new user profiles (just generate a new public-private key pair), a single actor could generate and control many user accounts in order to have many votes and force incorrect transactions onto the ledger. An attack where one user subverts a network by creating many profiles is known as a [Sybil attack](https://en.wikipedia.org/wiki/Sybil_attack).

The solution to the Sybil attack is to increase the cost of verifying a transaction such that the cost exceeds the reward. This is achieved through proof-of-work (PoW), which is a process that is relatively expensive for a sender claiming to have verified a transaction, and relatively cheap for the receiver to verify that the transaction has been checked for validity. 

One possible implementation of this principle is to require that the hash of a verification message begins with a certain set of characters. The chosen set of characters is called a *nonce*. The only way to create a verification message with an acceptable hash is to try many different slightly different messages, which is inefficient and computationally expensive because there is no way to predict what message will generate the required hash value, due to the random nature of output hash values. Therefore a user who seeks to verify a transaction must repeatedly try different messages until they randomly find a message that meets the nonce requirements. It is simple for a user to check if a transaction verification message meets the nonce requirements, because it is simple to hash a message, find its hash value and compare this value to the nonce.

The effect of this requirement is a process that makes it expensive to claim that a transaction has been verified and cheap to check the verification claim. This removes the threat of a Sybil attack, but does not remove the distributed consensus problems created by not knowing:

1. The true identity of users in the network
2. How many users exist

This problem cannot be completely solved, and the practical solution is to relax the requirements such that the probability of accepting a fraudulent transaction is lower than some user defined threshold. This is acceptable because a user would require a higher degree of confirmation for a high value transaction than they would for a small low value transaction, and would therefore be willing to incur more time and cost to verify a high value transaction. 

If a user wishes to make fast or low-value transactions, or trusts the party they're transacting with, then they may accept a zero-confirmation transaction, where no other network participants are contacted and the user trusts the sender of the funds completely.

When the senders integrity is not assured, an N-confirmation transaction is required. In this case N other network users are contacted to verify that the sender has access to the funds being sent before the transaction is accepted. The higher the value of N the higher the probability that a dishonest transaction will be identified before being accepted. 

An appropriate value for N will depend on the amount being transferred and how well the reciever of the funds knows the sender. 











