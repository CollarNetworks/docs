# Proposal Mechanisms for Suppliers and Providers

Suppliers and Providers—also referred to as solvers—can make proposals to borrowers on Votre using two distinct mechanisms: **Synchronous** and **Asynchronous**.

Each method has its own flow, trade-offs, and ideal use cases.

---

## 🕒 Synchronous Proposals

In the synchronous model, Suppliers and Providers respond directly to specific borrower requests in real time.

### How It Works

- Open loan requests from users appear in the **Offer Requests** tab for Suppliers and Providers.

![Suppliers Offer Request Page](/static/images/supplier-offer-request.png)

- Upon viewing a request, solvers can send a proposal tailored to the user's ask:
  - **Suppliers** submit an **Escrow Proposal**, specifying:
    - Interest APR
    - Late Fee APR
    - Grace Period (1–30 days)
  - **Providers** submit a **Callstrike Proposal**, specifying:
    - Cap (maximum loss)
- Once submitted, the proposal will move from the **Open Requests** section to the **Proposed Requests** section and will be sent to the user, who can either accept or ignore it.
- The app let's Suppliers and Providers know if their proposal is the top offer or not, and will give them the option to update the proposal and provide the user better terms to win the bid for the loan.

![Suppliers Offer Request Page](/static/images/proposed-request.png)

- If the user accepts the proposal, the proposal will move from the **Proposed Requests** to the **Accepted Requests** section.
- Once in this section, the Supplier or Provider whose offer was accepted by the user will execute the offer onchain by clicking the **Execute** button which will prompt an onchain signature.

![Suppliers Offer Request Page](/static/images/execute-request.png)

- Once both the Supplier and Provider execute the request, the loan will commence. 

### ✅ Pros

- Enables more **customized proposals** tailored to each user's loan request.
- Creates **competitive dynamics** between Suppliers and Providers, which may lead to better terms for the user.

### ❌ Cons

- Users must **wait** for proposals before moving forward in the loan process.
- This delay increases the chances of user drop-off before a proposal is received, which can result in **fewer loans being completed**.

---

## ⚡ Asynchronous Proposals

In the asynchronous model, Suppliers and Providers offer terms for theoretical loans in advance—before a user makes a specific request.

### How It Works

- Solvers see a list of **hypothetical loan configurations**, grouped by duration and other factors.
- For each loan type, they can specify the terms they are willing to offer.
- These proposals are made **ahead of time** and remain active until accepted or depleted.
- When a user matches with a pre-submitted proposal, it is applied instantly.
- As proposals get accepted and filled, the associated capital allocation decreases, prompting solvers to **"top off"** to maintain availability.

### ✅ Pros

- **Faster loan creation**: Users often see immediate proposals that match their request.
- Higher conversion rates due to **reduced wait times**.

### ❌ Cons

- Users may not get the **best possible terms**, since offers are not tailored to their specific request.
- Less room for **customization**, since the proposal terms are fixed ahead of time.

---

## Summary

| Feature               | Synchronous                              | Asynchronous                             |
|----------------------|------------------------------------------|------------------------------------------|
| Customization        | High                                      | Medium                                    |
| Speed                | Slower (wait for proposal)               | Fast (instant match)                     |
| Competition          | Encourages competitive offers             | Less direct competition                  |
| Risk of User Dropoff | Higher                                     | Lower                                     |
| Best Use Case        | For large or unique loans needing review  | For typical loans needing quick access   |

---

> Both methods are active on Votre, and solvers are encouraged to participate in both to optimize reach and performance across all user types.
