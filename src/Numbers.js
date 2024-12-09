import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

class Numbers {
    #numbers = [];

    constructor(numbers) {
        this.#numbers = this.#validate(numbers.split('').map(Number));
    }

    #validate(numbers) {
        numbers.forEach((num) => {
            if (isNaN(num)) throw new Error(MESSAGES.ERROR.NUMBER_NOT_NUMBER);
            if (num < 1 || num > 9) throw new Error(MESSAGES.ERROR.NUMBER_OUT_OF_RANGE);
        });
        if (numbers.length !== new Set(numbers).size) throw new Error(MESSAGES.ERROR.NUMBER_DUPLICATION);
        if (numbers.length !== 3) throw new Error(MESSAGES.ERROR.WINNING_NUMBERS_NOT_THREE);

        return numbers;
    }

    getNumbers() {
        return this.#numbers;
    }
}

export default Numbers;