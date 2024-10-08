---
# icon: ":smile:"
order: 100
---

#### Collar is...

- **Liquidation-Free** - Since the protocol swaps the asset upfront, directional risk is removed. But what if the price goes up? This is mitigated by the return cap + the solvers guaranteeing performance on the upside to the ceiling in exchange for the chance to make money if the asset price declines.
- **Tax-Advantaged** - Borrowing can be a better way to sell in most tax regimes, allowing borrowers to withdraw wealth while deferring tax obligations. _Note: in some jurisdictions, this will require a feature under development called supplier mode, which is under development._
- **Non-Custodial** - Both parties could abandon Collar and would still receive their payoff at maturity, since anyone can mature a position onchain.
- **Liquidity-Independent** - Collar does not require unsustainable yield farming in order to function.
- **Interest-Free** - Any interest is priced into the terms provided by the marketmaker. Slippage is the main cost paid by borrowers.
- **High LTV** - LTVs are only economically limited by how high a marketmaker is willing to offer. LTVs approaching 100%, even on volatile assets, are possible but may carry tax ramifications. For now, LTVs must be added via the ConfigHub (multi-sig gated) for security purposes.
- **Collateral Efficient** - Collar has been designed from the ground up to require the minimal amount of collateral necessary to function without introducing credit risk into the system.
- **Asset Agnostic** - The logic behind Collar is scalable to any ERC20 asset pair a marketmaker is willing to quote, so long as it has liquidity in any DEX. For now, asset pairs must be added via the ConfigHub (multi-sig gated) for security purposes.
- **Minimized Hack Surface Area** - Hackable value is only a fraction of the total value traded for a given Collar. The lower the LTV and higher the callstrike, the more collateral is at risk from a hack, as more collateral is required for these types of trades.
- **Minimized MEV Surface Area** - We plan to ensure users are not frontrun by routing frontend traffic through private mempools such as Flashbots Protect. For layer 2 deployments, MEV is currently largely a nonissue.
- **Oracle Independent** - Collar currently relies on Uniswap TWAP observations as opposed to offchain price providers. These Uniswap TWAP oracles are available on far more assets than Chainlink, etc. This could be made modular in the future.
