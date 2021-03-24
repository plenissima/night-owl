exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      // windowSize: '1920x1680', // define a custome resolution
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
        }
      },
    }
  },
  include: {
    I: './steps_file.js',
    Page: './page_objects/page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/search_and_view_steps.js'
    ]
  },
  plugins: {
    allure: {
      enabled: true, // generate a report after every suit execution
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './step_definitions/*_steps.js',
  name: 'Estratégia Concursos'
}