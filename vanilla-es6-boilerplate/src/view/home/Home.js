import List from "../../components/List.js";
import store from "../../store/itemHandleStore/index.js";
import {AddButton} from "./AddButton.js";
import {ItemInput} from "./ItemInput.js";

export class Home {

    handleClick = () => {
        const value = this.input.value;
        if (value.length) {
            store.dispatch('addItem', value);
            this.input.value = '';
            this.input.focus();
        }
    }
    
    constructor($target) {

        this.items = document.createElement('ul');
        this.items.className = 'items';

        this.input = new ItemInput({$target});
        this.button = new AddButton($target, this.handleClick.bind())

        $target.appendChild(this.items);
        this.list = new List();
    }

    render() {
        this.input.render();
        this.button.render();
        this.list.render();
    }
}
