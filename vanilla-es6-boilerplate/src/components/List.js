import Component from "../lib/component.js";
import store from "../store/itemHandleStore/index.js";

export default class List extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.items')
        });
    }

    render() {
        let self = this;

        if (store.state.items.length === 0) {
            self.element.innerHTML = `
                <span>item is empty</span>
            `
            return;
        }

        self.element.innerHTML = `
            <ul>
                ${store.state.items.map(item => {
                    return `
                        <li>
                            <span>${item}</span>
                            <button>X</button>
                        </li>
                    `
                }).join('')}
            </ul>
        `

        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                store.dispatch('clearItem', { index });
            });
        });
    }
}
