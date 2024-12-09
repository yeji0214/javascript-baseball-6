import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

export const displayGameStart = () => {
    Console.print(MESSAGES.INFO.GAME_START);
}