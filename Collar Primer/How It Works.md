---
# icon: ":eyes:"
order: 11000
---

Collar hedges collateral upfront instead of waiting for the price to drop. This allows borrowers to be shielded from any liquidation risk for months at a time.

Collar's Offchain Intent Platform helps borrowers and solvers communicate with one another in order to arrive at acceptable terms. Once this is achieved, solvers create an onchain offer and the borrower accepts, with each party posting collateral only when necessary.

We call this "just-in-time liquidity provision".

Below, we’ve put together a simple diagram, video, and cashflow tracking spreadsheet which explains in detail how Collar works.

[Cashflow Tracking Sheet](https://docs.google.com/spreadsheets/d/1lqiA0cenlmkuer_e1YZHTPq0dOYr5d7rGd3WFy3ix1w/edit?usp=sharing)

Video (under construction)

Flow of Funds Diagram

![](/static/collarintentflow.png)

### Coordination Phase - Offchain

First, borrowers request quotes for a cap (maximum return) from whitelisted solvers via the Offchain Intent Platform. Once solvers show pricing, borrowers accept the best quote or reject the quotes and try another trade. Borrowers can also accept existing Offers "off the shelf" from solvers, creating a more one-click experience.

The Offchain Intent Platform, similar to the sequencers of many top rollups like Arbitrum, Optimism, and more, will be progressively decentralized over time via Onchain Auctions and other mechanisms, the same way other DeFi protocols advanced in complexity, decentralization, and performance over time.

### Settlement Phase - Onchain

If the user accepts, a marketmaker receives a notification and promptly creates an offer, posting the USDC or cash asset required to guarantee the user's upside exposure.

Finally, the user accepts the Offer and provides their collateral. Once this transaction confirms onchain, the marketmaker now benefits from a decline in price. Solvers prefer to remain delta-neutral, so they would likely hedge this out using perps, onchain, or other offchain tools.

!!!
Note: In order to collar assets, borrowers must be willing to temporarily forego near-term upside exposure beyond a return cap specified by the liquidity provider, risking a small portion of the borrowed capital for the duration of the loan. For example, a user with 1 wstETH worth $1000 can borrow $900 for 3 months liquidation-free, but returns will be capped at $100 or a final wstETH price of $1100.
!!!

Upon acceptance by both parties, the protocol takes the user's collateral (stETH) and swaps it for the liability token (USDC) via [Uniswap v3](https://docs.uniswap.org/), removing price risk. The proceeds of the swap are then multiplied by the LTV percentage and sent to the user, with the remainder staying as collateral that can be won by the marketmaker. This incentivizes solvers to facilitate collars.

Collar allows for loan renegotiations or "rolls", where borrowers can "re-strike" higher. This is akin to a climber putting a new spike in the ice as they make progress. If they fall, they get caught by the higher spike.

Over the life of the trade, borrowers are offered terms to extend or "roll" their loan, extending the maturity and updating the floor and cap in line with the market. This coordination is facilitated via the Offchain Intent Platform.

If a roll offer is accepted, the loan is extended, and the floor and cap are updated. Depending on the performance of the asset, the user either posts or receives collateral in order to extend.

The Collar Team is also developing "auto-roll" functionality in order to make it extremely easy for users to roll as assets are increasing in value.

Since Collar positions are tracked as NFTs that are tradeable by the user and the marketmaker, the marketmaker can purchase the borrower's half of the position and retire the NFTs early in order to close out and reclaim the locked collateral inside. This allows for "novations" which remove an inactive marketmaker as well as "unwinds" which allow a user to exit a trade early for some price.

Once the blockchain's native timestamp exceeds the vault's maturity timestamp, the Position is able to be matured. Borrowers can wait to repay their loan, but they are fully exposed to any changes in price of the asset (i.e. if the asset appreciates after maturity and the borrower has not repaid their loan, they miss out on gains). This grace period is limited to 5 days, changeable at the configuration level of the protocol.

Loan repayment is handled by the keeper, which is maintained by the Offchain Intent Platform prior to full decentralization. Users are encouraged to authorize a sufficient amount of the liability asset upfront (i.e. USDC) so the keeper can initiate repayment on their behalf. If this approval is not in place, a default would occur even if the user has sufficient USDC in their wallet to repay. Users can specify this "autopay" functionality.

Upon being matured, Position collateral is divided between the marketmaker and borrower based on the final price of the asset, which is obtained via a Uniswap TWAP oracle, and the terms of the trade agreed upon upfront. Any liability token awarded to the borrower is combined with the borrower's repaid tokens and sent to Uniswap v3 to repurchase the user's original collateral, which is then returned to them, closing out the trade.

!!!
Note: It is worth noting that the team is developing a "supplier mode" that will likely experience far better tax treatment and allow the user to not have to sell their collateral.
!!!
