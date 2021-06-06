import PubSub from "../lib/pubsub.js";
import {Status} from "./status.js";

export default class Store {

    constructor(params) {
        let self = this;

        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = Status.wait;

        self.events = new PubSub();

        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }

        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }

        self.state = new Proxy((params.state || {}), {
            set: function (state, key, value) {
                state[key] = value;
                self.events.publish('stateChange', self.state);

                if (self.status !== Status.mutation) {
                    console.log('')
                }

                self.status = Status.wait;
                return true;
            }
        })
    }

    dispatch(actionKey, payload) {
        let self = this;

        if (typeof self.actions[actionKey] !== 'function') {
            console.error(`actions ${actionKey} not exist`);
            return false;
        }

        self.status = Status.action;
        self.actions[actionKey](self, payload);
        return true;
    }

    commit(mutationKey, payload) {
        let self = this;

        if (typeof self.mutations[mutationKey] !== 'function') {
            console.error(`mutations ${mutationKey} not exist`);
            return false;
        }

        self.status = Status.mutation;
        let newState = self.mutations[mutationKey](self.state, payload);

        self.state = Object.assign(self.state, newState);
        return true;
    }
}
