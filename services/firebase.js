var admin = require("firebase-admin");

var serviceAccount = require("../slice-pizza-1337-firebase-adminsdk-4bn09-dc0e4ffd09.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://slice-pizza-1337.firebaseio.com"
});

exports.db = admin.firestore();
exports.auth = admin.auth();