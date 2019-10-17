# Beans Firebase Tech Talk
Simple repository with a barebones app for people to clone and use during my tech talk on Google Firebase at NewOrbit.

This app demonstrates some firebase functionality including:
* Authentication
* Firestore

To get started clone this app and follow the steps below to run this using your own firebase account.

---
## Set up from Firebase Console
1. Head to console.firebase.google.com and sign in with your google account
2. Create a new project (you can call this what you like)
3. Choose whether you want to include Analytics
4. Select which account you want to use (choose Default Account for Firebase to use the Google account you signed in with)
5. When the new projects has been created, click Continue
6. Next follow the instructions to add Firebase to your app... you want to choose web app which is depicted by the </> symbol
7. Give the app a name. This can be the same as your project name, or "Web app" doesn't really matter
8. At this point you can choose if you want to include Firebase Hosting, this is up to you but it can be set up later
9. Copy the contents of `var firebaseConfig = {...}` object and paste this into the firebaseconfig.ts file in the src folder of the code
10. Go back to the Firebase Console and click Authentication in the panel on the left
11. Set up sign-in method Email/Password should be enabled
12. Go back to users and add a new user

## Run the app and see what happens
1. Run the app with `npm start`
2. Log in to your copy of the app with the credentials for the user you just created
3. Head to the list page and add some records... watch the magic of Firestore realtime in another browser or the console
4. Play around with the source code and maybe add another collection, or change the model of the data and do something different with it
---
Feel free to have a poke around in the source code and see how things work, particularly the React Hook called useCollection, this is my own implementation of a generic hook to access all documents in a collection in firestore.

## Ideas

Try creating another hook which only accesses one document at a time.

Try creating a new page which subscribes to a different collection and shows the data in a different layout.

Try implementing user roles so you see different things when you log in as 2 different users.

Try changing the authentication method? May be out of the scope of this session but play around in your own time.

### There is so much more that Firebase has to offer, please refer to the docs [here](https://firebase.google.com/docs/web/setup) to learn more.