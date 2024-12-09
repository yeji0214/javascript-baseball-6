import { Console } from '@woowacourse/mission-utils';
import Numbers from './Numbers.js';
import Retry from './Retry.js';
import { MESSAGES } from './constants.js';

export const getUserNumbers = async () => {
    while (true) {
        const numbers = await Console.readLineAsync(MESSAGES.INFO.NUMBERS_PROMPT);
    
        try { 
            return new Numbers(numbers).getNumbers();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getRetry = async () => {
    while (true) {
        const retry = await Console.readLineAsync(MESSAGES.INFO.RETRY_PROMPT);
    
        try { 
            return new Retry(retry).getRetry();
        } catch (error) {
            Console.print(error.message);
        }
    }
}