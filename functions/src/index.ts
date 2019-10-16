import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

export interface Developer {
    firstName: string;
    lastName: string;
    team: string;
}

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const createMeSomeData = functions.https.onRequest(async (req, res) => {
    const developers: Developer[] = [
        {
            firstName: "Sean",
            lastName: "Barnard",
            team: "EBC (#1 team)"
        },
        {
            firstName: "James",
            lastName: "Adarich",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Andy",
            lastName: "Lam",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Damo",
            lastName: "Fibuch",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Henry",
            lastName: "Ing-Simmons",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Tarun",
            lastName: "Dalwani",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Owen",
            lastName: "Pattison",
            team: "Momenta"
        },
        {
            firstName: "Pete",
            lastName: "van Blerk",
            team: "TTC"
        },
        {
            firstName: "Phil",
            lastName: "Bennett",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Kelvin",
            lastName: "Stott",
            team: "EBC (#1 team)"
        },
        {
            firstName: "Frans",
            lastName: "Lytzen",
            team: "All the teams"
        },
        {
            firstName: "Tom",
            lastName: "Hyde",
            team: "TeamPrevent"
        },
        {
            firstName: "Jarek",
            lastName: "Wysocki",
            team: "Fizz"
        },
        {
            firstName: "Mateusz",
            lastName: "Wolochow",
            team: "TTC"
        }
    ];

    developers.forEach(async dev => {
        await admin.firestore().collection("developers").add(dev);
    });

    res.status(200).send("Successfully added NewOrbit Developers to database.");
    return;
});