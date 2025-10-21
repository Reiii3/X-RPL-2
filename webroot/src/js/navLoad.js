class LoadNav {
    constructor() {
        console.log('Load Nav');
        this.initDOM()
    }

    initDOM() {
        this.layoutNav = document.getElementById('navigasi-el')
        this.layoutHeader = document.getElementById('header-el')
        this.systemLoad()
    }
    systemLoad() {
        fetch("")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, "text/html");
            const nav = htmlDoc.querySelector('.navigasi');
            const header = htmlDoc.querySelector('.header');
            console.log(nav)
            this.layoutNav.innerHTML = nav;
            this.layoutHeader.innerHTML = header;
        });
    } 
}

new LoadNav()