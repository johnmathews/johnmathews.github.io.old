Title: Introduction to AEternity
Slug: aeternity
Date: 2017-5-5 21:04
Category: Blockchains, Digital Currencies
Tags: AEternity, DLT, Digital Currencies, Finance, Blockchains 
Status: Published
Summary:

This post is a draft. The AEternity project has the following notable technical features. 

- Sharding
- On-chain oracles
- Smart Contracts in state-channels
- Prediction markets (governance) 
- Written in Erlang
- Diverse node roles? 

## Sharding

- concept related to scalability improvement
- split the space of possible accounts into subspaces (e.g. based on the first digit of a numerical address)
- each shard gets a set of validators, each validator doesnt validate more than 1 shard
- messages (contracts/tnsxs) within the shard work as normal


- contracts across shards need special techniques based on "transaction receipts" 

##  On-chain oracles

- Aeternity’s oracle infrastructure is designed to work with the same consensus mechanism as the Aeternity blockchain


- Consensus nodes can play several roles on the chain: one of them is validating oracles.


- there will be consensus nodes that validate oracle data

- If their approach works, it will allow Aeternity to run a prediction market using its native consensus mechanism.  

## Smart Contracts in state-channels

- The Bitcoin Lightning Network is creating a system for routing payments through state channels–payment networks that exchange funds off-chain and periodically settle up accounts with the main Bitcoin blockchain. 

- Aeternity proposes doing this for smart contracts. 

- The state chain approach has several advantages. One of the biggest is smart contract privacy: because the contracts are executed off chain, actual smart contract code won’t need to be broadcast to the primary blockchain. 

- This has the potential to increase processing capacity by allowing contracts to execute in parallel. 

- However, because of the reduced transparency, running smart contracts in state channels requires more trust in both the contract creator and the node running it.


## Prediction markets (governance) 

- The emphasis on oracles makes the project well suited for prediction markets, and Aeternity proposes using prediction markets as the basis of a governance system.


- The Aeternity team will draw on user input to help govern the protocol itself: by having a prediction market for which protocol changes and features will lead to a higher aeon price, Aeternity will be able to gauge which changes the market wants.

- ​ This could even include variables like blocktimes and block capacity. 

- ​Initially, the consensus made by the prediction market will simply provide input to the development team’s decision-making.

  - However, in the future the team plans to implement a fully autonomous prediction market governance DAO.  

## Written in Erlang

- language normally used for large-scale systems that manage the allocation of scarce network resources, such as telecoms, banking, e-commerce, computer telephony, and instant messaging.

- has not been a common language in blockchain development to date, though it presumably should help in processing many parallel state channels.

## Diverse node roles? 

- different nodes in the Aeternity ecosystem that help all the elements function efficiently

-  specialist functions: consensus processes, prediction markets, state channel liquidity, exchanges, and others. 

-  exact roles and functions of different nodes hasn’t been fully explained,

   ​
