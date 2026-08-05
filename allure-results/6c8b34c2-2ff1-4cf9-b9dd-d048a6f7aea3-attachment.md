# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/features/login.feature.spec.js >> Login Functionality >> Access app with invalid URL
- Location: .features-gen/tests/features/login.feature.spec.js:12:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "response"
============================================================
```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Server Not Found" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: invalid-lms-url.com
      - text: .
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: Check to make sure you’ve typed the website address correctly and try again in a few moments.
        - listitem [ref=e14]: Check your network connection.
        - listitem [ref=e15]: Check that Nightly has permission to access the web (you might be connected but behind a firewall).
    - paragraph [ref=e16]:
      - link "Learn more…" [ref=e17] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/153.0/Darwin/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e20]
```

# Test source

```ts
  1  | export default class loginPage {
  2  | 
  3  |   constructor(page, env) {
  4  |     this.page = page;
  5  |     this.env = env;
  6  | 
  7  |     this.logo = 'img[alt="lms-logo"]';
  8  |     this.companyName = '#companyName';
  9  |     this.userField = '#username';
  10 |     this.passwordField = '#password';
  11 |     this.roleDropdown = '#role';
  12 |   }
  13 | 
  14 |   async openValidUrl() {
  15 |     await this.page.goto(this.env.validUrl);
  16 |   }
  17 | 
  18 |   async openInvalidUrl() {
  19 |     await this.page.goto(this.env.invalidUrl).catch(() => {});
  20 |   }
  21 | 
  22 |   async getResponseStatus() {
> 23 |     const response = await this.page.waitForEvent('response');
     |                                      ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  24 |     return response.status();
  25 |   }
  26 | }
  27 | 
```