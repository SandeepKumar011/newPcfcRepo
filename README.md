## Playwright JS Accelerator with BDD

<br />

## Key Points of this Solution:


> - ### Page Object Model(POM) support
> - ### Behaviour Driven Development(BDD) support for writing test cases
>- ###  Integration with Cucumberio(formely Hiptest)
>- ###   HTML Reports
>- ### Implementation of common utilities for data parser and date parser
>- ### Cross Browser testing support
>- ### Command line parameter support
>- ### Parallel Execution support
 
<br />

## Getting started

### Prerequisite:
1. NodeJs should be installed on a machine.
2. If we want to use Hiptest Phublisher
  * Install ruby 2.6.6-1(X64) from https://rubyinstaller.org/downloads/
  * install dependency(MSYs2), if not installed during RUBY installation, run below command:
    - ridk install
  * install nokogiri
    -  gem install nokogiri
  * install hiptest-publisher
    - gem install hiptest-publisher

### To execute the automation suite:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run getFeatureFiles --test-run-id=<runID>` to pull the feature files from HipTest/CucumberStudio (Replace <runID> with run id)
- `npm run test -- --project=chromium --headed` (to run suite using command line, here headed implies that we need to run test cases in Headed mode, and we can pass different projects present in playwright.config.js to run test cases on different browsers)
- `npx playwright show-report` to open BDD HTML report
- `npm run test -- --project=chromium --headed features/fakePricingPage.feature` (to execute specific tests use this command)

### Test data passing to test cases:

- Test data to the test cases is passed using .json and csv files and they are present under the test_data folder
- Baseurl/url in the current solution is passed using the playwright.config.js file
- Feature files are present under features folder.
- Step definition files are present under support\step_definitions folder.

### Folder Structure:
- features: Stores all the Feature files in it
- support: Uses to write all reusable methods. Here we can add page objects and step definitions
- utils: Stores Data constants and reusable utilities for example to read test data and parse it.
- playwright.config.js: Uses to overwrite all default playwirght configuration
- package.json: uses to add any dependency which are required

### Playwright Overview
- Playwright is a JS based UI automation tool which allows user to automate application effectively and easily.
- Playwright is very fast as compared to other tools and allows us to execute it on multiple browsers in parallel
- Can be integrated with different types of reporting tools.
- Playwright also have capability to capture screenshot and videos automatically.