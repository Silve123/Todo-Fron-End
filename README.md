# Todo App Front-End

This is the front-end for the Todo App, built with React. The app allows users to manage their todos with Firebase for authentication and Firestore for storing todo items.

## Features
- User authentication using Firebase
- CRUD operations for todos
- Responsive design for optimal viewing on different devices

## Prerequisites
Before running the front-end, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- A Firebase project with Firestore enabled

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-app-frontend.git
cd todo-app-frontend
```

### 2. Install dependencies
```bash
npm install
```
### 3. Firebase Setup
Create a Firebase project at Firebase Console.
Enable Firestore in the Firebase console.
Add a web app to your Firebase project and copy the Firebase configuration settings.

### 4. Environment Variables
Create a firebase.js file in the root of your project and add your Firebase configuration settings:

```javascript
{
  REACT_APP_FIREBASE_API_KEY=your-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-app-id
}
```

### 5. Run the Front-End
```bash
npm start
```
The app should now be running on http://localhost:3000.

Technologies Used
React
Firebase
Firestore
CSS
Contributing
Feel free to submit a pull request or open an issue if you have suggestions or find bugs.

