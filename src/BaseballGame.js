import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { getNumbers } from './InputView.js';
import { displayGameStart } from './OutputView.js';

export const start = async () => {
    displayGameStart();
    const numbers = new Computer().getNumbers();
    const userNumbers = getNumbers();
}