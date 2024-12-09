import { Random } from '@woowacourse/mission-utils';

class Computer {
    #numbers = [];

    constructor() {
        this.#createNumbers();
    }

    #createNumbers() {
        while (this.#numbers.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!this.#numbers.includes(number)) {
                this.#numbers.push(number);
            }
        }
    }

    getNumbers() {
        return this.#numbers;
    }
}

export default Computer;