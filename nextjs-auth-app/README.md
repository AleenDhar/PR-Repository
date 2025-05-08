# Next.js App with TypeScript, Tailwind CSS, and Authentication

This is a modern web application built with Next.js, TypeScript, Tailwind CSS, and NextAuth.js for authentication.

## Features

- **Next.js 14**: Using the App Router for improved routing and layouts
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For responsive and utility-first styling
- **NextAuth.js**: For authentication with credentials provider
- **Protected Routes**: Using middleware to protect routes that require authentication
- **Responsive Design**: Mobile-friendly UI with a responsive navbar

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs-auth-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Authentication

This application uses NextAuth.js with a credentials provider for authentication. For demo purposes, you can sign in with:

- Email: `user@example.com`
- Password: `password`

In a production environment, you would want to:
- Connect to a real database for user storage
- Use more secure authentication methods (OAuth, etc.)
- Implement proper password hashing and security measures

## Project Structure

```
nextjs-auth-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts    # NextAuth.js API route
│   │   ├── auth/
│   │   │   └── signin/
│   │   │       └── page.tsx        # Sign-in page
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Protected dashboard page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Home page
│   │   └── providers.tsx           # Auth providers wrapper
│   ├── components/
│   │   └── Navbar.tsx              # Navigation component
│   └── middleware.ts               # Route protection middleware
├── public/                         # Static assets
├── .eslintrc.json                  # ESLint configuration
├── next.config.js                  # Next.js configuration
├── package.json                    # Project dependencies
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## Customization

### Adding More Authentication Providers

You can add more authentication providers (Google, GitHub, etc.) by updating the `authOptions` in `src/app/api/auth/[...nextauth]/route.ts`.

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.ts` file
- Adding custom styles in `src/app/globals.css`
- Creating new components with Tailwind classes

## Deployment

This application can be deployed to various platforms:

- [Vercel](https://vercel.com/) (recommended for Next.js apps)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform that supports Node.js applications

## License

This project is open source and available under the [MIT License](LICENSE).

