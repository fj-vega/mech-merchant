# Mech Merchant
## A mechanical keyboards store front end
#### [See demo](https://mech-merchant.netlify.com/)

---

This project was built using a [Coding Adict tutorial](https://www.youtube.com/watch?v=wPQ1-33teR4) as a base, credits for the original idea.
The code has been cleaned, styling as changed a bit and both website's contents and functionallity have been expanded to resemble an actual online store.

#### App features
- State management using **Context API** with a single source of truth
- Navigation using **react-router-dom**
- Implementation of **Bootstrap** styling and functionallity
- Reusable components aesthetics thanks to **styled-components**
- Fully responsive website

### Store features
- Sort keyboards according to their price (ascending or descending)
- Filter keyboards according to form factor and switches
- Search bar that displays results in real time
- PayPal checkout using react-paypal-express-checkout
- JavaScript file that mimics a database using an array

#### Known bugs
- PayPal checkout buttons takes a couple of seconds to work, browser console displays the following alert: *'Use of Mutation Events is deprecated. Use MutationObserver instead'*.