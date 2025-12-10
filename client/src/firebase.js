import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Read from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app = null;

try {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn(
      "Firebase configuration is missing. Contact form will be disabled until environment variables are set."
    );
  } else {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully.");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export const db = app ? getFirestore(app) : null;


// Analytics is optional; will not break on localhost
try {
  if (app) {
    getAnalytics(app);
  }
} catch (e) {
  console.log("Analytics not supported in this environment.");
}

export default app;
