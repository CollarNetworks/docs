---
# icon: ":slightly_frowning_face:"
order: 1000
---

#### ConfigHub.sol

Handles address tracking of contracts for the protocol. Also allows various key protocol parameters to be tweaked.

#### CollarTakerNFT.sol

Represents user positon, calculates final price of the trade, pairs with ProviderPositionNFT.sol to represent the entire Collar position. Holds user collateral.

#### Loans.sol

This contract acts as the main entry point for borrowers in the Collar Protocol, and manages the creation and closure of collateralized loans via Collar positions.

**How it Works**:

1.  Allows users to create loans by providing collateral and borrowing against it.
2.  Handles the swapping of collateral to the cash asset using Uniswap V3.
3.  Interacts with CollarTakerNFT to mint the NFT collar position backing the loans to the user.
4.  Manages loan closure, including repayment and swapping back to collateral.
5.  Provides keeper functionality for automated loan closure to allow avoiding price
    fluctuations negatively impacting swapping back to collateral.
6.  Allows rolling (extending) the loan via an owner and user approved Rolls contract.

#### Rolls.sol

Creates a new roll offer for an existing taker NFT position and pulls the provider NFT.

The provider must own the ProviderPositionNFT for the position to be rolled.

If the provider will need to provide cash on execution, they must approve the contract to pull that cash when submitting the offer (and have those funds available), so that it is executable. Offer may become unexecutable due to insufficient provider cash approval or balance.

Rolls are executed by settling the existing paired position and creating a new one. This pulls and distributes cash, pulls taker NFT, and sends out new taker and provider NFTs. The caller must be the owner of the CollarTakerNFT for the position being rolled, and must have approved sufficient cash if cash needs to be paid (depends on offer and current price).

            The contract balance    = takerSettled + providerSettled

            The contract receives / pays:
                1. toPairedPosition =                                  newPutLocked + newCallLocked
                2. toTaker          = takerSettled                   - newPutLocked                 - fee
                3. toProvider       =                providerSettled                - newCallLocked + fee

            All payments summed     = takerSettled + providerSettled

            So the contract pays out everything it receives, and everyone gets their correct updates.

#### Swaps.sol

Handles any and all swaps for the protocol. Currently leverages Uniswap v3 exclusively. Over time may be expanded to include other liquidity sources.

#### OracleUniV3TWAP.sol

Calculates final price at maturity of the asset by observing a Uniswap v3 TWAP pool.
