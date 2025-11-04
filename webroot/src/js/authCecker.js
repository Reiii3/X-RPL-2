import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { 
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// 🔹 Ganti dengan config project kamu
const firebaseConfig = {
    apiKey: "AIzaSyDKPpb3xjGRBVFDWBDE8o5siiMRGnoauEY",
    authDomain: "x-rpl-2.firebaseapp.com",
    projectId: "x-rpl-2",
    storageBucket: "x-rpl-2.firebasestorage.app",
    messagingSenderId: "287238857751",
    appId: "1:287238857751:web:584fcee16390ddb2bd2852",
    measurementId: "G-7JLWQT7DDF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// onAuthStateChanged(auth, async (user) => {
//     const info = document.getElementById("userInfo");
//     const logoutBtn = document.getElementById("logoutBtn");
//     if (user) {
//     console.log(user.uid);
//     const ref = doc(db, "users", user.uid);
//     const snap = await getDoc(ref);
//         if (snap.exists()) {
//             const data = snap.data();
//             console.log(data);
//             document.getElementById("account-nav").textContent = data.username;
//         }
//     console.log("🔥 Cek dokumen:", ref.path);
//     console.log("Ada dokumen?", snap.exists());
//     console.log("Isi data:", snap.data());
//     logoutBtn.style.display = "block";
//     } else {
//         statusloginEmail.textContent = "Belum login";
//         statusloginUsername.textContent = "Belum login";
//     }
// });

function promise(auth) {
    return new Promise((resolve, reject) => {
        const sup = onAuthStateChanged(auth, async (user) => {
            sup();
            resolve(user);
        })
    });
}

// promise(auth).then((user) => console.log(`For Promise :` + user.uid));

async function startCheckerData() {
    const user = await promise(auth);
    if ( user ) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
            const data = snap.data();
            console.log(data);
            document.getElementById("account-nav").textContent = data.username;
        }
        console.log("🔥 Cek dokumen:", ref.path);
        console.log("Ada dokumen?", snap.exists());
        console.log("Isi data:", snap.data());
    } else {
        console.log("Belum login");
    }
}

startCheckerData();