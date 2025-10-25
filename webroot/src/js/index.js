class MainWeb {
  constructor(){
    this.developer = "Reii";
    this.initDoxument();
    //this.deviceChaker();
    this.jadwalChecker();
  }

  deviceChaker() {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      console.log("User pakai mobile device");
    } else {
      console.log("User pakai PC/laptop");
      document.querySelector('.layout-warning').style.display = 'flex';
    }
  }

  jadwalChecker() {
  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const jadwal = {
    Monday: {
      matapelajaran: {
        1: ['Bahasa Inggris', 'Bu Kholifatul'],
        2: ['Bahasa Inggris', 'Bu Kholifatul'],
        3: ['Olahraga', 'Pak Heru'],
        4: ['Olahraga', 'Pak Heru'],
        5: "Istirahat",
        6: ['PAI', 'Pak Alvin'],
        7: ['PAI', 'Pak Alvin'],
        8: ['PAI', 'Pak Alvin'],
        9: "Istirahat",
        10: ['IPAS','Bu Erni'],
        11: ['IPAS', 'Bu Erni'],
        12: ['IPAS', 'Bu Erni'],
        13: ['IPAS', 'Bu Erni']
      },
    },
    Tuesday: {
      matapelajaran: {
        1: ['Sejarah', 'Pak Alvan'],
        2: ['Sejarah', 'Pak Alvan'],
        3: ['Bahasa Indonesia', 'Bu Venus'],
        4: ['Bahasa Indonesia', 'Bu Venus'],
        5: "Istirahat",
        6: ['IPAS', 'Bu Erni'],
        7: ['IPAS', 'Bu Erni'],
        8: ['Bahasa Jawa', 'Bu Dita'],
        9: "Istirahat",
        10: ['Seni Budaya', 'Pak Rosidi'],
        11: ['Seni Budaya', 'Pak Rosidi'],
        12: ['Bahasa Inggris', 'Bu Kholifatul'],
        13: ['Bahasa Inggris', 'Bu Kholifatul']
      }
    },
    Wednesday: {
      matapelajaran: {
        1: ['Matematika', 'Pak Edi'],
        2: ['Matematika', 'Pak Edi'],
        3: ['PPKN', 'Bu Setyowati'],
        4: ['PPKN', 'Bu Setyowati'],
        5: "Istirahat",
        6: ['Bahasa Indonesia', 'Bu Venus'],
        7: ['Bahasa Indonesia', 'Bu Venus'],
        8: ['Olahraga', 'Pak Heru'],
        9: "Istirahat",
        10: ['Informatika', 'Pak Asep'],
        11: ['Informatika', 'Pak Asep'],
        12: ['Informatika', 'Pak Asep'],
        13: ['Informatika', 'Pak Asep']
      }
    },
    Thursday: {
      matapelajaran: {
        1: ['Produktif', 'Bu Nurma'],
        2: ['Produktif', 'Bu Nurma'],
        3: ['Produktif', 'Bu Nurma'],
        4: ['Produktif', 'Bu Nurma'],
        5: "Istirahat",
        6: ['Produktif', 'Bu Nurma'],
        7: ['Produktif', 'Bu Nurma'],
        8: ['Produktif', 'Bu Nurma'],
        9: "Istirahat",
        10: ['Produktif', 'Bu Nurma'],
        11: ['BK', 'Bu Niken'],
        12: ['Matematika', 'Pak Edi'],
        13: ['Matematika', 'Pak Edi'],
      }
    },
    Friday: {
      matapelajaran: {
        1: ["Produktif", "Pak oong"],
        2: ["Produktif", "Pak oong"],
        3: ["Produktif", "Pak oong"],
        4: ["Produktif", "Pak oong"],
        5: "Istirahat",
        6: ["Produktif", "Pak oong"],
        7: ["Produktif", "Pak oong"],
        8: ["Produktif", "Pak oong"],
        9: "Sholat Jum'at",
        10: ["Pramuka", "Anak Pramuka"],
        11: ["Pramuka", "Anak Pramuka"],
        12: ["Pramuka", "Anak Pramuka"],
      }
    },
    Saturday: {
      matapelajaran: {
        1: "Libur Woii!!"
      }
    },
    Sunday: {
      matapelajaran: {
        1: "Libur Woii!!"
      }
    },
    listJam: {
      1: '06.50 - 07.40',
      2: '07.40 - 08.20',
      3: '08.20 - 09.00',
      4: '09.00 - 09.40',
      5: "",
      6: '09.55 - 10.35',
      7: '10.35 - 11.15',
      8: '11.15 - 11.55',
      9: "",
      10: '12.25 - 13.05',
      11: '13.05 - 13.45',
      12: '13.45 - 14.25',
      13: '14.25 - 15.05'
    }
  }

  const dayName = days[date.getDay()];
  console.log(dayName)
  console.log(jadwal[dayName])
  Object.keys(jadwal[dayName].matapelajaran).forEach((key, ind) => {
    let data = jadwal[dayName].matapelajaran[key];
    console.log(data)
    const colm = document.createElement('tr');
    if (data == "Istirahat") {
      const templateTable = `
        <td colspan="5" style="text-align: center; font-weight: 600; font-size: clamp(8px, 1.7vw, 60px);">Istirahat</td>
      `
      colm.innerHTML = templateTable;
      console.log(`Istirahat ${ind}`)
    } else if(data == "Sholat Jum'at") {
      const templateTable = `
        <td colspan="5" style="text-align: center; font-weight: 600; font-size: clamp(8px, 1.7vw, 60px);">Sholat Jum'at</td>
      `
      colm.innerHTML = templateTable;
    } else if(data == "Libur Woii!!") {
      const templateTable = `
        <td colspan="5" style="text-align: center; font-weight: 600; font-size: clamp(10px, 2vw, 60px);">Libur Woii!!</td>
      `
      colm.innerHTML = templateTable;
    } else {
      const templateTable = `
        <td>${jadwal.listJam[key]}</td>
        <td>${data[0]}</td>
        <td>${data[1]}</td>
        <td></td>
        `
        colm.innerHTML = templateTable;
        console.log('Loss')
        console.log(data)
    }
    document.getElementById('table-body').appendChild(colm);
    console.log(key)
  })
  console.log(dayName); // Contoh output: "Wednesday"
  }
  initDoxument() {
    this.btnNav = document.getElementById('btn-nav');
    this.layoutNavigasi = document.querySelector('.navigasi');
    this.blackLayoutNav = document.querySelector('.black-layout');
    this.idBtnNavAbout = document.getElementById('about-id');
    this.idBtnNavProfT = document.getElementById('profileT-id');
    this.idBtnNavProfS = document.getElementById('profileS-id');
    this.idBtnNavProfD = document.getElementById('profileD-id');
    this.eventList();
  }
  eventList() {
    this.btnNav.addEventListener('click', () => {
      this.layoutNavigasi.style.transform = 'translateX(0)';
      this.blackLayoutNav.style.transform = 'translateX(0)';
    });
    this.blackLayoutNav.addEventListener('click', () => {
      this.layoutNavigasi.style.transform = 'translateX(-100%)';
      this.blackLayoutNav.style.transform = 'translateX(-100%)';
    });
    this.idBtnNavAbout.addEventListener('click', () => {
      console.log('about-action');
    });
    this.idBtnNavProfT.addEventListener('click', () => {
      console.log('profile-teacher-action');
    })
    this.idBtnNavProfS.addEventListener('click', () => {
      console.log('profile-student-action');
    })
    this.idBtnNavProfD.addEventListener('click', () => {
      console.log('profile-developer-action');
    })
  }
}
new MainWeb()