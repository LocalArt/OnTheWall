const firebase = window.firebase;


const config = {
  apiKey: "AIzaSyBbR4P8ZZhOdb8ytdILRcul-m_CDprW-YQ",
  authDomain: "i-am-awesome-d9a14.firebaseapp.com",
  databaseURL: "https://i-am-awesome-d9a14.firebaseio.com",
  projectId: "i-am-awesome-d9a14",
  storageBucket: "i-am-awesome-d9a14.appspot.com",
  messagingSenderId: "672862850689"
};

firebase.initializeApp(config);


const storage = window.firebase.storage;
const database = window.firebase.database;

export {
  storage,
  database
}