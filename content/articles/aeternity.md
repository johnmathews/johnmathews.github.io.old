Title: Introduction to the AEternity blockchain project
Slug: aeternity
Date: 2017-5-5 21:04
Category: Disintermediation
Tags: AEternity, DLT, Digital Currencies, Finance, Blockchains 
Status: Published
Summary: AEternity is a new blockchain project aiming to facilitate large volumes of smart-contracts which can interface with external data sources. This is accomplished using a decentralised oracle based on prediction markets.

These are my notes on the AEternity blockchain project, I'm not affiliated with the AEternity team.

AEternity is a new blockchain project that is pre-launch. The headline goal is to securely facilitate large volumes of smart-contracts which interface with external data sources. This is made possible via a decentralised oracle based on prediction markets. These terms are explained below. The AEternity project has proposed several notable technical features: 

- Smart Contracts in state-channels
- Oracles and native prediction markets
- Governance by prediction markets
- Written in Erlang
- Different types of node 
- Sharding

## Smart Contracts in state-channels

- A smart contract is a way to execute a contract without an intermediary (middle-man) and without confilct.

- The smart contract is a protocol which is stored and executed on a blockchain, executing transactions (outputs) based on specific inputs and programmable logic automatically. The logic often mirrors that contained in clauses of a written contract.

- State channels are payment networks that exchange funds off-chain and periodically settle up accounts with the main blockchain. (The Bitcoin Lightning Network is creating a system for routing Bitcoin payments through state channels.)

- State channels increase scalability by making groups of transactions independent of each other. This allows them to be processed in parallel.

- Aeternity proposes executing smart-contracts in turing-complete state channels (Turing complete means, colloquially, real-world and general purpose), which should allow greater volumes of transactions, and make the smart contracts more secure and easier to analyse. 

  This is because executing the smart-contracts off-chain makes them private and the code used to execute the smart contract won’t need to be broadcast to the primary blockchain. This should increase processing capacity by allowing contracts to execute in parallel.

  Disadvantages to the state-channel approach include reduced transparency, as running smart contracts in state channels requires more trust in both the contract creator and the node running it.

## Oracles and prediction markets 

- The Oracle functionality allows smart-contracts to interact with data outside the AEternity blockchain. This is possible by checking on-chain prediction market results and rewarding users who made the correct prediction. Users are rewarded through automated payments and the immediate recording of transactions in the blockchain. This creates incentives to participate in prediction markets, which have  been shown to be effective. 
- On-chain, rather than off-chain allows greater efficiency and integration
- The prediction market is expected to run using a native (on-chain) consensus procedure. The oracle mechanism is designed to use the same consensus infrastructure.  

## Governance by prediction markets

- Oracle functionality compliments prediction market functionality. 
- Prediction markets are proposed to implement governance of the AEternity blockchain. This is a new approach.
- The AEternity protocol would be governed by user input. A prediction market will exist where changes to features and protocols would result in a higher token value. 
- The incentive to increase the value of a tokeb (AEon) would allow the AEternity community to decide efficiently which changes to implement.
- Low level protocol changes to variables like blocktimes and block capacity could be possible 
- The consensus developed by the prediction market will initially provide input to the development team’s decision-making.
- Later, a fully autonomous prediction market for governance is expected (a DAO) 

## Written in Erlang

- [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)) is normally used for large-scale systems that manage the allocation of scarce network resources (telecoms, banking, instant messaging)
- Could make it easier to run a lightning network and process many state-channels in parallel
- As far as I know, AEternity is the first blockchain project to be written in Erlang

## Different types of node

- The AEternity network will contain nodes with different fuctions. Each type of node will contrivute towards the efficient functioning of particular aspects of the network 
- Node types will include 
  - Liquidity - Lots of channels and lots of users. Open a channel to issue a contract, for a fee.
  - Exchanges - Trustless exchanges of assets offered by market makers. Profitable to market makers because of transaction fees.  
  - Presumably features such as consensus algorithms and prediction markets will also require their own dedicated node types. Users of the node will incur transaction fees to participate, providing an incentive to run a node.

## Sharding

- Allows a greater transaction volume, removing scalability problems that Bitcoin and Ethereum have experienced.
- Sharding works by splitting the space of possible accounts into subspaces (for example based on the first digit of a numerical address)
- Each shard gets a set of validators. Each validator validates 1 shard only
- Contracts and transactions within the same shard work as normal
- Contracts and transactions across shards require alternative techniques based on "transaction receipts" 

