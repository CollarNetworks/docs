---
icon: ":smile:"
order: 100
---
#### Collar is currently...

- **Liquidation-Free** - since the protocol is hedged in all scenarios, we do not need liquidators.
- **Non-Custodial** - both parties could abandon Collar and still receive their payoff, if any, at maturity.
- **Liquidity-Independent** - Collar does not require unsustainable yield farming in order to function.
- **Interest-Free** - Any and all interest is priced into the terms you see.
- **High LTV** - with Collar, LTVs are only limited by how high a marketmaker is willing to offer. LTVs above 90%, even on volatile assets, are entirely within the realm of possibility.
- **Collateral Efficient** - Collar has been designed from the ground up to require the minimal amount of collateral necessary to function without introducing credit risk into the system.
- **Asset Agnostic** - The logic behind Collar is sound enough to work with any asset pair a marketmaker is willing to quote, so long as it has liquidity in any DEX.
- **Minimized Hack Surface Area** - the RFQ process limits access to only the parties who are pricing up a current agreement, so even if another user were to interject their address, the Engine would decline the trade.
- **Minimized MEV Surface Area** - RFQ flow also minimizes the possibility for MEV, and we've ensured users are not frontrun by routing traffic through private mempools such as Flashbots Protect.

#### Coming Soon

- Oracle-Free - Collar relies on MMs and DEXs to achieve natural price discovery
- Permissionless - at the conclusion of our private beta, we plan to open access to all borrowers and marketmakers across any asset.

_Note: LTVs above 90% have a tendency to trigger capital gains taxes in some jurisdictions prematurely instead of allowing for a step-up in cost basis. We do not offer tax advice._