## Exist Assertion Issue
This repo was made to show a simple example of an issue in which we need to test that an element does not exist on a page.

In `index.html`, there are dropdown options that are not visible in the DOM until you hover over the trigger. Once you click
an option, the dropdown options disappear. If you look at `existence.spec.js`, we are testing that once they disappear, an option does not exist.
Running the assertion `.should('not.exist')` does not seem to prove consistent results or work they way we want it to.

# Instructions
1. Clone repo
2. Run `npm install`
3. Run `node app.js`
4. Open second terminal window. Run `npm run cy:open`
5. Once the Test Runner opens, select `existence.spec.js`
