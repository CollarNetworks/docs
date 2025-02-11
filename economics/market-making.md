---
# icon: ":chart_with_upwards_trend:"
order: 93
label: "Marketmaking"
---

#### Solvers quote prices offchain and provide liquidity onchain

Solvers are essentially offering a payout financially equivalent to a call spread to the borrower to replace exposure lost from the upfront sale of the asset. If the marketmaker successfully hedges their delta over the life of the trade and the realized volatility of the trade over its life comes in higher than the implied price they bought it for, the marketmaker should profit.

Link here explaining this ["gamma scalping"](https://www.schwab.com/learn/story/gamma-scalping-primer) mechanism.

By agreeing to hedge a Collar, solvers are expected to deposit sufficient USDC to ensure that the client will get fully paid out in the best case scenario (appreciation of the underlier to the ceiling).

Hedging this trade is inherently bearish because solvers make the most when the asset falls in value. As such, they naturally would want to go long the underlying asset in response to a completed trade (i.e. hedging your delta). There is also volatility exposure for a fixed period of time, at a specific strike, which is a bit harder to hedge.

Upon client execution, Collar immediately swaps the asset for USDC via a decentralized exchange such as Uniswap, pays out the loan to the user, then holds the remaining client collateral in escrow until maturity alongside the marketmaker's collateral.

Over the life of the trade, if the price of the underlying asset increases, the client will likely want to "roll" the trade higher. To do this, they can accept an extension offer from a marketmaker.

At maturity, any party (solvers, users, keepers, etc.) can mature a Collar vault by calling the "mature" function. Once this is called, funds are paid out to the marketmaker and user in line with the final price of the asset (as determined by Uniswap v3's TWAP) in line with whatever terms were agreed with upfront via the peer-to-pool execution mechanism.

Collar, unlike many other DeFi protocols, does not rely on unsustainable incentives to achieve user or marketmaker adoption and instead relies on solvers acting in their self-interest.

For now, marketmaking is permissionless onchain and access to the Offchain Intent Platform is whitelisted. This will be decentralized over time. This whitelist currently contains three Founding Solvers, similar to [Arbitrum Nova's Data Availability Committee](https://docs.arbitrum.foundation/concepts/security-council).

If you're interested in becoming a marketmaker for the Offchain Intent Platform, you can submit an inquiry to operations@collarnetworks.com . Requirements include full API pricing of crypto-linked options.
