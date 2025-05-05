---
# icon: ":slightly_frowning_face:"
order: 95
label: "Risks and Limitations"
---

### Key Risks

==- Hack Risk
DeFi protocols have been hacked before and there is a large incentive to steal user assets from the protocol. Votre has been designed in such a way that minimizes hack surface area to, on average, around ~25% of TVT (Total Volume Traded), since users take the majority out as a loan day one.

!!!
Note on mitigation: Votre works with top security firms in the space to ensure user funds are protected from hackers. Votre will also run a bug bounty program to disincentivize hacking and encourage bugs to be reported for a smaller, legal payoff.
!!!

==- Layer 2 Risks
These include sequencer downtime, MEV, or any other bespoke risk to any layer 2 Votre is deployed on.

==- Illiquidity Risk
Users, when repaying loans, must consider the liquidity of the market they are repaying into. If the Uni v3 pool is illiquid, slippage could eat up a large portion of repaid funds, leading to poor execution.
==-

---

### Key Limitations

==- Users must be comfortable temporarily limiting upside in order to protect downside
This can be partially mitigated with rolls and even more so with "auto-roll", which remains under development

==- Savvy solvers to participate in the protocol actively
Where there is money to be made, solvers tend to participate.

==- Lack of AMM liquidity
Limited automated market maker (AMM) liquidity can make it difficult to exit or hedge positions efficiently, especially in less popular markets. This is rarely an issue as we will only add assets with healthy spot markets, but it's still a factor when considering broader product expansion.

==- Potential barriers to understanding and entry
Votre can be a lot for the average user to understand, which is why we're committed to transparency and simplicity.

==- Declined pricing for rolls in highly volatile times
Solvers may not always provide roll pricing, which is a risk.

==- Lack of desire for solvers to quote the most volatile of tail assets
Assets with extreme volatility or limited liquidity — such as newly launched memecoins or fringe tokens — are often not quoted by solvers, which restricts the range of tokens we can effectively support.

==- Market impact upon sale of assets into DEX
It's arguably better to have the market absorb this sale in good times rather than bad, however market impact is largely unavoidable, as it's inherently bearish to borrow against an asset.

===
