---
label: "Swap Trade Example"
order: 120
---

Below is a step-by-step walkthrough of a sample trade using Votre.

### Trade Setup

- Borrower: ABC Capital, a liquid token fund
- Loan collateral: wstETH (~$2,000 per wstETH)
- Loan currency: USDC
- Loan-to-value (LTV): 90%
- Loan duration: 3 months
- Votre protocol fee: 1%
- Objective: Maximize return while avoiding liquidation risk

### Why ABC Capital Uses Votre

ABC Capital wants to borrow USDC without selling their wstETH holdings. Traditional lending platforms like AAVE expose them to liquidation risk. Instead, they use Votre to unlock capital without forced liquidation and while maintaining exposure to wstETH.

### Executing the Trade

ABC Capital visits votre.xyz, connects their wallet, and follows these steps:

##### 1. Request a Quote

- ABC Capital selects loan terms and requests quotes.
- Three return cap options appear: 108%, 109%, and 110% (offered by “Jane Sigma Research” or JSR).

##### 2. Accepting the Offer

- ABC Capital chooses JSR’s 110% cap via the Votre frontend.
- JSR is notified via Votre’s Offchain Intent Platform.

##### 3. Onchain Offer Creation

- JSR prepares an onchain Offer, posting 200 USDC in collateral to secure the trade. 4. Trade Execution
- ABC Capital accepts the offer, depositing wstETH into Votre. 5. Collateral Swap & Loan Issuance
- Votre swaps wstETH for USDC using Uniswap v3, accounting for slippage.
- Loan funds are sent to ABC Capital, while collateral is locked for settlement.

### Managing & Extending the Loan

##### If wstETH Rises 7%

- ABC Capital extends the loan to lock in gains.
- JSR provides updated loan terms via Votre’s Offchain Intent Platform.
- ABC Capital accepts the roll, adjusting the collateral to reflect new pricing.

##### If wstETH Drops 30%

- ABC Capital still believes in wstETH and wants to extend.
- JSR offers new terms, requiring 0.29 wstETH to cover losses.
- ABC Capital can:
- Accept and post more collateral to extend the loan.
- Wait until maturity, hoping for a price rebound.
- Sell back part of the position to exit early.

### At Maturity

- When the loan reaches maturity, the marketmaker receives the USDC collateral if the asset price has dropped.
- Any party can finalize the vault once maturity is reached, assisted by Votre’s Offchain Intent Platform.
- The final settlement amount is determined using Uniswap’s TWAP oracle, ensuring a fair payout based on the agreed trade terms.
