import {Home} from "./view/Home.js";

class App {
    constructor() {
        this.$target = document.getElementById('root');
        console.log('target', this.$target);
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
