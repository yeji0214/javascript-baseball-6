import { MESSAGES } from "./constants.js";

class Retry {
    #retry;

    constructor(retry) {
        this.#retry = this.#validate(Number(retry));
    }

    #validate(retry) {
        if (isNaN(retry)) throw new Error(MESSAGES.ERROR.RETRY_NOT_NUMBER);
        if (retry !== 1 && retry !== 2) throw new Error(MESSAGES.ERROR.RETRY_NOT_1_OR_2);

        return retry;
    }

    getRetry() {
        return this.#retry;
    }
}

export default Retry;