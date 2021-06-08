export class AddButton {

    constructor($target, onClick) {
        this.$target = $target;
        this.button = document.createElement('button');
        this.button.className = 'item-add-button';
        this.button.innerHTML = 'add'

        this.button.addEventListener('click', e => {
            e.preventDefault();
            onClick();
        })
    }

    render() {
        this.$target.appendChild(this.button);
    }

}
