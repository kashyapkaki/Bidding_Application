# Bidding Application

### Backend (`backend/`)

-   **`config/`**: Contains configuration files such as `db.js` for setting up the database connection.
-   **`controllers/`**: Implements business logic for different aspects of the application:
    -   `auctionController.js`: Handles auction-related operations.
    -   `bidController.js`: Manages bid-related logic.
    -   `userController.js`: Manages user-related logic.
-   **`middleware/`**: Includes middleware functions like `authMiddleware.js` for authentication and authorization.
-   **`models/`**: Defines data models using Mongoose:
    -   `AuctionItem.js`: Schema for auction items.
    -   `Bid.js`: Schema for bids.
    -   `User.js`: Schema for users.
-   **`routes/`**: Defines API routes:
    -   `auctionRoutes.js`: Routes for auction-related API endpoints.
    -   `bidRoutes.js`: Routes for bid-related API endpoints.
    -   `userRoutes.js`: Routes for user-related API endpoints.
-   **`server.js`**: Entry point for starting the backend server and connecting to the database.

### Frontend (`frontend/`)

-   **`src/`**: Source code for the React application:
    -   **`components/`**: Contains React components for various parts of the UI.
        -   `AuctionItem.jsx`: Displays auction items.
        -   `BidForm.jsx`: Form for placing bids.
        -   `Home.jsx`: Home page component.
        -   `NavBar.jsx`: Navigation bar component.
        -   `Signup.jsx`: User registration component.
    -   **`contexts/`**: Contains context providers like `AuthContext.jsx` for managing user authentication state.
    -   **`App.jsx`**: Main component that sets up routing and the overall layout of the application.
    -   **`index.jsx`**: Entry point that renders `App.jsx`.
    -   **`main.jsx`**: Initializes the React application.
-   **`tailwind.config.js`**: Configuration file for Tailwind CSS styling.
-   **`vite.config.js`**: Configuration file for Vite, used for frontend build and development.
-   **`index.html`**: Main HTML file that serves as the entry point for the frontend application.

### Installation

#### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
        ```plaintext
        PORT=5000
        MONGODB_URI=your_mongo_uri
        JWT_SECRET=your_jwt_secret
        ORIGIN=http://localhost:5173 or url of frontend
        ```

#### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `frontend` directory with the following content:
        ```plaintext
        TARGET=http://localhost:5000 or url of backend
        ```

## Running the Project

### Backend

1. Start the backend server:

    ```bash
    npm run dev
    ```

    The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend

1. Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will run on [http://localhost:5173](http://localhost:5173).
