---
icon: ":ocean:"
order: 129
---

## Peer-to-Pool Architecture

Collar's Peer-to-Pool upgrade is under development! Soon, marketmakers will be able to provide liquidity to Collar's pools in order to easily facilitate Collars.

Here's how it works.

For each unique combination of asset, collateral, duration, and LTV, there exists a pool with various ticks. These ticks, similar to uniswap v3, are 1 basis point (.01%) apart by default, but may be scaled to .1% or 1% depending on the "tickScaleFactor" of the pool. 

Marketmakers provide liquidity at a given tick in order to reflect their willingness to trade at that price.  (i.e. tick 12000 with a tickScaleFactor of 1 reflects a 120% ceiling on collateral performance that a user is accepting)

These pools bring marketmaker's willingness to trade onchain and help constrain users to a few standardized trades, making it easier for both sides to transact. This model also creates a 1-click experience for users. 

For example, if a marketmaker is willing to show a ceiling of 120% on an ETH/USDC/90% LTV/3 month loan for up to 1 ETH at a price of 3000, they would provide 600 USDC of liquidity to the 12000 tick to reflect that. Users would see this and execute.

Finally, we're developing an open-source marketmaker SDK in order to make Collar easy to connect with and provide liquidity to.

## FUTURE FEATURES

If a user has a large trade they'd like to execute and they're not seeing sufficient liquidity at a price they like, we're exploring building out a "request liquidity" function to facilitate this

Another feature under development is "just-in-time" liquidity, where marketmakers commit capital to a single pool, which is only used for settlement of new vaults, and allows marketmakers to show prices across numerous pools.

For example, if there are four different ETH/USDC/90% LTV pools at 1, 3, 6, and 12 months, respectively, marketmakers shouldn't have to commit liquidity to each pool in order to show prices. If a user comes in and takes liquidity (i.e. executes on a trade) on a 6 month Collar, then the capacity of the other pools would decrease as that USDC was drawn from the MM's master collateral account.