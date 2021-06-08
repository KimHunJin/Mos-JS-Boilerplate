import {Home} from "./view/home/Home.js";

class App {
    constructor() {
        this.$target = document.getElementById('root');
        this.home = new Home(this.$target);
    }

    render() {
        this.home.render();
    }
}

const app = new App();
const setView = () => {
    app.render();
}

window.addEventListener('load', setView);
