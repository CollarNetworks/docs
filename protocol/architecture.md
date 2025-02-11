---
order: 1000
label: "Architecture"
---

## Core Protocol Contracts

### ConfigHub.sol

Central configuration hub that manages protocol permissions and parameters. Handles contract authorization, protocol fees, valid parameter ranges, and emergency pause functionality.

### CollarTakerNFT.sol & CollarProviderNFT.sol

Form the foundation of the protocol's collar positions:

**CollarTakerNFT.sol**

- Manages the taker side of collar positions
- Handles position settlement using oracle prices
- Works with provider NFTs to create zero-sum paired positions

**CollarProviderNFT.sol**

- Allows liquidity providers to create offers
- Manages provider positions and protocol fees
- Handles provider side position settlement by taker NFT, and provider withdrawals

### LoansNFT.sol

Primary entry point for borrowers, offering collateralized loans through collar positions:

**Key Functions**:

1. Opens loans by accepting collateral and providing borrowed funds
2. Manages asset swaps through authorized Swapper contracts
3. Handles loan closure and settlement
4. Supports keeper-assisted operations for time sensitive operations
5. Enables loan extensions through Rolls contracts
6. Optionally supports escrow-backed loans

### EscrowSupplierNFT.sol

Optional system for escrow-backed loans:

- Manages escrow positions with fixed interest rates
- Handles position lifecycle including late fees
- Provides tax-efficient loan structure

### Rolls.sol

Enables extension of existing positions at new prices:

- Allows providers to offer position rolls
- Manages settlement and new positions creation
- Handles associated fee calculations and transfers

### Price & Swaps

**Oracles**
Multiple oracle options supporting different price feeds with built-in safety checks.

**SwapperUniV3.sol**
Handles protocol swaps with slippage protection and balance verification.
