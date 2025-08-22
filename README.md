# Eatsy - Delicious Food Delivered to Your Doorstep

**Eatsy** is a modern, feature-rich food delivery platform built with Next.js, React, and Tailwind CSS. It provides a seamless and enjoyable experience for users to discover local restaurants, browse menus, and order their favorite meals online.

## ✨ Features

- **Restaurant Discovery**: Browse a comprehensive list of restaurants.
- **Advanced Filtering**: Filter restaurants by cuisine, rating, delivery time, price range, and dietary options (veg/non-veg).
- **Dynamic Search**: Search for specific restaurants or food items.
- **Detailed Menus**: View detailed menus for each restaurant with item descriptions and prices.
- **Special Offers & Combos**: Discover special deals and popular food combinations on the homepage.
- **Shopping Cart**: Add and manage items in a persistent shopping cart.
- **Seamless Checkout**: A clean and user-friendly checkout process.
- **Responsive Design**: Fully responsive layout that works on all devices, from mobile phones to desktops.
- **Modern UI**: Aesthetically pleasing and functional UI built with ShadCN components.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit) (for future AI-powered features)

## 🏎️ Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en) (version 18 or higher) and npm installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd eatsy-app
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 📂 Project Structure

Here is a high-level overview of the project's folder structure:

```
.
├── src
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Reusable UI components
│   │   └── ui/             # ShadCN UI components
│   ├── contexts/           # React context providers (e.g., CartContext)
│   ├── hooks/              # Custom React hooks (e.g., use-toast)
│   ├── lib/                # Core logic, data, types, and utilities
│   └── ai/                 # Genkit flows for AI functionality
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

- **`src/app`**: Contains all the routes and pages of the application. Each folder represents a URL segment.
- **`src/components`**: Home to reusable components like `Header`, `Footer`, `MenuItemCard`, etc.
- **`src/lib`**: Includes the application's mock data (`data.ts`), TypeScript types (`types.ts`), and shared utility functions (`utils.ts`).
- **`src/contexts`**: Manages global state. The `CartProvider` is a key part of the app's functionality.
