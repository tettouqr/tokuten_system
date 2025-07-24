// ------------------- ▼▼▼ この部分を書き換える ▼▼▼ -------------------
// STEP1でコピーした、あなた自身のFirebase設定情報を貼り付けてください。

const firebaseConfig = {
    apiKey: "AIzaSyDekScDxMZCF8KBofcwWiBImHuwGBv_mFY",
    authDomain: "qlover-system.firebaseapp.com",
    projectId: "qlover-system",
    storageBucket: "qlover-system.firebasestorage.app",
    messagingSenderId: "767836761501",
    appId: "1:767836761501:web:1b87bcd0374230eb869374"
  };

// ------------------- ▲▲▲ この部分を書き換える ▲▲▲ -------------------


// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
