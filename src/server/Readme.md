# Authentication Module

This module handles user authentication, including login, logout, and session management using cookies in a Next.js application.

## File Structure

1. **auth.ts** - Contains functions for logging in and out, getting the session, and updating session cookies.
2. **session.ts** - Manages session creation and removal, along with redirection after session changes.
3. **login.ts** - Facilitates the login process and redirects users accordingly.

---

## Functions

### 1. `login(formData: LoginFormInputs)`

- **Purpose**: Authenticates the user with the provided credentials and sets a session cookie.
- **Parameters**: 
  - `formData`: An object containing `username` and `password` fields.
- **Returns**: 
  - `true` if login is successful and the session cookie is set.
  - `false` if login fails or credentials are invalid.
- **Usage**: Call this function when a user submits the login form.

---

### 2. `logout()`

- **Purpose**: Clears the session cookie to log the user out.
- **Returns**: No return value.
- **Usage**: Call this function when a user initiates a logout action.

---

### 3. `getSession()`

- **Purpose**: Retrieves the session data from the cookies.
- **Returns**: 
  - The session object if it exists.
  - `null` if there is no session cookie.
- **Usage**: Use this function to check if a user is logged in and to retrieve their session data.

---

### 4. `checkTokenExpiration(token: string): boolean`

- **Purpose**: Checks if the provided JWT token has expired.
- **Parameters**: 
  - `token`: A JWT string.
- **Returns**: 
  - `true` if the token is expired.
  - `false` otherwise.
- **Usage**: Call this function before making authenticated requests to ensure the token is still valid.

---

### 5. `updateSession(request: NextRequest)`

- **Purpose**: Refreshes the session cookie before it expires, checking if the current token is still valid.
- **Parameters**: 
  - `request`: The incoming request object.
- **Returns**: 
  - `NextResponse` with the updated session cookie or the next response if no session is found.
- **Usage**: Call this function on every request to ensure the user's session is valid and refreshed.

---

### 6. `createSession(uid: string)`

- **Purpose**: Creates a new session cookie for the user and redirects them to the home route.
- **Parameters**: 
  - `uid`: User identifier string to store in the session cookie.
- **Returns**: No return value.
- **Usage**: Call this function when a new session is initiated.

---

### 7. `removeSession()`

- **Purpose**: Deletes the session cookie and redirects the user to the root route.
- **Returns**: No return value.
- **Usage**: Call this function when a session needs to be cleared.

---

### 8. `Login(formData: LoginFormInputs)`

- **Purpose**: Facilitates the login process by calling the `login` function and redirects the user to the dashboard on success.
- **Parameters**: 
  - `formData`: An object containing login credentials.
- **Returns**: 
  - `false` if login fails.
- **Usage**: Call this function upon form submission to handle user login.

---

### 9. `Logout()`

- **Purpose**: Logs the user out by calling the `logout` function and redirects them to the homepage.
- **Returns**: No return value.
- **Usage**: Call this function when a user clicks the logout button.

---

## Environment Variables

Make sure to set the following environment variables:

- `SESSION_SECRET`: A secret key for encoding/decoding session tokens.
- `API_URL`: The base URL for the authentication API.
- `NODE_ENV`: The environment setting, either `development` or `production`.
