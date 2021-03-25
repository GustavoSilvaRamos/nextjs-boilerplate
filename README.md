[![N|Solid](https://i.imgur.com/VYaKx4o.png)](https://nodesource.com/products/nsolid)

# Next.js Boiderplate

Welcome to the brand new boiderplate for React's framework Next.js, last updated at 03/25/2021. You can learn more about the architecture design, modules used, and the testing patterns in the description below. Feel free to give me any feedbacks in my personal email or in the issues of this repository.
<br />

## Versions

This boiderplate has many variations for state managment and styling frameworks, you can choose what best suits your project by checking out the different branches and implementations.

| Branch                | State Manager | Style Framework   | Status            |
| --------------------- | ------------- | ----------------- | ----------------- |
| master                | context       | pure css          | ready to use      |
| feat/redux-pure       | redux-toolkit | pure css          | under development |
| feat/redux-sc         | redux-toolkit | styled components | under development |
| feat/redux-tailwind   | redux-toolkit | tailwind          | under development |
| feat/zustand-pure     | zustand       | pure css          | under development |
| feat/zustand-sc       | zustand       | styled components | under development |
| feat/zustand-tailwind | zustand       | tailwind          | under development |
| feat/context-pure     | zustand       | pure css          | under development |
| feat/context-sc       | zustand       | styled components | under development |
| feat/zustand-tailwind | zustand       | tailwind          | under development |

Status for this branches will be updated in the changelog.<br />

## Installation

I recommend you to use the package manager yarn, but you may also use npm.

```sh
yarn
# or
npm install
```

<br />

# Architecture Patterns

OBS: For more information about an specific pattern, checkout the branch and read its README file.<br />

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

As a design pattern for code styling, I use the following schema for the creation of anything inside the primary directory schema.

- context
  - ContextName
    - contextname.spec.tsx <-- tests here
    - index.tsx <-- add here
  - index.tsx <-- export here<br />

## State Flow

This branch uses the React Context for managing the state of the application.

To add a new context to your application, create one following the path style of the code and export the ContextProvider and the useContext inside your context index. You can also create your test files inside the context path.

- context
  - ContextName
    - contextname.spec.tsx <-- tests here
    - index.tsx <-- add here
  - index.tsx <-- export here<br />

## Style System

This branch uses the Raw Pure CSS as the style framework.

This approach is very straight forward and requires only the basic knowledge of HTML, CSS and the React HTML differences. The main file with the basic CSS Rules can be found under the css directory.<br />

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

## Default Port

This project uses the default PORT 3000

```sh
127.0.0.1:3000
# or
http://localhost:3000
```

<br />

## Copyright

MIT License, Free Software - Boiderplate.

Made by Davi Brancol ❤️
