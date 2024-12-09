import Computer from './Computer.js';
import { compareNumbers } from './Result.js';
import { getUserNumbers, getRetry } from './InputView.js';
import { displayGameStart, displayResult } from './OutputView.js';

export const start = async () => {
    displayGameStart();

    while (true) {
        await newGame();
        if (await getRetry() === 2) break;
    }
}

const newGame = async () => {
    const numbers = new Computer().getNumbers();
    let strike = 0;

    while (strike !== 3) {
        const userNumbers = await getUserNumbers();
        const result = compareNumbers(numbers, userNumbers);
        strike = result[1];
        displayResult(result);
    }
}