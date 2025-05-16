# VOTRE TRANSACTION

Reference No.: The transaction hash (Tx Hash) recorded on the blockchain ledger corresponding to the Borrower's initiation of the Transaction on the Platform

## Dear Votre user:

### 1.	The purpose of this Confirmation is to set forth the terms and conditions of the Transaction entered into between Votre, Inc. (the `Platform`) and any entity or individual using the Platform to engage in Transactions (the `Borrower`) on the Trade Date specified below (the `Transaction`).

This Confirmation supplements, forms a part of, is subject to, and constitutes a Confirmation under that certain ISDA 2002 Master Agreement, dated as of [•], 2025 (including the Schedule thereto and the Credit Support Annex thereunder, and as amended, supplemented and otherwise modified, from time to time, the “Master Agreement”), by and between the parties hereto.

The definitions and provisions contained in the ISDA Digital Asset Derivatives Definitions (the “Digital Definitions”) and the 2006 ISDA Definitions (the “Swap Definitions” and, together with the Digital Definitions, the “Definitions”) in each case, as published by the International Swaps and Derivatives Association, Inc., are incorporated into this Master Confirmation.

### 2.	The terms of the particular Transaction to which the relevant Confirmation relates are as follows:

**General Terms:**

Trade Date:	The timestamp at which the Borrower initiates the Transaction on the Platform, as recorded on the relevant blockchain ledger

Notional Amount:	[The number of the Reference Asset being hedged by the transaction]

Reference Asset:	cbBTC/WETH

Settlement Price Source:	The Uniswap Protocol

Settlement Price Source Provider:	Uniswap Labs

Price Source Currency:	USDC

Settlement Currency:	USDC

Calendar Day Election:	Applicable

**Initial Settlement:**

The Spread:	As accepted by the user when creating a transaction

Platform Initial Exchange Amount:	A number of the Reference Asset equal to the Notional Amount.

Borrower Initial Exchange Amount:	A number of the Reference Asset equal to the product of (i) the Spread and (ii) the Notional Amount.

Initial Settlement Date:	The timestamp at which the Borrower initiates the Transaction on the Platform, as recorded on the relevant blockchain ledger

Initial Exchange:	On the Initial Settlement Date Platform shall deliver the Platform Initial Exchange Amount to Borrower and Borrower shall deliver the Borrower Initial Exchange Amount to Platform.

**Independent Amount:**

Independent Amount:	For Platform, zero;

For Borrower, an amount equal to the product of (A) the absolute value of the Total Return Floor, the (B) Notional Amount, and (C) the Initial Price.

Transfer of Independent Amount: 	Borrower shall Transfer the Independent Amount to Platform on the Initial Settlement Date.

**Final Settlement:**

Platform Final Exchange Amount:	A number of the Reference Asset equal to the Notional Amount.

Borrower Final Exchange Amount:	A number of the Reference Asset equal to the Notional Amount.

Final Settlement Date: 	The date and time calculated by adding the duration selected by the Borrower at the time of initiating the Transaction to the timestamp of the Initial Settlement, with both values recorded and verifiable via the Base blockchain

Final Exchange:	On the Final Settlement Date (i) Platform shall deliver the Platform Final Exchange Amount to Borrower, (ii) Borrower shall deliver the Borrower Final Exchange Amount to Platform, (iii) and the Total Return Payer or Total Return Receiver, as applicable shall deliver the Total Return Payment, as specified below.

**Total Return:**

Total Return Payer:	Platform

Total Return Receiver:	Borrower

Total Return Payment:	if the Total Return Amount determined by the Calculation Agent in relation to the Total Return Payer is a positive number, then the Total Return Payer will pay to the Total Return Receiver the Total Return Amount on the Final Settlement Date; and

If the Total Return Amount determined by the Calculation Agent in relation to the Total Return Payer is a negative number then the Total Return Receiver will pay to the Total Return Payer the absolute value of the Total Return Amount on the Final Settlement Date.

**Total Return Amount Calculations:**

Total Return Amount:	means, in respect of the Final Settlement Date and the Total Return Payer, an amount, determined by the Calculation Agent as of the Final Settlement Date, equal to the product of the (i) Notional Amount, (ii) the Initial Price, and (iii) the Rate of Return.

Total Return Cap:	As accepted by the user when creating a loan

Total Return Floor:	As accepted by the user when creating a loan

Rate of Return:	means, in respect of the Final Settlement Date, a rate determined by the Calculation Agent as of the Final Settlement Date on a formula basis as follows:

;

provided, that the Rate of Return shall be no greater than the Total Return Cap and shall be no less than the Total Return Floor.

Initial Price:	The price of the Reference Asset at the time Borrower initiates adding the Transaction on the Ethereum blockchain on the Trade Date, as indicated by the Uniswap Price Oracle.

Final Price:	The price of the Reference Asset at the time the final block of the Transaction is added to the Ethereum blockchain on the Final Settlement Date, as indicated by the Uniswap Price Oracle.

**Price Source Disruption Events:**

Price Source Unavailability:	Applicable

Price Source Discontinuance:	Applicable

Material Change in Methodology:	Applicable

Material Change Determining Party:	Platform

Application of

Price Source Disruption Fallbacks:	Section 4.2.5 of the Digital Definitions is hereby deleted in its entirety and replaced with the following:

“If any Price Source Disruption Event has occurred then the Calculation Agent will, acting in good faith and using commercially reasonable procedures, make such adjustments to the Transaction as it deems necessary, including determining a commercially reasonable alternative (or alternatives) for the Settlement Price Source, taking into account all available information that in good faith it considers relevant.

**Hedging Disruption Events:**

Hedging Disruption:	Applicable

Increased Cost of Hedging:	Applicable

Hedging Party:	Platform

**Fork Disruption Events:**

Fork Disruption Event:	Applicable

Fork Determining Party: 	Platform

Calculation Agent Fork Adjustment:	Applicable

**Change in Law Disruption Events:**

Change in Law – Performance Illegality:	Applicable

Change in Law – Hedging Illegality:	Applicable

Change in Law Party:	Platform

**Account Details:**

Digital wallet for payments and deliveries to Platform: 0x67828bc77A84D12FbC8F0174797F2Aa9f2766cE8

Digital wallet for payments and deliveries to Borrower: The digital wallet address used by the Borrower to initiate the Transaction on the Platform, as confirmed by the corresponding blockchain transaction record
