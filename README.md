# Subcalc

Subcalc is a minimalist, reactive notepad calculator. It allows users to type mathematical expressions and variables on the left side of the screen and see the evaluated results in real-time on the right side. It combines the freedom of a text editor with the power of a scientific calculator.

## Features

- **Real-time Evaluation:** Calculations are performed instantly as you type.
- **Variable Support:** Define variables (e.g., `x = 10`, `x * 5`) and use them in subsequent lines.
- **Persistence:** Your calculations are automatically saved to the browser's local storage, so you pick up right where you left off.
- **Math.js Integration:** Powered by [mathjs](https://mathjs.org/), supporting a wide range of mathematical functions and expressions.
- **Clean UI:** A simple split-pane interface designed for focus.

## Technologies Used

- **React:** UI library.
- **Vite:** Next Generation Frontend Tooling.
- **Math.js:** An extensive math library for JavaScript and Node.js.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd subcalc
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be generated in the `dist` directory.

## License

See the [LICENSE](LICENSE) file for details.
