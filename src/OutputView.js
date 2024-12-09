import { Console } from '@woowacourse/mission-utils';
import { RESULT, MESSAGES } from './constants.js';

export const displayGameStart = () => {
    Console.print(MESSAGES.INFO.GAME_START);
}

export const displayResult = result => {
    const ball = result[0], strike = result[1], nothing = result[2];

    if (nothing === 1) Console.print(`${RESULT.NOTHING}\n`);
    else if (ball > 0 && strike > 0) Console.print(`${result[0]}${RESULT.BALL} ${result[1]}${RESULT.STRIKE}\n`);
    else if (ball > 0) Console.print(`${result[0]}${RESULT.BALL}\n`);
    else if (strike > 0) {
        Console.print(`${strike}${RESULT.STRIKE}\n`);
        if (strike === 3) Console.print(MESSAGES.INFO.GAME_END);
    }
}