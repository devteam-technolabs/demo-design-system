Certainly! Let's integrate the Typedoc Usage section into the main README:

# Design-system with Vite, Typescript, React, Ladle, and Playwright

## Overview

This repository contains a comprehensive component library built with Vite, React, and Ladle for stories, and Playwright for unit testing. It provides a structured and efficient setup for developing, documenting, and testing React components.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devteaminvo/design-system.git
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

This will launch the development server, and you can view your components in the browser.

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
- `src/stories/`: Configurations and stories for Ladle.
- `src/stories/componentName/`: Folder for each component's Ladle stories.
  - `button.stories.mdx`: Markdown file for component documentation and Ladle stories.
  - `button.stories.tsx`: Ladle stories configuration file.
- `src/stories/componentName/PropsTable.tsx`: Component to generate props table for documentation.
- `type-schema/component/type.json`: JSON file generated by Typedoc for PropsTable.
- `typedoc.json`: Configuration file for Typedoc.
- `docgen.js`: Script for Typedoc JSON generation.

- `dist/`: Output directory for production build.
- `public/`: Static assets.

## Typedoc Usage

Typedoc is used to generate the `type.json` file, which is utilized by Ladle for creating the PropsTable in your component documentation. Follow these steps for Typedoc usage:

1. **Installation:**
   - Ensure Typedoc is installed as a development dependency:

     ```bash
     npm install --save-dev typedoc
     ```

2. **Configuration:**
   - Create a file named `typedoc.json` in the root of your project with the following content:

     ```json
     {
       "entryPoints": ["src/component/type.ts"], // Update with the path to your component's type file
       "out": "type-schema/component",
       "json": "type-schema/component/type.json"
     }
     ```

     Adjust the `"entryPoints"` property to point to the TypeScript file containing your component's types.

3. **Generate Type JSON:**
   - Create a file named `docgen.js` in the root of your project with the following content:

     ```javascript
     const typedoc = require('typedoc');

     const app = new typedoc.Application();
     const options = {
       entryPoints: ['src/component/type.ts'], // Update with the path to your component's type file
       json: `type-schema/component/type.json`,
     };

     const project = app.convert(app.expandInputFiles(options.entryPoints));
     if (project) {
       app.generateJson(project, options.json);
     }
     ```

   - Add the following npm script in your `package.json` file:

     ```json
     {
       "scripts": {
         "generate:schemas": "typedoc --config typedoc.json",
         "generate:type-json": "node docgen.js",
         "dev": "npm run generate:schemas && npx ladle serve && vite"
       }
     }
     ```

   - Run the following command to execute Typedoc and generate the `type.json` file:

     ```bash
     npm run generate:type-json
     ```

     Alternatively, you can run `npm run generate:schemas` to automatically generate the `type.json` file during the build process.

     **Note:** If you want to generate it manually, you can run:

     ```bash
     node docgen.js
     ```

Now, you can easily run `npm run generate:type-json` to generate the `type.json` file using Typedoc manually or include it as part of your build process. This file is then utilized by Ladle during the story generation process for creating the PropsTable in your component documentation.

## Ladle Story Generation

With the Typedoc setup in place, follow these steps for Ladle story generation, as mentioned in the previous section:

1. **Component Folder Creation:**
   - Inside the `src/stories` directory, create a dedicated folder for each component. For example, you can create `src/stories/button` for a Button component.

2. **Files within Component Folder:**
   - Inside the component folder, create two essential files:
      - `button.stories.mdx`: A Markdown file where you document your component and define Ladle stories.
      - `button.stories.tsx`: A Ladle stories configuration file.

3. **PropsTable Creation:**
   - In the component folder, create a `PropsTable.tsx` file. This file is responsible for generating the props table for documentation.

4. **Ladle Build:**
   - Run the following command to execute Ladle build:

     ```bash
     npx ladle build
     ```

     This command will process your Ladle stories and generate the necessary artifacts.

5. **Ladle Preview:**
   - To preview your Ladle stories, use the following command:

     ```bash
     npx ladle preview
     ```

     This command will launch a local server for previewing your Ladle stories. Visit the provided URL in your browser to view the documentation and stories.

By following these steps, you can efficiently generate and preview Ladle stories for your React components, including the automatic generation of the `type.json` file using Typedoc for the PropsTable. This ensures comprehensive documentation and visualization of component usage.

Certainly! Let's add an example for a Button component to illustrate the usage of Typedoc and Ladle:

## Typedoc and Ladle Usage Example

Let's walk through an example using a `Button` component to demonstrate the usage of Typedoc and Ladle.

1. **Component Types:**
   - Assume you have a `Button` component with TypeScript types defined in `src/component/button.ts`:

     ```typescript
     // src/component/button.ts
     export interface ButtonProps {
       label: string;
       onClick: () => void;
     }

     export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
       <button onClick={onClick}>{label}</button>
     );
     ```

2. **Typedoc Configuration:**
   - Create a file named `typedoc.json` in the root of your project:

     ```json
     {
       "entryPoints": ["src/component/button.ts"],
       "out": "type-schema/component",
       "json": "type-schema/component/button.json"
     }
     ```

3. **Typedoc and Ladle Scripts:**
   - Create a file named `docgen.js` in the root of your project:

     ```javascript
     const typedoc = require('typedoc');

     const app = new typedoc.Application();
     const options = {
       entryPoints: ['src/component/button.ts'],
       json: `type-schema/component/button.json`,
     };

     const project = app.convert(app.expandInputFiles(options.entryPoints));
     if (project) {
       app.generateJson(project, options.json);
     }
     ```

   - Update the `scripts` section in your `package.json` file:

     ```json
     {
       "scripts": {
         "generate:schemas": "typedoc --config typedoc.json",
         "generate:type-json": "node docgen.js",
         "dev": "npm run generate:schemas && npx ladle serve && vite"
       }
     }
     ```

   - Run the following command to execute Typedoc and generate the `button.json` file:

     ```bash
     npm run generate:type-json
     ```

4. **Ladle Stories Configuration:**
   - Inside the `src/stories/button` directory, create `button.stories.mdx`:

     ```markdown
     import { Meta } from 'ladle/macro';

     <Meta title="Button" />

     # Button

     A simple button component.

     ## Props

     <PropsTable component="button" />
     ```

   - Create `button.stories.tsx`:

     ```tsx
     import React from 'react';
     import { storiesOf } from '@storybook/react';
     import { Button } from '@devteaminvo/design-system';
     import { Meta } from 'ladle/macro';

     export default {
       component: Button,
       title: 'Button',
     } as Meta;

     const Template: React.FC = () => <Button label="Click me" onClick={() => console.log('Clicked')} />;

     storiesOf('Button', module).add('Basic', Template);
     ```

5. **Ladle Build and Preview:**
   - Run the following command to execute Ladle build:

     ```bash
     npx ladle build
     ```

   - Run the following command to preview your Ladle stories:

     ```bash
     npx ladle preview
     ```

   This command will launch a local server for previewing your Ladle stories. Visit the provided URL in your browser to view the documentation and stories.

By following these steps, you've successfully used Typedoc to generate the `button.json` file and integrated it with Ladle for documenting and previewing a `Button` component. Adjust the paths and configurations based on your project's structure and requirements.

Certainly! Let's add the information about using the `Button` component in the README under the "Usage" section:

### Install from the command line:

To install the component library from the command line, you can use npm:

```bash
npm install git://github.com/devteaminvo/design-system.git#1.0.0
```

Replace `@devteaminvo/design-system` with the appropriate package name and version.

### Install via package.json:

You can also add the component library as a dependency in your `package.json` file:

```json
{
  "dependencies": {
    "@devteaminvo/design-system": "git://github.com/devteaminvo/design-system.git#1.0.0"
  }
}
```

Replace `@devteaminvo/design-system` with the appropriate package name and version.

Certainly! Let's add that information to the Typedoc Usage section:

## Usage

Once you have installed the library, you can start using its components in your project.

1. **Import the components you need into your project's codebase. For example:**

   ```javascript
   import { Button } from '@devteaminvo/design-system';
   ```

   Replace `'@devteaminvo/design-system'` with the appropriate path or package name based on your project's setup.

2. **Use the imported `Button` component in your project's code:**

   ```javascript
   import React from 'react';

   const MyComponent = () => {
     const handleClick = () => {
       // Handle button click
     };

     return (
       <div>
         <Button onClick={handleClick}>Click Me</Button>
       </div>
     );
   };

   export default MyComponent;
   ```

   This example assumes that `Button` is a component provided by the library, and `handleClick` is a function defined in your project. Customize the component as needed to fit with the overall look and feel of your project. You may need to apply additional styling or configurations depending on your requirements.

Feel free to adjust the example based on the specific use case and structure of your project.

## Contributing

Feel free to contribute to this project. Create issues for bugs or feature requests, and submit pull requests to improve the code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.