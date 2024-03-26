---
icon: ":phone:"
order: 130
---

-- RETIRED, see v1! --

Collar's first version ran on an RFQ (request-for-quote) model, where users requested pricing from a network of marketmakers who compete for the trade.

We're decided to implement on-chain RFQ-based model in order to make the pricing process transparent, open, and fair, in line with DeFi values.

As a client, your goal is to get as large of a loan as you need, for as long as you need, while retaining as much upside as you can, all while avoiding any form of liquidation. 

The marketmaker is trying to give you the best terms they can while still making money. In order to keep them honest, Collar puts them in some degree of competition with eachother so clients have the best possible experience.

Here's how it works.

There are 7 states any given quote can be in. This is tracked in the CollarEngine for each client, who can only quote one trade at a time with a single marketmaker.

* NEW - means the client has nothing currently priced
* REQD - means the client has requested a price from a marketmaker
* ACKD - means the client has been acknowledged by the marketmaker
* PXD - means the client can now accept or reject the price
* OFF - means the marketmaker has pulled the price due to market movement
* REJ - means the client or marketmaker has rejected the pricing and a new pricing can be requested
* DONE - means the client has said "DONE" and consented to a trade

Some benefits of the RFQ model include...

* Error reduction vs. TradFi
* Competition
* Openness
* MEV Prevention
* Borrower Certainty

Once a trade is priced, we will know the following fields:

```solidity
struct Pricing {
    uint256 rfqid; // how many prices have been req'd
    address lendAsset; // i.e. USDC
    address marketmaker; // address of marketmaker / module
    address client; // address of borrower
    PxState state; // this is the above RFQ state
    string structure; // what type of trade is being priced
    string underlier; // i.e. ETH
    uint256 maturityTimestamp; // seconds since Epoch (UNIX)
    uint256 qty; // how much of the asset to hedge
    uint256 ltv; // loan-to-value ratio i.e. 90%
    uint256 putstrikePct; // the floor of the collar
    uint256 callstrikePct; // the ceiling of the collar
    string notes; // largely pointless
}
```