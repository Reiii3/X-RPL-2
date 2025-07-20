class MainWeb {
  constructor(){
    this.developer = "Reii";
  }
  initDoxument() {
    this.idBtnNavigasi = document.getElementById("btn-navigasi")
    this.eventList();
    this.navigasiStats = true;
  }
  eventList() {
    this.idBtnNavigasi.addEventListener("click", () => {
      const idLayoutNavigasiHidden = document.querySelector('navigasi-hidden');
      console.log("open")
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