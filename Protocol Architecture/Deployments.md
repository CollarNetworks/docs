---
# icon: ":slightly_frowning_face:"
order: 100
---

#### Official Wallet

[collarprotocol.eth](https://etherscan.io/address/0x1980fB2f1e18E0CEc2219e3eda333b05fd92dA0d)

#### Arbitrum Sepolia

Collar uses Arbitrum Sepolia to test contract functionality.

| Name                              | Address                                                                                                                          | Description                                                                 |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| ConfigHub.sol                     | [**0x91462BFD0510d6Ea9c375d6F02407e29f903254E**](https://sepolia.arbiscan.io/address/0x91462BFD0510d6Ea9c375d6F02407e29f903254E) | Handles address tracking of contracts for the protocol                      |
| CollarTakerNFT.sol                | [**0xA7d432509C513B9347d1B7aB72494471a1A86655**](https://sepolia.arbiscan.io/address/0xA7d432509C513B9347d1B7aB72494471a1A86655) | Calculates settlement value of Collar positions, represents user holdings   |
| ProviderPositionNFT.sol           | [**0x960B52349ae2c97e52438F13F364aa8d145B5B5C**](https://sepolia.arbiscan.io/address/0x960B52349ae2c97e52438F13F364aa8d145B5B5C) | Manages liquidity provision, represents marketmaker position.               |
| Loans.sol                         | [**0x43bb63964A73e97292f018468Fcd0203a3d3A8b7**](https://sepolia.arbiscan.io/address/0x43bb63964A73e97292f018468Fcd0203a3d3A8b7) | Entry point to protocol, handles loans                                      |
| Swaps.sol                         | [**pending**](https://sepolia.arbiscan.io/address/pending)                                                                       | Handles swaps of collateral                                                 |
| Rolls.sol                         | [**pending**](https://sepolia.arbiscan.io/address/pending)                                                                       | Handles the extension of Collar Positions                                   |
| OracleUniV3TWAP.sol               | [**pending**](https://sepolia.arbiscan.io/address/pending)                                                                       | Source of an asset's final price, which determines user/marketmaker payout. |
| Cash Asset (ERC20)                | [**0x5D01F1E59C188a2A9Afc376cF6627dd5F28DC28F**](https://sepolia.arbiscan.io/address/0x5D01F1E59C188a2A9Afc376cF6627dd5F28DC28F) | A temporary cash asset                                                      |
| Collatereal Asset (ERC20)         | [**0x9A6E1a5f94De0aD8ca15b55eA0d39bEaEc579434**](https://sepolia.arbiscan.io/address/0x9A6E1a5f94De0aD8ca15b55eA0d39bEaEc579434) | A temporary collateral asset for testing                                    |
| Uniswap v3 Pool (Cash/Collateral) | [**0x25CC84570808B19Be4AA9bd3DFaF007411939176**](https://sepolia.arbiscan.io/address/0x25CC84570808B19Be4AA9bd3DFaF007411939176) | A Uniswap V3 pool for the temporary cash and collateral assets for testing  |

#### Arbitrum Mainnet

Coming soon!

#### Other Networks

See Roadmap
