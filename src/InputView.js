import { Console } from '@woowacourse/mission-utils';
import Numbers from './Numbers.js';
import { MESSAGES } from './constants.js';

export const getNumbers = async () => {
    while (true) {
        const numbers = await Console.readLineAsync(MESSAGES.INFO.NUMBERS_PROMPT);
    
        try { 
            return new Numbers(numbers).getNumbers();
        } catch (error) {
            Console.print(error.message);
        }
    }
}