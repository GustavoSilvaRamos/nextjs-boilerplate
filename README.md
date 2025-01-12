## Installation

I recommend you to use the package manager yarn, but you may also use npm.

```sh
yarn
# or
npm install
```

<br />

# Architecture Patterns

OBS: For more information about an specific pattern, checkout the branch and read its README file.
<br />
<br />

## Directory Schema

This project uses the following directory schema inside the src folder, other files outside the src folder are the default Next.js files.

- components
  - Layout
  - Screens
  - UI
- constants
- context
- css
- hooks
- lib
- mock
- pages
- services
- typings


## State Flow

This branch uses the React Context for managing the state of the application.

To add a new context to your application, create one following the path style of the code and export the ContextProvider and the useContext inside your context index. You can also create your test files inside the context path.

- context
  - ContextName
    - contextname.spec.tsx <-- tests here
    - index.tsx <-- add here
  - index.tsx <-- export here

<br />
<br />


## Package Commands

Below are described all commands available in the package.json file.

```sh
yarn dev # Starts the applcation in the developer mode.
yarn build # Creates a build pack and exports as a static version
yarn commit # Module commitzen for commits
yarn start # Starts the application with builded version.
yarn lint # Applies all lint rules defined in prettier and eslint.
yarn test # Runs all spec.tsx and spec.ts test files.
yarn test-errors # Runs all spec.tsx and spec.ts test files showing logs.
yarn test:coverage # Runs the coverage of the tests through the application.
```

<br />
<br />

## Default Port

This project uses the default PORT 3000

```sh
127.0.0.1:3000
# or
http://localhost:3000
```

<br />
<br />

## Copyright

MIT License, Free Software - Boiderplate.

Made by Gustavo Silva 
