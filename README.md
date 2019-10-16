# Beans Firebase Tech Talk
Simple repository with a barebones app for people to clone and use during my tech talk on Google Firebase at NewOrbit.

This app demonstrates some firebase functionality including:
* Authentication
* Firestore

To get started clone this app and follow the steps below to run this using your own firebase account.

---
1. Head to console.firebase.com and create your own account
2. Create a new project (you can call this what you like)
3. Add a web app to the project. This should give you some sample code to connect your app, you want to copy the `const firebaseConfig = {...}` object part and paste this into the firebaseconfig.ts file in the src folder of the code
4. Run the app with `npm start`
5. Go back to the Firebase Console and head to the Authentication settings
6. Set up Authentication to use Email/Password
7. Create a user
8. Log in to your copy of the app with these credentials
9. Head to the list page and add some records... watch the magic of Firestore realtime in another browser or the console
10. Play around with the source code and maybe add another collection, or change the model of the data and do something different with it