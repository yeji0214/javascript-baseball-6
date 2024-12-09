import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { compareNumbers } from './Result.js';
import { getUserNumbers } from './InputView.js';
import { displayGameStart, displayResult } from './OutputView.js';

export const start = async () => {
    displayGameStart();
    const numbers = new Computer().getNumbers();
    let strike = 0;

    while (strike !== 3) {
        const userNumbers = await getUserNumbers();
        const result = compareNumbers(numbers, userNumbers);
        strike = result[1];
        displayResult(result);
    }
}