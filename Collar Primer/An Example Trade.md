---
icon: ":dollar:"
order: 110
---
#### We've outlined an entire trade to make it abundantly clear where the money goes upon execution.

Let's assume the below terms:

- 90% LTV (loan-to-value ratio)
- 3 months
- 100 ETH to hedge
- $1,000 ETH price
- Client wants to borrow against ETH
- Client wants their loan in USDC
- Collar Protocol Fee of 1%
- Solve for maximum return

Let's say we have a client named "ABC Capital" who runs a liquid token fund with various investors. Their strategy is to buy and sell tokens in order to make money. Sometimes, they've already allocated all their capital and want to borrow against existing tokens to deploy more capital (temporarily) without fully giving up a current position.

One of the traders heard about Collar at a conference and decides to head on over to collarprotocol.xyz, click "Enter App" and connect their wallet. From then on, these are the steps they would take, and the corresponding action on the backend that occurs.

Let's name our most competitive and active marketmaker "Jane Sigma Research" or JSR.

Over time, we plan to make this user experience as seamless and frictionless as possible through automation and tooling.

1. ABC Cap requests a price for a 3 month Collar on their ETH, denominated in USDC with a 90% LTV (loan-to-value ratio).

2. The pricing request is broadcasted to the marketmakers

3. Marketmakers submit bids, JSR's is the highest at 109% max return

4. ABC Cap awards the trade to JSR and deposits the 100 ETH

5. JSR accepts the trade and deposits the 9,000 USDC of collateral.

!!! Expert Note
JSR understands hedging Collars is bearish, so they go to their favorite source of liquidity and get long ETH to isolate the volatility risk from the directional risk produced by the trade. This is called "scalping gamma" and it's how marketmakers can make money trading volatility itself.
!!!

6. The 100 ETH is swapped via decentralized exchange (i.e. Uniswap V3) (note: this may incur slippage)

7. Let's say the filled price on that ETH/USDC swap is 1,000 (after slippage from 1,001) for a total proceeds of 100,000 + the marketmaker's 9,000 USDC for 109,000 USDC total sitting in the engine.

8. The protocol takes a small fee for providing security to both parties of 1% of total value traded (TVT) (note: revenue is necessary to sustain development activity)

9. Since the requested LTV was 90%, the client receives 89,000 USDC as a loan after fees, taking us down to 19,000 USDC remaining. These funds are placed in a vault that cannot be accessed by anyone once its maturity timestamp is greater than that of block.timestamp (a measurement native to the blockchain).

10. A month goes by and ETH is up 7% to vs. USDC and ABC Cap decides they want to take a bit more cash off the table and extend their upside exposure.

11. They come back to the Collar UI, select the vault, and request to roll the trade.

12. JSR sees this request and offers a floor of 970 USDC and a max return of 1170 USDC.

13. ABC Cap accepts, the terms are updated on the vault's smart contract, JSR posts additional 7,000 USDC, and ABC Cap unlocks 6,000 USDC on their loan net of protocol fees.

14. As the trade nears maturity, ETH drops to a price of 500 USDC

15. ABC Cap fortunately has now withdrawn 95,000 USDC and the market has already absorbed that liquidity, preventing situations like CRV from creating liquidation cascades, which reduces volatility for the industry as a whole

16. However, their remaining portion of the USDC will now be paid out to JSR in line with the rules of the vault. They will call the mature function after block.timestamp has passed via the UI, claim their USDC, and be off to hedge more trades.