# Login Authentication - Next.js Application

## Overview

This is a simple login form implementation built using Next.js, React, Zod, and React Hook Form. The form includes client-side validation powered by Zod schema, and form state management provided by React Hook Form. The form connects to a backend login endpoint using the `Login` function and redirects to the dashboard upon successful authentication.

## Features

- **React Hook Form**: Handles form state management and input registration.
- **Zod Schema Validation**: Client-side validation using Zod, with error handling for form inputs.
- **MUI (Material-UI)**: Utilizes MUI components such as `TextField`, `Button`, and `Box` for a sleek user interface.
- **Server-Side Authentication Check**: Redirects authenticated users to the dashboard page.
- **Loading State**: Displays a loading indicator when the form is submitted.

## Technologies Used

- **Next.js 14**: For server-side rendering, routing, and client-side rendering.
- **React**: For building the user interface.
- **React Hook Form**: For form state management.
- **Zod**: For form validation.
- **Material-UI (MUI)**: For UI components and layout.
- **TypeScript**: For type-safe development.

## Folder Structure
/app
/(auth)
/_components
login-form.tsx          # Login form component
/_styles
styles.ts               # Styles for the login page and form
/_test
login-form.test.jsx      # Unit tests for login form component
/_utils
schema.ts               # Zod schema for login form validation
layout.tsx                # Layout component
page.tsx                  # Login page
server.ts                 # Login server-side function