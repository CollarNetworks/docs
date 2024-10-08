---
# icon: ":dollar:"
order: 110
---

<!-- eventually will be two example trades, one swap mode one supplier mode  -->

Below, we walk through a sample Collar.

- Client wants to borrow against wstETH
- Client wants their loan in USDC
- 1 wstETH (~$2k)
- 2,000 USDC/wstETH price
- 90% LTV (loan-to-value ratio)
- 3 month loan duration
- Collar Protocol Fee of 1%
- Solve for maximum return

Let's say we have a client named "ABC Capital" who runs a liquid token fund with various investors. Their strategy is to buy and sell tokens in order to make money. At times, they are fully allocated to wstETH, but want to buy a new token. The problem is, ABC would have to sell wstETH in order to do so, limiting their exposure to wstETH. They could use AAVE to borrow against their wstETH, but then they'd be at risk of forced liquidation. Instead, ABC leverages Collar to borrow against existing tokens and deploy more capital (temporarily) without giving up exposure to their current position.

One of their portfolio managers heard about Collar at a conference and decides to head on over to collarprotocol.xyz, click "Enter App" and connect their wallet. From then on, these are the steps they would take, and the corresponding action on the backend that occurs.

Let's name our most competitive and active marketmaker "Jane Sigma Research" or JSR. JSR is hooked up via API to the Offchain Intent Platform and streams prices constantly, providing a phenomenally fast user experience.

0. ABC Cap selects the terms they'd like (see above) and clicks request quote. Within seconds, they get back three potential return caps, or "quotes": 108%, 109%, and JSR's price 110%. These quotes came from solvers who quickly communicated their preferences via the Offchain Intent Platform.

1. ABC Cap agrees to move forward, notifying JSR via the Collar Frontend and Offchain Intent Platform, that they have been selected as the winner.

2. JSR prepares an onchain Offer reflecting the terms ABC Cap initially requested, containing 200 USDC, reflecting the collateral requirements of the Collar Protocol of 110% - 100% = 10% \* 1 wstETH \* 2000 USDC per wstETH = 200 USDC, the best case returns for the user. This reflects JSR's willingness to facilitate the trade.

3. ABC Cap then accepts the Offer, completing the trade, depositing wstETH to the protocol.

4. The protocol then swaps the supplied wstETH in a decentralized exchange, such as Uniswap v3, for USDC (note: this incurs some slippage). The price at which this swap executes determines the exact maximum and minimum of the vault (i.e. swapping 1 wstETH -> 1999 USDC (0.05% slippage) results in a ceiling of 2198.9 USDC and a floor of 1799.1 USDC).

5. Of the 1999 USDC of proceeds from this swapped wstETH, 1799.1 is sent to the borrower as the Loan Balance, and 199.9 is deposited into a vault in case the collateral declines in value, incentivizing solvers in a downside scenario. This vault cannot be accessed by anyone until the maturity timestamp is greater than that of block.timestamp (a measurement native to the blockchain).

!!! Expert Note
JSR understands hedging Collars is a bearish trade, so once the trade is executed they go to their favorite source of liquidity and get long wstETH to isolate the volatility risk from the directional risk produced by the trade. This is called "scalping gamma" and it's how solvers can make money by isolating and trading volatility itself.
!!!

## wstETH Up 7% Scenario

A month goes by and wstETH is up 7% vs. USDC, so ABC Cap decides they want to lock in gains, extending their loan. Since JSR is streaming prices to the Offchain Intent Platform, ABC Cap can get estimate roll terms at any time.

6a. ABC Cap then requests execution at terms they saw on the Collar Frontend, prompting JSR to automatically show an offer to extend and restrike the contract at the same percentage strikes of 90% and 110%, posting additional collateral as the asset has appreciated, diminishing JSR's portion of the collateral.

## wstETH Down 30% Scenario

A month goes by and wstETH is down 30% vs. USDC, but ABC Cap believes in the asset and want to extend their Collar. Similarly, JSR has been streaming possible roll prices, and ABC Cap sees this in the Collar Frontend.

6a. ABC Cap sees JSR is demanding 0.29 wstETH to do so (400 USDC of losses, divided by an wstETH price of 1400, rounded up to reflect JSR's cost of hedging) and decides the extension is worth it. ABC Cap uses the Collar Frontend to request execution, JSR confirms by raising an Offer onchain, and ABC Cap accepts, posting the requisite collateral. If ABC Cap couldn't afford this, they could wait until maturity and hope the asset recovers, or they could sell back their portion of the position to the marketmaker for some residual value, abandoning their loan.

## At Maturity

7. As the trade nears maturity, wstETH drops to a price of 1000 USDC. The marketmaker ended up being right and the price of the asset dropped, so they are given the entirety of the USDC from the position.

8. Currently, any party can mature a vault so long as block.timestamp exceeds the maturity date timestamp. Collar's Offchain Intent Platform also helps facilitate this.

9. At maturity, the vault observes the Uniswap TWAP oracle provided natively by Uniswap to decide how much collateral to pay out to a given user, in line with the payout diagram displayed on the app's homepage. This oracle is extremely expensive to manipulate over long periods of time (minutes of constant buying onchain).
