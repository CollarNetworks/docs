---
icon: ":chart_with_upwards_trend:"
order: 120
---

#### Marketmakers put up collateral in order to hedge trades and make money. Collar connects clients and marketmakers.

When clients submit a "request for quote" (RFQ), that RFQ is broadcasted to all marketmakers in the Collar Network. In our beta stage, this role is whitelisted, but over time, it will be decentralized.

Marketmakers are expected, at this time, to price and quote trades as quickly as is feasible. Similar to TradFi, consent to a trade is gradual.

First, marketmakers show an indicative price to the client. If the client likes the price and has not received a better price from another marketmaker, they can request execution by placing their underlying asset into escrow via Collar's smart contracts.

Once the client has requested execution, the marketmaker has the chance to accept or decline. If the marketmakers decline the trade, the client's asset will be returned to them. Clients can also withdraw their execution requests if they feel so inclined so long as marketmakers have not already accepted the trade.

By agreeing to hedge a Collar, marketmakers are expected to deposit sufficient USDC to ensure that the client will get paid out in their best case scenario (an appreciation in the underlier to the point of the cap).

Hedging this trade is inherently bearish because it pays off more when the asset falls in value, so you would want to buy some of the underlying asset upfront separately in order to counteract that force (i.e. hedging your delta). There is also volatility exposure for a fixed period of time, at a specific strike, which is a bit harder to hedge.

Once all parties accept, Collar will go out to the market and swap the asset for USDC via a decentralized exchange such as Uniswap, pay out the loan to the user, then hold the remaining client collateral in escrow until maturity alongside the marketmaker's collateral.

Over the life of the trade, if the price of the underlying asset increases, the client will likely want to "roll" the trade higher. To do this, they can request a roll quote via a similar RFQ process as the initial trade, and marketmakers can execute these rolls using the Collar UI.

Also, specific terms of the trade may be altered without marketmaker consent such as the settlement preferences (physical vs. cash vs. net-share) as these have no economic impact for marketmakers, but may have tax consequences for the user.

At maturity, any party (marketmakers, clients, keepers, etc.) can mature a Collar vault by calling the "mature" function. Once this is called, funds are returned to the marketmaker and user in line with the new price of the asset in line with whatever terms were agreed with upfront.

Collar, unlike many other DeFi protocols, does not rely on unsustainable incentives to achieve user or marketmaker adoption.

From the client's perspective, they are risking, in this case, $100k $((100 - floor )*notional)$ to make $80k $((cap - 100)*notional)$, all while getting $900k in USDC liquidity against their ETH and preserving $1mm notl of exposure to their asset. Pretty good deal, right?
