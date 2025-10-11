class MainWeb {
  constructor(){
    this.developer = "Reii";
    this.initDoxument();
  }
  initDoxument() {
    this.btnNav = document.getElementById('btn-nav');
    this.layoutNavigasi = document.querySelector('.navigasi');
    this.blackLayoutNav = document.querySelector('.black-layout');
    this.eventList();
  }
  eventList() {
    this.btnNav.addEventListener('click', () => {
      this.layoutNavigasi.style.transform = 'translateX(0)';
      this.blackLayoutNav.style.transform = 'translateX(0)';
    });
    this.blackLayoutNav.addEventListener('click', () => {
      this.layoutNavigasi.style.transform = 'translateX(-100%)';
      this.blackLayoutNav.style.transform = 'translateX(100%)';
    });
  }
}
new MainWeb()