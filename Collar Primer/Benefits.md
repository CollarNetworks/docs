---
# icon: ":smile:"
order: 100
---

#### Collar is currently...

- **Liquidation-Free** - Since the protocol swaps the asset upfront, directional risk is reversed, then mitigated by the ceiling on asset returns + the guarantee of upside performance by the marketmakers up to the ceiling.
- **Tax-Advantaged** - Borrowing is a better way to sell in most tax regimes, as you're able to withdraw wealth while deferring the tax obligation. _Note: in some jurisdictions, this will require a feature under development called supplier mode._
- **Non-Custodial** - Both parties could abandon Collar and still receive their payoff, if any, at maturity.
- **Liquidity-Independent** - Collar does not require unsustainable yield farming in order to function.
- **Interest-Free** - Any and all interest is priced into the terms provided by the marketmaker.
- **High LTV** - with Collar, LTVs are only limited by how high a marketmaker is willing to offer. LTVs above 90%, even on volatile assets, are possible but may carry tax ramifications.
- **Collateral Efficient** - Collar has been designed from the ground up to require the minimal amount of collateral necessary to function without introducing credit risk into the system.
- **Asset Agnostic** - The logic behind Collar is scalable to any ERC20 asset pair a marketmaker is willing to quote, so long as it has liquidity in any DEX.
- **Minimized Hack Surface Area** - Hackable value is only a fraction of the total value traded for a given Collar. The lower the LTV and higher the callstrike, the more collateral is at risk from a hack, as more collateral is required for these types of trades.
- **Minimized MEV Surface Area** - We plan to ensure users are not frontrun by routing frontend traffic through private mempools such as Flashbots Protect.
- **Oracle Independent** - Collar currently relies on Uniswap TWAP observations as opposed to offchain price providers.
