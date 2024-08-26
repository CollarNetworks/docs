---
# icon: ":classical_building:"
order: 110
---

In order to bootstrap liquidity, usage, and offers for the Collar Protocol, the Collar team has created an offchain communication channel for providers and borrowers (the Offchain Intent Platform). This helps minimize near term collateral and gas requirements for providers and maximize capital efficiency. This list of providers initially remains whitelisted but will be opened up over time to anyone who wishes to hedge Collars.

The Offchain Intent Platform consists of:

1. A database of all requested Collar quotes
2. A server, which handles quote requests by interacting with marketmakers' own quoting APIs
3. The server also helps schedule and run cron jobs, which ensure on-time maturation of Collar's onchain

This intent platform will be decentralized over time.

Collar's Founding Marketmakers will be announced later this year.
