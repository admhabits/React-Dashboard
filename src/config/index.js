import firebase from 'firebase/app';
import 'firebase/database';
const config = {
      apiKey: "AIzaSyD-xm5QsLHQ3Ez9FTB3_pgYhcz40OAboZc",
      authDomain: "hosting-poject.firebaseapp.com",
      databaseURL: "https://hosting-poject-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "hosting-poject",
      storageBucket: "hosting-poject.appspot.com",
      messagingSenderId: "422703811878",
      appId: "1:422703811878:web:ee1fefc2fc6437f49b45e7",
      measurementId: "G-RS727TR2C4"
}

firebase.initializeApp(config);

export const db = firebase.database();

export default firebase;