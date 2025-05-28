**This Master Lending Agreement ("Agreement")** is entered into on the date of on-chain execution and is made between:

1. **Votre Inc.**, a corporation organized under the laws of Delaware ("Facilitator");
2. **The Borrower**, being the individual or entity designated in the Collar Protocol's smart contract as loan.borrower whose digital signature appears in the on-chain transaction; and
3. **The Supplier**, being the individual or entity designated in the Collar Protocol's smart contract as the owner of the applicable EscrowSupplierNFT whose digital signature appears in the on-chain transaction.

Each of Facilitator, Borrower, and Supplier may be referred to individually as a "Party" and collectively as the "Parties."

## RECITALS

**WHEREAS**, Collar Protocol has developed a decentralized lending infrastructure that enables digital asset lending through smart contracts deployed on the blockchain;

**WHEREAS**, Facilitator provides services to facilitate the use of Collar Protocol, including user interface, transaction facilitation, and infrastructure support;

**WHEREAS**, Supplier wishes to provide digital assets as escrow for loans through the Collar Protocol using the EscrowSupplierNFT smart contract;

**WHEREAS**, Borrower wishes to borrow digital assets through the Collar Protocol using the escrow provided by Supplier;

**WHEREAS**, the Parties wish to establish the terms and conditions governing these lending relationships and services;

**NOW, THEREFORE**, in consideration of the mutual covenants and promises contained herein, and other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:

## 1. DEFINITIONS

**"Additional Collateral"** means any interest, dividends, airdrops, or other distributions paid or otherwise received in relation to the Collateral during the Term of a Loan.

**"Airdrop"** means a distribution of new tokens resulting from the ownership of an existing token.

**"Blockchain"** means the distributed ledger technology on which the EscrowSupplierNFT smart contract is deployed.

**"BIPS"** means basis points, where one basis point equals 0.01% (1/100th of a percent).

**"Borrower"** means the owner of the Digital Currency Address specified in the smart contract as loan.borrower.

**"Collar Protocol"** means the collection of smart contracts, including the EscrowSupplierNFT smart contract, that enables the lending functionality described in this Agreement.

**"Collateral"** means the digital assets pledged by Borrower to secure a Loan.

**"Digital Asset"** or "Digital Currency" means the supported cryptocurrency or token specified in the smart contract, including but not limited to Wrapped Ether (WETH) and Coinbase Wrapped Bitcoin (cbBTC).

**"Digital Currency Address"** means a blockchain address that represents a destination for transfers of Digital Currency.

**"Early Termination Fee"** has the meaning set forth in Section 5(d).

**"Effective Date"** means the timestamp at which a Loan is executed on the Blockchain.

**"EscrowSupplierNFT"** means the non-fungible token governed by the smart contract provided in this Agreement, which represents the Supplier's position in providing escrow.

**"Fees"** means all fees associated with a Loan, including Loan Fees, Late Fees, and any Early Termination Fees.

**"Grace Period"** means the period following the Maturity Date during which Late Fees accrue but before the Supplier may seize the Escrow, as specified in the smart contract.

**"Hard Fork"** means a material change to a blockchain protocol that results in the creation of a new blockchain and potentially new tokens.

**"Late Fee"** means the fee charged when a Borrower fails to repay a Loan by the Maturity Date, calculated according to Section 5(b).

**"Loan"** means the lending of Digital Currency made pursuant to this Agreement and executed through the Collar Protocol.

**"Loan Balance"** means the outstanding amounts of Loaned Assets plus any accrued Fees.

**"Loan Effective Date"** means the timestamp at which a Loan is executed on the Blockchain.

**"Loan Fee"** means the interest charged on a Loan, calculated as specified in Section 5(a).

**"Loaned Assets"** means the Digital Currency transferred in a Loan until such Digital Currency is returned to Supplier.

**"Maturity Date"** means the date by which the Loan must be repaid, as recorded in the Collar Protocol smart contract.

**"New Tokens"** means tokens created as a result of a Hard Fork affecting the Loaned Assets or Collateral.

**"Offer"** means the terms under which a Supplier is willing to provide escrow for a Loan, as recorded in the EscrowSupplierNFT smart contract.

**"Platform"** means the software and services provided by Facilitator to enable interaction with the Collar Protocol.

**"Request for Quote"** or **"RFQ"** means the system by which Borrowers can request specific loan terms through the Platform, and Suppliers can provide responsive quotes with their lending conditions. The Platform facilitates the display, negotiation, and execution of these quotes, but all final terms are executed and enforced on-chain through the Collar Protocol's smart contracts.

**"Smart Contract"** means the self-executing code deployed on the Blockchain that governs the terms and conditions of the Loans, including the EscrowSupplierNFT smart contract.

**"Supplier"** means the provider of escrow for a Loan who owns the EscrowSupplierNFT.

**"Term"** means the period from the Loan Effective Date through the Termination Date.

**"Termination Date"** means the date upon which a Loan is terminated or matures.

**"UCC"** means the Uniform Commercial Code as adopted and implemented in the State of Delaware, or any other applicable jurisdiction.

## 2. ROLE OF FACILITATOR

### a) Services Provided: 

Facilitator provides technology services to facilitate the use of the Collar Protocol, including but not limited to:

  - Maintaining a user interface for interacting with the Collar Protocol
  - Providing technical support for users
  - Facilitating the onboarding process
  - Developing and maintaining infrastructure to support the Collar Protocol
  - Operating the RFQ system through its frontend interface

### b) Non-Custodial Relationship: 

Facilitator does not at any time take custody of or control over the Digital Assets involved in the Loans. All Digital Assets are controlled directly by the Parties through the immutable smart contracts of the Collar Protocol. The Collar Protocol was initially deployed by Votre Inc. but operates autonomously and is not owned or controlled by any single entity. Any transmission of Digital Assets occurs entirely on the blockchain as a result of direct user interactions with the smart contracts, without intermediation by Votre Inc.

### c) RFQ Functionality: 

Facilitator's Platform includes a Request for Quote (RFQ) system that allows Borrowers to request specific loan terms and Suppliers to respond with quotes. This system functions as follows:

- Borrowers can create requests for specific loan terms through the Platform's frontend interface
- Suppliers can view these requests and provide responsive quotes with their lending conditions
- All quotes and their acceptance are displayed through the Platform but executed and enforced on-chain
- Facilitator does not determine or influence the rates, terms, or conditions offered by Suppliers
- The Platform merely displays information and facilitates communication between Parties

### d) No Financial Advice: 

Facilitator does not provide financial, investment, legal, or tax advice. Parties should consult with their own advisors before entering into any Loan.

### e) Compliance Support:

Facilitator provides tools to assist Parties in meeting their compliance obligations but does not guarantee compliance with any particular laws or regulations.

### f) Smart Contract Risk: 

Parties explicitly acknowledge that they are assuming the risk of interacting with smart contracts on the blockchain. While Facilitator has taken reasonable measures to ensure security, including third-party audits and monitoring, smart contracts may contain vulnerabilities that could result in loss of Digital Assets. Facilitator is not liable for any losses resulting from smart contract vulnerabilities, exploits, or other technical failures.

## 3. LOAN PROCEDURE

### a) Loan Initiation

The loan initiation process is executed entirely on-chain through the Collar Protocol and proceeds as follows:

i) Supplier creates an Offer by depositing Digital Currency into the EscrowSupplierNFT smart contract, specifying:
  - Amount of Digital Currency available
  - Loan duration
  - Interest rate (in annual percentage rate basis points)
  - Grace Period
  - Late Fee rate
  - Minimum escrow amount

ii) Borrower views available Offers through the Platform and selects an Offer that meets their requirements.

iii) Borrower initiates a Loan by interacting with the Collar Protocol through the Platform, specifying:
  - The selected Offer ID
  - The amount to borrow (within the limits of the Offer)
  - The Digital Currency Address to receive the Loaned Assets

iv) The Collar Protocol executes the Loan by:
  - Verifying that sufficient Digital Currency is available in the selected Offer
  - Transferring the specified amount of Digital Currency to the Borrower's Digital Currency Address
  - Minting an EscrowSupplierNFT to the Supplier, representing their position
  - Recording the Loan terms, including the Maturity Date

v) Upon successful execution of the above steps, the Loan is considered active, and this Agreement enters into effect between the Parties.

### b) Loan Repayment

i) Borrower must repay the full Loan Balance on or before the Maturity Date by interacting with the Collar Protocol through the Platform.

ii) Upon repayment, the Collar Protocol will:
  - Transfer the repaid Digital Currency to the Supplier
  - Calculate and process any applicable Fee refunds
  - Record the Loan as completed
  - Mark the EscrowSupplierNFT as released, allowing the Supplier to withdraw their funds

iii) If the Borrower fails to repay by the Maturity Date, Late Fees will begin to accrue as specified in Section 5(b).

### c) Early Termination

i) Borrower may repay the Loan before the Maturity Date by interacting with the Collar Protocol through the Platform.

ii) Early repayment will trigger the calculation and application of any Early Termination Fee as specified in Section 5(d).

iii) The Collar Protocol will process the early termination in the same manner as a regular repayment, with adjustments for the Early Termination Fee.

## 4. COLLATERAL REQUIREMENTS
### a) Escrow Model

The Collar Protocol operates on an escrow model where:

i) Supplier provides Digital Currency which serves as the Loaned Assets.

ii) Borrower receives these Loaned Assets and pays Fees for their use.

iii) Supplier receives an EscrowSupplierNFT representing their position in the Loan.

iv) Upon repayment, Supplier receives back their Digital Currency plus applicable Fees.

### b) No Rehypothecation

i) The Collar Protocol's EscrowSupplierNFT smart contract and associated protocols are designed specifically to prevent rehypothecation of assets. Rehypothecation (the practice of financial institutions using assets posted as collateral by their clients for their own purposes) is not possible within the Collar Protocol's design.

ii) All Digital Assets provided by Suppliers are locked within the smart contracts and can only be released according to the predetermined conditions encoded in these contracts.

iii) The smart contracts maintain full transparency regarding the status and usage of all Digital Assets at all times through on-chain verification.

iv) Parties acknowledge and agree that this prohibition against rehypothecation is a fundamental characteristic of the Collar Protocol and a material consideration for entering into this Agreement.

### c) Supplier Rights

i) Supplier maintains beneficial ownership of the Digital Currency while it is being used as Loaned Assets.

ii) If Borrower fails to repay the Loan by the Maturity Date and through the Grace Period, Supplier may seize the Loaned Assets by executing the seizeEscrow function in the EscrowSupplierNFT smart contract.

iii) Supplier may transfer their EscrowSupplierNFT to another party, who will then assume all rights and obligations of the Supplier under this Agreement.

### d) Borrower Obligations

i) Borrower must return the Loaned Assets plus applicable Fees by the Maturity Date.

ii) Borrower acknowledges that failure to repay by the Maturity Date plus the Grace Period will result in the loss of the ability to recover any portion of the Fees paid.

## 5. FEES AND INTEREST
### a) Loan Fee

i) Borrower agrees to pay a Loan Fee for the use of the Loaned Assets, calculated as an annual interest rate specified in the Offer and recorded in the EscrowSupplierNFT smart contract.

ii) The Loan Fee is calculated as follows:

iii) Loan Fee = Loaned Assets * Interest Rate (in BIPS) * Loan Duration / (10,000 * 365 days)

iv) The Loan Fee is paid upfront at the time of Loan initiation and held in the EscrowSupplierNFT smart contract.

v) If the Loan is repaid before the Maturity Date, a portion of the Loan Fee may be refunded as calculated by the EscrowSupplierNFT smart contract, subject to the Early Termination Fee provisions in Section 5(d).

### b) Late Fee

i) If Borrower fails to repay the Loan by the Maturity Date, a Late Fee will accrue on the Loan Balance.

ii) The Late Fee is calculated based on the Late Fee rate specified in the Offer and recorded in the EscrowSupplierNFT smart contract.

iii) The Late Fee continues to accrue until either:

iv) The Borrower repays the Loan in full, or

v) The Grace Period expires and the Supplier seizes the Loaned Assets.

### c) Payment of Fees

i) All Fees are automatically processed by the Collar Protocol through the EscrowSupplierNFT smart contract.

ii) The Loan Fee is paid upfront at Loan initiation.

iii) Late Fees are calculated and charged on repayment or seizure.

### d) Early Termination Fee

i) If Borrower repays the Loan before the Maturity Date, an Early Termination Fee may apply.

ii) The Early Termination Fee is calculated as follows:

iii) Early Termination Fee = (Original Loan Fee - Refundable Loan Fee) * MAX_FEE_REFUND_BIPS / 10,000

iv) Where MAX_FEE_REFUND_BIPS is defined in the EscrowSupplierNFT smart contract (currently 9500 or 95%).

v) The Early Termination Fee ensures that Supplier receives a minimum compensation for providing the Loaned Assets, even if the Loan is repaid early.

## 6. HARD FORKS AND AIRDROPS

### a) Ownership of New Tokens

i) During the Term of a Loan, any New Tokens created as a result of a Hard Fork or an Airdrop related to the Loaned Assets shall belong to the Supplier.

ii) If a Hard Fork or Airdrop occurs while the EscrowSupplierNFT smart contract is holding Digital Currency as part of an active Loan:
  - If the New Tokens meet the criteria specified in the EscrowSupplierNFT smart contract, they will be returned to the Supplier upon Loan repayment.
  - If the New Tokens do not meet these criteria, they will remain with the Loaned Assets.

### b) Notification and Management

i) Facilitator will make reasonable efforts to notify Parties of any upcoming Hard Forks or Airdrops that may affect Loaned Assets or Collateral.

ii) The Collar Protocol may implement automatic handling of Hard Forks and Airdrops through the EscrowSupplierNFT smart contract, but does not guarantee complete coverage of all such events.

iii) Parties acknowledge that the blockchain ecosystem is rapidly evolving, and unforeseen events related to Hard Forks or Airdrops may occur.

## 7. REPRESENTATIONS AND WARRANTIES

### a) Facilitator Representations and Warranties

Facilitator represents and warrants that:

i) It has the legal right and authority to enter into this Agreement and provide the services described herein.
ii) The Platform is designed to interact with the Collar Protocol as described in this Agreement.

iii) It will make reasonable efforts to maintain the availability and functionality of the Platform.

iv) It has taken reasonable security precautions by:
  - Partnering with Base at the sequencer level to enhance transaction security
  - Leveraging monitoring services designed to detect and prevent potential exploits
  - Engaging Spearbit to conduct a comprehensive security audit of the smart contracts
  - Implementing additional security measures as deemed appropriate

v) In the event of a security incident affecting the Collar Protocol, Facilitator will make commercially reasonable efforts to mitigate harm, which may include contacting relevant digital asset issuers (such as Coinbase, Circle, or Tether) to request assistance in freezing or recovering affected assets. However, Facilitator cannot guarantee the success of such efforts.

### b) Supplier Representations and Warranties

Supplier represents and warrants that:

i) It has the legal right and authority to provide the Digital Currency as Loaned Assets.

ii) It is the sole owner of the Digital Currency provided as Loaned Assets and has the right to offer it through the Collar Protocol.

iii) It understands the risks associated with digital asset lending, including but not limited to market volatility, technical risks, and regulatory uncertainty.

iv) It has reviewed the EscrowSupplierNFT smart contract code or has consulted with advisors who have done so, and understands how the smart contract operates.

### c) Borrower Representations and Warranties

Borrower represents and warrants that:

i) It has the legal right and authority to enter into this Agreement and borrow the Loaned Assets.

ii) It is borrowing the Loaned Assets for lawful purposes and will not use them for any illegal activity.

iii) It understands the obligation to repay the Loan by the Maturity Date and the consequences of failing to do so.

iv) It has reviewed the EscrowSupplierNFT smart contract code or has consulted with advisors who have done so, and understands how the smart contract operates.

### d) Common Representations and Warranties

Each Party represents and warrants that:
i) It is not subject to any sanctions, restrictions, or prohibitions that would prevent it from entering into this Agreement or using the Collar Protocol.

ii) It has not relied on any representations or warranties not expressly stated in this Agreement.

iii) It has consulted with its own legal, financial, and tax advisors as needed regarding the implications of entering into this Agreement and using the Collar Protocol.

iv) It understands that blockchain transactions are generally irreversible and that the Collar Protocol operates according to its programmed logic without human intervention.

## 8. DEFAULT AND REMEDIES

### a) Events of Default

Each of the following constitutes an Event of Default by Borrower:

i) Failure to repay the Loan Balance by the Maturity Date plus the Grace Period.

ii) Providing false or misleading information in connection with the Loan.

iii) Using the Loaned Assets for illegal purposes.

iv) Breaching any material term of this Agreement.

### b) Remedies Upon Default

i) **Automatic Enforcement**: The primary remedy for default is encoded in the EscrowSupplierNFT smart contract, which allows the Supplier to seize the Loaned Assets after the Grace Period expires.

ii) **Additional Remedies**: In addition to the automatic enforcement, the non-defaulting Party may:
  - Terminate this Agreement with respect to the defaulting Party
  - Pursue any other remedies available under applicable law

iii) **Facilitator's Rights**: If a Party defaults on obligations to Facilitator (such as service fees), Facilitator may:
  - Suspend or terminate the defaulting Party's access to the Platform
  - Pursue payment through available legal means

### c) Limitation of Liability

i) **No Consequential Damages**: No Party shall be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to this Agreement, even if advised of the possibility of such damages.

ii) **Maximum Liability**: Facilitator's maximum liability arising out of or related to this Agreement shall not exceed the amount of fees actually paid by the claiming Party to Facilitator in the six months preceding the claim.

## 9. GOVERNANCE AND DISPUTE RESOLUTION

### a) Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.

### b) On-Chain Governance

i) The primary execution and enforcement of the terms of this Agreement occur through the EscrowSupplierNFT smart contract.

ii) Parties acknowledge that the automatic execution of smart contract code is the intended mechanism for most aspects of this Agreement.

### c) Off-Chain Dispute Resolution

For disputes that cannot be resolved through the smart contract:

i) **Negotiation**: Parties agree to first attempt to resolve any dispute through good faith negotiations.

ii) **Mediation**: If negotiations fail, Parties agree to submit the dispute to mediation administered by JAMS according to its rules.

iii) **Arbitration**: If mediation fails, Parties agree to submit the dispute to binding arbitration administered by JAMS according to its Comprehensive Arbitration Rules and Procedures. The arbitration shall be:
  - Conducted by a single arbitrator with experience in blockchain technology and financial services
  - Confidential and non-public
  - Limited in discovery procedures to the minimum necessary as determined by the arbitrator
  - Not subject to appeal
  - Subject to the strictest confidentiality obligations for all parties involved
  - Final and binding on all parties

iv) **Class Action Waiver**: All Parties waive any right to assert any claims against any other Party as a representative or member in any class or representative action, except where such waiver is prohibited by law. If any Party brings a claim, such Party must do so in its individual capacity, and not as a plaintiff or class member in any purported class or representative proceeding.

v) **Location**: Any off-chain dispute resolution proceedings shall take place in San Francisco, California, United States or, at the option of Facilitator, may be conducted virtually.

vi) **Costs**: Each Party shall bear its own costs and fees in connection with any negotiation, mediation, or arbitration; provided, however, that the arbitrator shall have the authority to award costs and fees to the prevailing Party.

vii) **Injunctive Relief**: Notwithstanding the foregoing, nothing in this Agreement shall prevent Facilitator from seeking injunctive relief in any court of competent jurisdiction to protect its intellectual property rights or prevent immediate harm.

## 10. MISCELLANEOUS PROVISIONS

### a) Term and Termination

i) **Term**: This Agreement commences when a Party begins using the Platform or the Collar Protocol and continues until terminated as provided herein.

ii) **Termination**: This Agreement may be terminated:
  - By mutual agreement of all Parties
  - By any Party with 30 days' written notice to the other Parties
  - By Facilitator immediately upon notice if a Party breaches any material term of this Agreement

iii) **Effect of Termination**: Termination of this Agreement does not affect any rights or obligations that accrued prior to termination, including the obligation to repay outstanding Loans.

### b) Relationship of Parties

i) The relationship between the Parties is that of independent contractors. Nothing in this Agreement creates a partnership, joint venture, agency, or employment relationship between the Parties.

ii) Facilitator is not a party to any Loan between Supplier and Borrower, but rather provides services to facilitate such Loans.

### c) Amendments

i) Facilitator may amend this Agreement by providing notice to the other Parties. Such notice may be provided through the Platform, by email, or by other reasonable means.

ii) Continued use of the Platform or the Collar Protocol after such notice constitutes acceptance of the amended Agreement.

iii) If a Party does not agree to an amendment, their sole remedy is to terminate this Agreement and cease using the Platform and the Collar Protocol.

### d) Assignment
i) No Party may assign this Agreement without the prior written consent of the other Parties, except that:
  - Facilitator may assign this Agreement to a successor in interest or affiliate
  - Supplier may transfer their EscrowSupplierNFT, which will effectively assign their rights and obligations under this Agreement to the transferee

### e) Force Majeure
No Party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, civil unrest, government actions, labor disputes, blockchain network congestion or failures, or internet service disruptions.

### f) Entire Agreement
This Agreement, together with the terms encoded in the EscrowSupplierNFT smart contract, constitutes the entire agreement between the Parties concerning the subject matter hereof and supersedes all prior and contemporaneous agreements, proposals, or representations, written or oral.

### g) Notices

i) All notices to Facilitator shall be sent to [EMAIL] or [PHYSICAL ADDRESS].
ii) All notices to Supplier or Borrower shall be sent to the email address or other contact information provided during onboarding or subsequently updated through the Platform.
iii) Notices may also be provided through the Platform interface when appropriate.

### h) Electronic Execution
This Agreement is executed electronically through the use of the Collar Protocol.
The on-chain transactions initiating Loans constitute electronic signatures and indicate acceptance of this Agreement.
Parties agree that such electronic execution is valid and binding.

### i) Survival
Sections relating to limitations of liability, representations and warranties, indemnification, confidentiality, governing law, dispute resolution, and any other provisions that by their nature should survive termination shall survive the termination of this Agreement.

### j) Severability
If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid or unenforceable provision shall be interpreted to give maximum effect to its original intent.

### k) Counterparts
This Agreement may be executed in counterparts, each of which shall be deemed an original, but all of which together shall constitute one and the same instrument.

### l) Headings
The headings in this Agreement are for convenience only and shall not affect its interpretation.

## 11. REGULATORY COMPLIANCE

### a) Know Your Customer (KYC) and Anti-Money Laundering (AML)

i) All Parties agree to comply with applicable KYC and AML regulations.

ii) Facilitator may require Parties to provide identity verification information before using the Platform or the Collar Protocol.

iii) Facilitator reserves the right to freeze access to the Platform or report suspicious activities to appropriate authorities as required by law.

iv) Parties acknowledge that Facilitator acts solely as a technology provider and not as a money transmitter or money services business. Any transmission of Digital Assets occurs directly through blockchain technology as a result of user-initiated interactions with the autonomous smart contracts, without intermediation by Facilitator.

v) The Collar Protocol operates in a fully non-custodial manner, meaning Facilitator never takes custody or control of user funds at any point before, during, or after transactions. All Digital Asset transfers are executed directly by users through the immutable smart contracts.

### b) Tax Compliance

i) Each Party is solely responsible for determining and meeting its own tax obligations related to transactions conducted through the Collar Protocol.

ii) Facilitator may provide tax forms or reports as required by applicable law, but makes no representations regarding the tax treatment of any transaction.

### c) Lending Regulations

i) Parties acknowledge that digital asset lending may be subject to various lending regulations in different jurisdictions.

ii) Each Party represents that it has determined that its use of the Collar Protocol is compliant with applicable lending regulations in its jurisdiction.

iii) If a Party becomes aware of regulatory concerns related to its use of the Collar Protocol, it agrees to promptly cease such use and notify the other Parties.

### d) Securities Laws

i) Parties acknowledge that certain digital assets may be considered securities in some jurisdictions.

ii) The Collar Protocol is designed to work with digital assets that are not intended to be securities.

iii) Each Party represents that, to the best of its knowledge, its use of the Collar Protocol does not involve securities transactions.

**BY USING THE PLATFORM OR THE COLLAR PROTOCOL, EACH PARTY ACKNOWLEDGES THAT IT HAS READ, UNDERSTANDS, AND AGREES TO BE BOUND BY THE TERMS OF THIS AGREEMENT.**

### EXHIBIT A: TECHNICAL IMPLEMENTATION DETAILS
This Exhibit provides additional technical details about the implementation of the EscrowSupplierNFT smart contract and is incorporated by reference into the Master Lending Agreement.

1. **Smart Contract Address**

The EscrowSupplierNFT smart contract is deployed at the following address on the [BLOCKCHAIN] blockchain: [CONTRACT_ADDRESS]

2. **Key Functions and Parameters**

The following key functions and parameters from the EscrowSupplierNFT smart contract are particularly relevant to this Agreement:
- *MAX_INTEREST_APR_BIPS*: 10,000 (100% APR maximum interest rate)
- *MAX_LATE_FEE_APR_BIPS*: 120,000 (1200% APR maximum late fee rate)
- *MIN_GRACE_PERIOD*: 1 days (minimum grace period)
- *MAX_GRACE_PERIOD*: 30 days (maximum grace period)
- *MAX_FEE_REFUND_BIPS*: 9500 (95% maximum fee refund on early termination)

3. **Offer Creation**

Suppliers create Offers by calling the createOffer function with the following parameters:

- *amount*: The offered amount of Digital Currency
- *duration*: The offer duration in seconds
- *interestAPR*: The annual interest rate in basis points
- *gracePeriod*: The maximum grace period duration in seconds
- *lateFeeAPR*: The annual late fee rate in basis points
- *minEscrow*: The minimum escrow amount

4. Loan Execution

Loans are executed through the associated Loans contract, which calls the startEscrow function with:

- *offerId*: The ID of the offer to use
- *escrowed*: The amount to escrow
- *fees*: The upfront interest and late fees to hold
- *loanId*: The associated loan ID

5. Fee Calculations

Fees are calculated using the following formulas:

- *Interest Fee*: escrowed * interestAPR * duration / (10,000 * 365 days)
- *Late Fee*: escrowed * lateFeeAPR * gracePeriod / (10,000 * 365 days)
- *Interest Refund on Early Termination*: interestHeld * (duration - elapsed) / duration, capped at interestHeld * MAX_FEE_REFUND_BIPS / 10,000
- *Late Fee Refund*: lateFeeHeld * (gracePeriod - overdue) / gracePeriod

6. Escrow Lifecycle

The lifecycle of an escrow position includes:

- Creation: Supplier creates an Offer
- Activation: Borrower takes the Offer, EscrowSupplierNFT is minted to Supplier
- Repayment: Borrower repays, escrow is marked as released
- Withdrawal: Supplier withdraws funds by calling *withdrawReleased*
- Seizure (if applicable): After grace period expires without repayment, Supplier calls *seizeEscrow*

7. Technical Limitations and Considerations

- All time calculations are based on blockchain timestamps
- Transactions may be delayed due to network congestion
- Gas fees for executing functions are paid by the transaction initiator
- Smart contract interactions are final and generally cannot be reversed

## 12. UCC COMPLIANCE AND DIGITAL ASSET CONTROL

### a) UCC Definitions and Concepts

i) For purposes of UCC compliance, the following definitions apply:
- **"Control"** has the meaning set forth in UCC § 8-106 and § 9-106, which in the context of this Agreement is implemented through the cryptographic security mechanisms of the smart contracts and blockchain, where assets are controlled through private key cryptography.
- **"Security Entitlement"** has the meaning set forth in UCC § 8-102(a)(17), which in the context of this Agreement relates to the rights and property interests represented by the EscrowSupplierNFT.

ii) The EscrowSupplierNFT represents a "security entitlement" under Article 8 of the UCC, and the smart contract serves as the "securities intermediary" that maintains the "securities account" in which the Digital Assets are held. The Supplier's rights in the Digital Assets are enforceable under UCC Article 8 and 9.

iii) Borrower grants Supplier a security interest in the Loaned Assets consistent with UCC Article 9, which is perfected through "control" as defined in UCC § 8-106 and § 9-106. This control is enforced cryptographically through the smart contract architecture.

iv) Section 9-207 of the UCC prohibits secured parties from using collateral in certain ways without specific agreement from the collateral provider. The Collar Protocol's design specifically enforces this prohibition through the EscrowSupplierNFT smart contract, which programmatically ensures that neither the Borrower, the Supplier, nor the Facilitator can use or rehypothecate the Digital Assets while they are locked in the smart contract.

### b) UCC Categorization of Digital Assets

i) The Parties acknowledge that Digital Assets may be categorized under the UCC as "investment property," "general intangibles," or another category depending on their characteristics and applicable law.

ii) Regardless of categorization, the Parties agree that the EscrowSupplierNFT smart contract establishes "control" (as defined in the UCC) over the Digital Assets through cryptographic means that functionally achieve the same objectives as traditional control methods under UCC Articles 8 and 9.

iii) The Parties acknowledge that the security interests contemplated by this Agreement and implemented through the smart contracts are intended to be enforceable under the UCC.

### c) Perfection of Security Interests

i) The security interest in the Digital Assets is perfected through "control" as implemented by the EscrowSupplierNFT smart contract, consistent with UCC §§ 8-106, 9-106, and 9-314.

ii) The cryptographic mechanisms of the blockchain and smart contracts provide a technological means to establish exclusive control over the Digital Assets that meets or exceeds the requirements for perfection under the UCC.

iii) The Parties agree that this method of perfection provides at least equivalent protection to traditional methods and serves the fundamental purpose of the UCC's perfection requirements by providing clear notice of security interests and preventing conflicting claims.

### d) Priority of Security Interests

i) The EscrowSupplierNFT smart contract code guarantees the Supplier's priority in the security interest over the Loaned Assets by making it technically impossible for conflicting security interests to be created in the same Digital Assets while they are locked in the smart contract.

ii) This technical guarantee of priority is consistent with the UCC's priority rules that generally give the highest priority to security interests perfected by control.

### e) Smart Contract as Securities Intermediary

i) For purposes of UCC Article 8, the EscrowSupplierNFT smart contract functions as a securities intermediary that maintains securities accounts in which the Digital Assets are held.

ii) The EscrowSupplierNFT's issuance to the Supplier represents a security entitlement with respect to the underlying Digital Assets.

iii) The smart contract autonomously performs the functions traditionally performed by a securities intermediary, including:
- Maintaining records of ownership
- Processing distributions
- Implementing transfer instructions
- Enforcing security interests

### f) Enforcement of Security Interests

i) The EscrowSupplierNFT smart contract's *seizeEscrow* function implements the enforcement of the security interest in compliance with UCC Article 9's enforcement provisions.

ii) The automatic nature of this enforcement mechanism provides a commercially reasonable method of disposition under UCC § 9-610.

iii) The transparency of the blockchain ensures that all aspects of enforcement are verifiable and auditable, providing greater protections than traditional enforcement methods.# MASTER LENDING AGREEMENT
