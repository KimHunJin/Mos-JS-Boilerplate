import List from "../components/List.js";
import store from "../store/itemHandleStore/index.js";

export class Home {

    constructor($target) {

        const items = document.createElement('ul');
        items.className = 'items';
        const input = document.createElement('input');
        input.className = 'item-input'
        const button = document.createElement('button');
        button.className = 'item-add-button';
        button.innerHTML = 'add'


        $target.appendChild(items);
        $target.appendChild(input);
        $target.appendChild(button);
        this.list = new List();

        button.addEventListener('click', e => {
            e.preventDefault();

            const value = input.value.trim();
            if (value.length) {
                store.dispatch('addItem', value);
                input.value = '';
                input.focus();
            }
        })

    }

    render() {
        this.list.render();
    }
}
