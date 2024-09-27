'use client' // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <head>
        <title>Error</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #f5f5f5;
              color: #333;
              text-align: center;
            }
            h2 {
              margin-bottom: 16px;
            }
            button {
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              background-color: #1976d2;
              color: #fff;
              border: none;
              border-radius: 4px;
            }
            button:hover {
              background-color: #1565c0;
            }
          `}
        </style>
      </head>
      <body>
        <h2>Something went wrong!{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
