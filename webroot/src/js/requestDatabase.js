import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Konfigurasi Firebase kamu
const firebaseConfig = {
    apiKey: "AIzaSyBfx8QYliu_E-30KZqnq_tnDToRSQkz1hE",
    authDomain: "x-rpl-2.firebaseapp.com",
    projectId: "x-rpl-2",
    storageBucket: "x-rpl-2.appspot.com",
    messagingSenderId: "1015990563443",
    appId: "1:1015990563443:web:33fbe2513b1baca84f7746",
    measurementId: "G-DK27WT2RJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === Fungsi tambah data ke Firestore ===
async function tambahData(nama) {
    await addDoc(collection(db, "users"), {
    nama: nama,
    waktu: new Date().toLocaleString()
    });
}

// === Fungsi ambil semua data ===
async function ambilData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dataList = document.getElementById("dataList");
    dataList.innerHTML = ""; // bersihkan dulu

    querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().nama} — ${doc.data().waktu}`;
    dataList.appendChild(li);
    });
}

// === Event listener form ===
document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    if (nama.trim() !== "") {
    await tambahData(nama);
    document.getElementById("nama").value = "";
    await ambilData();
    }
});

// Ambil data pertama kali saat halaman dibuka
ambilData();