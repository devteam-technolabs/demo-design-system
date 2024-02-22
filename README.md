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

## Contributing

Feel free to contribute to this project. Create issues for bugs or feature requests, and submit pull requests to improve the code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
