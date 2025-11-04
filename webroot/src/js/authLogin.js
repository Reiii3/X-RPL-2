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
const statusloginEmail = document.getElementById('email-user');
const statusloginUsername = document.getElementById('username-user');


// === Add Username ===
async function tambahData(nama) {
    await addDoc(collection(db, "users"), {
        nama: nama,
        waktu: new Date().toLocaleString()
    });
}

function notifShow(text) {
    const notif = document.getElementById('layout-notif');
    const boxNotif = document.getElementById('notif-massagee');
    boxNotif.textContent = text;
    setTimeout(() => {
        notif.style.transform = "translateY(0)";
        setTimeout(() => {
            notif.style.transform = "translateY(180%)";
        }, 2000);
    }, 500);
}

// === Login ===
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email-login").value;
    const pass = document.getElementById("password-login").value;
    const username = document.getElementById("username-login").value;
    const logoutBtn = document.getElementById("logoutBtn");
    try {
    await signInWithEmailAndPassword(auth, email, pass);
    notifShow("Login berhasil!");
        document.getElementById("username-user").textContent = username;
        statusloginEmail.textContent = email;
        logoutBtn.style.display = "block";
    } catch (error) {
        notifShow(error.message);
    }
});

// === Logout ===
document.getElementById("logoutBtn").addEventListener("click", async () => {
    await signOut(auth);
    const logoutBtn = document.getElementById("logoutBtn");
    notifShow("Berhasil logout!");
    logoutBtn.style.display = "none";
    statusloginUsername.textContent = "Belum login";
    statusloginEmail.textContent = "Belum login";
});

// === Cek User Aktif ===
// onAuthStateChanged(auth, async (user) => {
//     if (user) {
//     console.log(user.uid);
//     const ref = doc(db, "users", user.uid);
//     const snap = await getDoc(ref);
//         if (snap.exists()) {
//             const data = snap.data();
//             console.log(data);
//         }
//     console.log("🔥 Cek dokumen:", ref.path);
//     console.log("Ada dokumen?", snap.exists());
//     console.log("Isi data:", snap.data());

//     logoutBtn.style.display = "block";
//     } else {
//         statusloginEmail.textContent = "Belum login";
//         statusloginUsername.textContent = "Belum login";
//         logoutBtn.style.display = "none";
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

async function startCheckerData() {
    const user = await promise(auth);
    const info = document.getElementById("userInfo");
    const logoutBtn = document.getElementById("logoutBtn");
    const loadingElement = document.getElementById("loader-blocking")
    if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
            const data = snap.data();
            console.log(data);
            statusloginUsername.textContent = data.username;
            statusloginEmail.textContent = `${user.email}`;
        }
        console.log("🔥 Cek dokumen:", ref.path);
        console.log("Ada dokumen?", snap.exists());
        console.log("Isi data:", snap.data());
        loadingElement.style.opacity = "0";
        setTimeout(() => {
            loadingElement.style.display = "none";
        }, 700);
        logoutBtn.style.display = "block";
    } else {
        statusloginEmail.textContent = "Belum login";
        statusloginUsername.textContent = "Belum login";
        logoutBtn.style.display = "none";
        loadingElement.style.opacity = "0";
        setTimeout(() => {
            loadingElement.style.display = "none";
        }, 700);
    }
}

startCheckerData();