---
icon: ":ocean:"
order: 129
---

Collar's Peer-to-Pool upgrade is being developed! Now, marketmakers can provide liquidity to Collar's pools in order to easily facilitate Collars.

Here's how it works.

For each unique combination of asset, collateral, duration, and LTV, there exists a pool with various ticks. These ticks, similar to uniswap v3, are roughly 1 basis point (.01%) apart by default, but may be scaled to .1% or 1% depending on the "tickScaleFactor" of the pool. This constrains users to a few standardized trades, making it easier for them to move forward and for marketmakers to focus on a few possible trades that are most needed and relevant. This model also creates a 1-click experience as most of the terms are ironed out by the structure of the pool. TBD WIP 

This leads to They can also quickly get a price on such a trade.

We do this by requiring marketmakers to provide liquidity 