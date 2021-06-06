export default {

    addItem(state, payload) {
        state.items.push(payload);
    },

    clearItem(state, payload) {
        state.items.splice(payload.index, 1);
        return state;
    }
}
