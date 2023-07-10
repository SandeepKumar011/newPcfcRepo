const { publish, defineConfig } = require('test-results-reporter');

var myArgs = process.argv

const config = defineConfig({
  "reports": [
    {
        "targets": [
            {
              "name": "teams",
              "condition": "always",
              "inputs": {
                "url": "<Teams incoming webhook url>",
                "publish": "failure-details",
                "title": `Playwright Test Results for ${myArgs[2]}`
              },
              "extensions": [
                {
                  "name": "mentions",
                  "condition": "always",
                  "inputs": {
                    "users": [
                      {
                        "name": "<User Name>",
                        "teams_upn": "<user email id>"
                      },
                    ]
                  }   
                },           
              ]
            }
          ],
          "results": [
            {
              "type": "junit",
              "files": [
                "junit-reports/results.xml"
              ]
            }
          ]
    }
  ]
});

publish({ config });
