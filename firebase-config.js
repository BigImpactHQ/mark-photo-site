// Paste your Firebase web app config here.
// Firebase console → Project settings → General → Your apps → Web app → SDK setup and configuration.
// These values are meant to be public; your Storage rules are what keep the photo private.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Path of Mark's photo inside Firebase Storage.
export const PHOTO_PATH = "private/mark.jpg";
