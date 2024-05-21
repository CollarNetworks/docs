---
icon: ":chart_with_upwards_trend:"
order: 120
---

#### Marketmakers put up collateral in order to hedge trades and make money. Collar connects clients and marketmakers.

Marketmakers are expected, at this time, to quote potential trades by providing liquidity.

By agreeing to hedge a Collar, marketmakers are expected to deposit sufficient USDC to ensure that the client will get fully paid out in the best case scenario (appreciation of the underlier to the ceiling).

Hedging this trade is inherently bearish because marketmakers make the most when the asset falls in value. As such, they naturally would want to go long the underlying asset in response to a completed trade (i.e. hedging your delta). There is also volatility exposure for a fixed period of time, at a specific strike, which is a bit harder to hedge.

Upon client execution, Collar immediately swaps the asset for USDC via a decentralized exchange such as Uniswap, pays out the loan to the user, then holds the remaining client collateral in escrow until maturity alongside the marketmaker's collateral.

Over the life of the trade, if the price of the underlying asset increases, the client will likely want to "roll" the trade higher. To do this, they can accept an extension offer from a marketmaker.

At maturity, any party (marketmakers, clients, keepers, etc.) can mature a Collar vault by calling the "mature" function. Once this is called, funds are paid out to the marketmaker and user in line with the final price of the asset (as determined by Uniswap v3's TWAP) in line with whatever terms were agreed with upfront via the peer-to-pool execution mechanism

Collar, unlike many other DeFi protocols, does not rely on unsustainable incentives to achieve user or marketmaker adoption and instead relies on marketmakers acting in their self-interest.