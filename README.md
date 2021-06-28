# WedriverIo setup to run an automated api test.

My first attempt at using webdriverio. I utilized WebdriverIO, Supertest, Mocha, Chromedriver & Chai to build the automation.

---

## How to Setup and Operate

1. Clone the repository or download zip file to you computer.

```
    git clone https://github.com/dionisggr/saucedemo.git
```

2. In your terminal install node dependencies:

```
    npm install
```

3. If there are npm discrepancies run audit and enter:

```
    npm audit fix
```

4. To run the UI automation test enter:

```
    npx wdio wdio.conf.js or npx wdio
```

5. To run the API automation test enter:

```
    npm run test
```

### Automation

- API Automation
  - Make GET, POST, PUT, and DELETE calls
  - Set headers for a request
  - Set the body for a request
  - Assert the response from a request
  - Use the response from one call in the request for another
- UI Automation
  - Log into the site with credentials

## Stretch Goals

I was unable to completed the UI Automation in the alloted time. I will continue to work towards completing this task.
I want to integrate and utilize Cumcumber.js and Docker.

### Automation

- API Automation
  - Make GET, POST, PUT, and DELETE calls
  - Set headers for a request
  - Set the body for a request
  - Assert the response from a request
  - Use the response from one call in the request for another
- UI Automation
  - Log into the site with credentials

Sort the items (Lowest Price sort)
Add two or more items to the shopping cart
Visit the shopping cart
Assert that the items that you added are in the cart
Remove an item and then continue shopping
Add another item
Checkout
Assert you are purchasing the correct items
Assert the total price
Finish checkout
