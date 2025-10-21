class MainWeb {
  constructor(){
    this.developer = "Reii";
    this.initDoxument();
    // this.deviceChaker();
  }

  deviceChaker() {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      console.log("User pakai mobile device");
    } else {
      console.log("User pakai PC/laptop");
      document.querySelector('.layout-warning').style.display = 'flex';
    }
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