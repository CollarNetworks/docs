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

Let's say we have a client named "ABC Capital" who runs a liquid token fund with various investors. Their strategy is to buy and sell tokens in order to make money. Sometimes, they've already allocated all their capital and want to borrow against existing tokens to deploy more capital (temporarily) without fully giving up a current position. Sometimes, they want to earn real yield on their invested capital.

One of the traders heard about Collar at a conference and decides to head on over to collarprotocol.xyz, click "Enter App" and connect their wallet. From then on, these are the steps they would take, and the corresponding action on the backend that occurs.

Let's name our most competitive and active marketmaker "Jane Sigma Research" or JSR.

Over time, we plan to make this user experience as seamless and frictionless as possible through automation and tooling.

0. JSR supplies 1000 USDC of liquidity at a maximum return of 110% to the 3 month, 90% LTV, ETH-USDC pool, reflecting a willingness to be the counterparty for an ETH forward contract.

1. ABC Cap arrives to the collarprotocol.xyz website, selects the terms they'd like, sees there is enough there to borrow against 10 ETH with a max return of 110%, puts up 10 ETH and clicks "borrow".

2. ABC Cap's ETH is stored in Collar's collateral ringfence.

3. The protocol then swaps the supplied ETH in a decentralized exchange, such as Uniswap v3, for USDC (note: this incurs some slippage). The price at which this swap executes determines the exact maximum and minimum of the vault (i.e. swapping 1 ETH -> 999 USDC (0.1% slippage) results in a ceiling of 1098.9 USDC and a floor of 899.1 USDC).

4. Of the 999 USDC of proceeds from this swapped ETH, 899.1 is lent to the user, and 99.9 is deposited into a vault in case the collateral declines in value, in order to incentivize marketmakers. This vault cannot be accessed by anyone until the maturity timestamp is greater than that of block.timestamp (a measurement native to the blockchain).

!!! Expert Note
JSR understands hedging Collars is a bearish trade, so once the trade is executed they go to their favorite source of liquidity and get long ETH to isolate the volatility risk from the directional risk produced by the trade. This is called "scalping gamma" and it's how marketmakers can make money by isolating and trading volatility itself.
!!!

## ETH Up 7% Scenario

5a. A month goes by and ETH is up 7% vs. USDC, so ABC Cap decides they want to take a bit more cash off the table and extend their upside exposure. JSR saw the same thing and in order to facilitate, shows an offer to extend and restrike the contract, depositing 70 USDC.

6a. ABC Cap comes back to the Collar UI, finds the vault, and see that JSR has offered ABC Cap an additional 70 USDC on their loan if they were to extend the trade. ABC Cap clicks "extend", resetting the terms of the trade and causing minimal cash to change hands.

## ETH Down 30% Scenario

5b. A month goes by and ETH is down 30% vs. USDC, but ABC Cap believes in the asset and want to extend their trade. JSR saw the same thing and in order to facilitate, shows an offer to extend and restrike the contract by 3 months, demanding 0.29 ETH to do so (200 USDC of losses, divided by an ETH price of 700, rounded up to reflect hedging cost).

6b. ABC Cap comes back to the Collar UI, finds the vault, and see that JSR has offered ABC Cap an extension if they can post 0.29 ETH. ABC Cap clicks "extend", resetting the terms of the trade, with minimal cash / collateral changing hands. If ABC Cap couldn't afford to extend the trade and ignore the offer, then at maturity the marketmaker would receive the full value of the vault after it matures.

## At Maturity

7. As the trade nears maturity, ETH drops to a price of 500 USDC

8. Currently, any party can mature a vault so long as block.timestamp exceeds the maturity date timestamp.

9. At maturity, the vault observes a Uniswap TWAP oracle to decide how much collateral to pay out to a given user, in line with the payout diagram displayed on the app's homepage.
