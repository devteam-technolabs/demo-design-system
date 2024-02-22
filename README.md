# Design-system with Vite,Typescript, React, Ladle, and Playwright

## Overview

This repository contains a component library built with Vite, React, Ladle for stories, and Playwright for unit testing. It provides a structured and efficient setup for developing, documenting, and testing React components.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash

   https://github.com/devteaminvo/design-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd design-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server, run:

```bash
npm run dev
```

This will launch the development server and you can view your components in the browser.


### Unit Testing

Playwright is used for unit testing. Run the following command to execute the tests:

```bash
npm run test
```
This will run Playwright tests and provide feedback on the status of your components.

### Building

To build your component library for production, use:

```bash
npm run build
```

This will generate a `dist` folder with the compiled code.

## Project Structure

The project is structured as follows:

- `src/`: Contains your React components.
- `src/tests/`: Holds Playwright test files.
- `src/stories/`: Configurations and stories for ladle.
- `dist/`: Output directory for production build.
- `public/`: Static assets.

### Install from the command line:

To install the component library from the command line, you can use npm:

```bash
npm install @devteaminvo/design-system@1.0.0
```

Replace `@devteaminvo/design-system` with the appropriate package name and version.

Learn more about npm packages [here](https://docs.npmjs.com/about-packages-and-modules).

### Install via package.json:

You can also add the component library as a dependency in your `package.json` file:

```json
{
  "dependencies": {
    "@devteaminvo/design-system": "1.0.0"
  }
}
```

Replace `@devteaminvo/design-system` with the appropriate package name and version.

## Usage

Once you have installed the library, you can start using its components in your project.

1. Import the components you need into your project's codebase. For example:

   ```javascript
   import { Button, Card } from '@devteaminvo/design-system';
   ```

   Replace `'@devteaminvo/design-system'` with the appropriate path or package name based on your project's setup.

2. Use the imported components in your project's code:

   ```javascript
   <Button onClick={handleClick}>Click Me</Button>
   ```

   This example assumes that `Button` is a component provided by the library, and `handleClick` is a function defined in your project.

3. Customize the components as needed to fit with the overall look and feel of your project. You may need to apply additional styling or configurations depending on your requirements.
## Contributing

Feel free to contribute to this project. Create issues for bugs or feature requests, and submit pull requests to improve the code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
