# QuickWash Laundry Service

A modern web application for laundry service management, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- User authentication (sign up, sign in)
- Order management
- Address management
- Service selection
- Payment processing
- Order tracking
- Notifications

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- React
- Heroicons

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd laundry-app-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your values:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `NEXTAUTH_SECRET`: A random string for session encryption
     - `NEXTAUTH_URL`: Your application URL (http://localhost:3000 for development)

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application can be easily deployed to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Project Structure

```
src/
├── app/                    # App router pages and layouts
│   ├── api/               # API routes
│   ├── (auth)/           # Authentication pages
│   ├── (dashboard)/      # Protected dashboard pages
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── middleware.ts         # Route protection middleware
└── types/                # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
