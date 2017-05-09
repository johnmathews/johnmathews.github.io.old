Title: Introduction to AEternity
Slug: aeternity
Date: 2017-5-5 21:04
Category: Blockchains, Digital Currencies
Tags: AEternity, DLT, Digital Currencies, Finance, Blockchains 
Status: Published
Summary:

This post is presently a series of sparse notes which are to be updated with additional details.

 The AEternity project has the following notable technical features. 

- Sharding
- Oracles
- Smart Contracts in state-channels
- Prediction markets (governance) 
- Written in Erlang
- Diverse node roles? 

## Written in Erlang

- Erland is normally used for large-scale systems that manage the allocation of scarce network resources (telecoms, banking, instant messaging)
- Could make it easier to process many state-channels in parallel
- AEternity is the first blockchain project to be written in Erlang (AFAIK)

## Diverse node roles

- The AEternity network will contain nodes dedicated to the efficient functioning of particular elements of the network 
- Specialist functions include consensus processes, prediction markets, state channel liquidity, exchanges, (...)

## Sharding

- Allows a greater transaction volume, removing scalability problems that Bitcoin and Ethereum have experienced.
- Sharding works by splitting the space of possible accounts into subspaces (for example based on the first digit of a numerical address)
- Each shard gets a set of validators. Each validator validates 1 shard only
- Contracts and transactions within the same shard work as normal


- Contracts and transactions across shards require alternative techniques based on "transaction receipts" 

##  Oracles

- On-chain, rather than off-chain like...

- Consensus nodes could be used for several roles on the chain, including validating oracles


- Of the various node types proposed, one type will be the consensus node which will validate oracle data
- Aeternity propose to run a prediction market using a native consensus mechanism
- The oracle mechanism is designed to work within the same consensus mechanism on the Aeternity blockchain 

## Smart Contracts in state-channels

- State channels are payment networks that exchange funds off-chain and periodically settle up accounts with the main blockchain.  
- The Bitcoin Lightning Network is creating a system for routing payments through state channels
- Aeternity proposes doing this for smart contracts. 
- Advantages of the state channel approach include:
  - Private smart contracts - because the contracts are executed off chain, the code used to execute the smart contract won’t need to be broadcast to the primary blockchain. 
  - This has the potential to increase processing capacity by allowing contracts to execute in parallel. 
- Disadvantages to the state-channel approach:
  - Reduced transparency - running smart contracts in state channels requires more trust in both the contract creator and the node running it

## Prediction markets (governance) 

- AEternities emphasis on oracles meshes well with prediction market functionality. 
- Prediction markets are proposed as a novel method to implement governance of the AEternity blockchain.

- The AEternity protocol would be governed by user input, by having a prediction market for which protocol changes and features will lead to a higher aeon price. 
- The incentive to increase the value of an AEon would allow the AEternity community to decide efficiently which changes to implement.
  - Low level protocol changes to variables like blocktimes and block capacity could be possible 
  - The consensus developed by the prediction market will initially provide input to the development team’s decision-making.
  - Later, a fully autonomous prediction market for governance is expected (a DAO) 
