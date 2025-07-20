class MainWeb {
  constructor(){
    this.developer = "Reii";
    this.navigasiStats = true;
    this.initDoxument();
  }
  initDoxument() {
    this.idBtnNavigasi = document.getElementById("btn-navigasi")
    this.eventList();
  }
  eventList() {
    this.idBtnNavigasi.addEventListener("click", () => {
      console.log("open")
      const idLayoutNavigasiHidden = document.querySelector('.navigasi-hidden');
      const height = idLayoutNavigasiHidden.scrollHeight + 'px';
      const open = idLayoutNavigasiHidden.style.height = height;
      const close = () => {
        idLayoutNavigasiHidden.style.height = height;
        requestAnimationFrame(() => {
          idLayoutNavigasiHidden.style.height = "0";
        });
        this.navigasiStats ? open : close();
        this.navigasiStats = !this.navigasiStats;
      };
    });
  }
}
new MainWeb()