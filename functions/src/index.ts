import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const createMeSomeData = functions.https.onRequest(async (req, res) => {
    // const developers: Developer[] = [
    //     {
    //         firstName: "Sean",
    //         lastName: "Barnard",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "James",
    //         lastName: "Adarich",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Andy",
    //         lastName: "Lam",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Damo",
    //         lastName: "Fibuch",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Henry",
    //         lastName: "Ing-Simmons",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Tarun",
    //         lastName: "Dalwani",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Owen",
    //         lastName: "Pattison",
    //         team: "Momenta"
    //     },
    //     {
    //         firstName: "Pete",
    //         lastName: "van Blerk",
    //         team: "TTC"
    //     },
    //     {
    //         firstName: "Phil",
    //         lastName: "Bennett",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Kelvin",
    //         lastName: "Stott",
    //         team: "EBC (#1 team)"
    //     },
    //     {
    //         firstName: "Frans",
    //         lastName: "Lytzen",
    //         team: "All the teams"
    //     },
    //     {
    //         firstName: "Tom",
    //         lastName: "Hyde",
    //         team: "TeamPrevent"
    //     },
    //     {
    //         firstName: "Jarek",
    //         lastName: "Wysocki",
    //         team: "Fizz"
    //     },
    //     {
    //         firstName: "Mateusz",
    //         lastName: "Wolochow",
    //         team: "TTC"
    //     }
    // ];

    const addDocToFirestore = await admin.firestore().collection("developers").add({
        firstName: "Sean",
        lastName: "Barnard",
        team: "EBC (#1 team)"
    });

    const isDocAdded = await admin.firestore().collection("developers").doc(addDocToFirestore.id).get();

    if (!isDocAdded.exists) {
        res.status(500).send("Something went wrong.");
        return;
    }

    res.status(200).send(`${isDocAdded.id} created successfully.`);
    return;
})