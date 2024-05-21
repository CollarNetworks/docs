---
icon: ":scroll:"
order: 140
---
#### Collar's smart contracts streamline battle-tested financial technology.

Welcome to Collar, the liquidation-free borrowing solution. We've built Collar in order to solve the liquidation problem and DeFi’s borrowing trilemma (stability of borrowed assets, liquidation of collateral, high LTV).

We do this by helping connect borrowers with marketmakers and suppliers via an on-chain request-for-quote (RFQ) process, resulting in a “COLlaborative Lending ARrangement” (Collar).

This arrangement allows borrowers to forego upside exposure above a ceiling temporarily in order to protect their downside below some floor price, below which the borrower can always walk away with their stablecoin loan.

Note: it is important to emphasize that upside is not entirely foregone. Users can request for a marketmaker to extend a contract at any time. The Collar team is also developing "auto-roll" functionality in order to make this process easier.

To execute a trade, the borrower supplies collateral that will be seized if the borrower fails to repay. A supplier  The marketmaker then locks collateral swaps the risky asset for stablecoins via a decentralized exchange, pays out the loan, and creates a Collar Vault with both parties’ remaining collateral, which is used to handle rolls, settlement, lifecycle, and maturity.

At maturity, collateral is divided between the marketmaker and borrower based on the final price of the asset, which is obtained via oracle, and the terms of the trade agreed upon upfront. Oracle independence is possible with Collar but the team has decided to delay this feature for the initial launch.

In the subsequent paragraphs, we give a more thorough explanation of how this process works, explaining the design choices we’ve made along the way, and shedding light on the financial backdrop that made this necessary and the crypto backdrop that made this possible.

This process is illustrated more in depth in the next section.