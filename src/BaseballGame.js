import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { getNumbers } from './InputView.js';

export const start = async () => {
    const numbers = new Computer().getNumbers();
    const userNumbers = getNumbers();
}