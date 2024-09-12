# Secure Vault - Frontend

This is the frontend for **Secure Vault**, a password manager app built using **React.js**. The frontend provides an intuitive UI for users to save, view, and manage their passwords, as well as generate strong passwords and check password strength.

## Features

- **Save Passwords**: Users can save their passwords with associated URLs and usernames.
- **View Vault**: View all saved passwords in the vault section.
- **Password Generator**: Generate strong random passwords.
- **Password Strength Checker**: Check the strength of passwords.
- **Responsive Design**: The app is fully responsive for mobile, tablet, and desktop views.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making API requests to the backend.
- **React Router**: For navigation between different sections (e.g., vault, features).
  
## Installation

To run this frontend locally, follow these steps:

1. Clone the repository:
   ```
   bash git clone https://github.com/prems51/secure-vault-frontend.git
   cd secure-vault-frontend
   ```
2. Install the dependencies:
    - ``npm install``
3. Start the development server:
- ``npm run dev``

# API Integration

This frontend interacts with a Node.js backend via RESTful APIs:

- **GET /vault**: Fetches all saved passwords.
- **POST /manager**: Saves a new password with URL and username.

# Responsive Design
The app is built with Tailwind CSS to ensure a fully responsive experience across mobile, tablet, and desktop devices. It adjusts to various screen sizes and provides an optimal user experience.

# Dependencies
The frontend uses the following npm packages:

- **React.js**: For building the UI.
- **Tailwind CSS**: For styling the components.
- **Fetch**: For making HTTP requests to the backend API.
- **React Router**: For navigating between different pages.

# Folder Structure
- **src/:** Contains all the components, pages, and utilities for the frontend.

# License
This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

