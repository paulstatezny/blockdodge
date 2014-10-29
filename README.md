# Front End Template with React

### Initializing the Development Environment
1. `npm install` to add dependencies
1. `gulp watch` to build the app and launch a server on `localhost:9000`

### Customizing for your project
1. Clone or copy this repository into a new directory
1. Run the initialization script `chmod +x initialize.sh; ./initialize.sh`. It will ask for:
    1. Repository SSH clone URL
    1. Development API Host
    1. Production API Host - if unknown give best guess
    1. QA App Name
    1. QA Host
    - If you want to start without a remote repo initialize with `./initialize.sh -t`
1. Update `package.json`
    1. Update `author`, `name`, `version`, `description`, and `repository url` with proper values
    1. Run `npm outdated --depth=0` to see if there are new versions of dependencies. If so, consider updating them in the frontend template as well as the project
1. Update `application/index.html` to replace `@todo` with proper values
1. Replace or remove the MIT license (and related reference in the `package.json`) based on your project's requirements


### Running Tests
1. Run Jest tests with `npm test`
1. Run React with Karma in Chrome and Firefox with `npm run karma`
1. Run React tests with gulp at `localhost:9001` with `gulp test`
    - Run a specific test or glob of tests with `gulp test --path './__react-tests__/path/to/test/*/**.js'`
1. Run React from the command line with `./node_modules/karma/bin/karma start --single-run --browsers PhantomJS`
1. Run functional tests with `gulp build --env ci && gulp disyntegration`
