// ─────────────────────────────────────────────────────────────────────────────
// FIREBASE CONFIG — replace all values below with your Firebase project details
// Get them from: Firebase Console → Project Settings → General → Your apps
// ─────────────────────────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ─────────────────────────────────────────────────────────────────────────────
// FIRST-RUN CHECKLIST (James does this once per festival deployment)
//
// 1. Create a Firebase project at console.firebase.google.com
// 2. Enable Firestore Database (start in production mode)
// 3. Enable Authentication → Sign-in method → Email/Password
// 4. Paste your Firebase config above
// 5. Create the first admin user:
//    a. Firebase Console → Authentication → Add user (email + password)
//    b. Copy the UID shown
//    c. Firestore → Start collection "users" → Document ID = that UID
//       Fields: { role: "admin", displayName: "Admin", email: "your@email.com" }
// 6. Deploy these three files to Netlify (drag & drop the folder)
// 7. Copy the Firestore security rules from the comment in admin.html
//    and paste them into Firestore → Rules
// ─────────────────────────────────────────────────────────────────────────────
