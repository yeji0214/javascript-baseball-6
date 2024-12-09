import Retry from "../src/Retry";
import { MESSAGES } from "../src/constants";

describe("재시작 여부 테스트", () => {

    test("숫자가 아닌 값을 입력하면 예외가 발생한다.", () => {
        ['d', 'dfadf'].forEach((retry) => {
            expect(() => {
                new Retry(retry);
            }).toThrow(MESSAGES.ERROR.RETRY_NOT_NUMBER);
        });
    });

    test("1 또는 2가 아닌 다른 숫자를 입력하면 예외가 발생한다.", () => {
        [0, 10].forEach((retry) => {
            expect(() => {
                new Retry(retry);
            }).toThrow(MESSAGES.ERROR.RETRY_NOT_1_OR_2);
        });
    });

    test("공백을 입력하면 예외가 발생한다.", () => {
        expect(() => {
            new Retry(' ');
        }).toThrow(MESSAGES.ERROR.RETRY_NOT_1_OR_2);
    });


    test("실수를 입력하면 예외가 발생한다. (소수점 아래가 0이 아닌 경우)", () => {
        [1.1, 2.5].forEach((retry) => {
            expect(() => {
                new Retry(retry);
            }).toThrow(MESSAGES.ERROR.RETRY_NOT_1_OR_2);
        });
    });


    test("올바른 숫자가 입력되면 객체가 정상 생성된다.", () => {
        [1, 2].forEach((retry) => {
            expect(() => {
                new Retry(retry);
            }).not.toThrow();
        });
    });

    test("실수지만 소수점 아래가 0이라면 객체가 정상 생성된다.", () => {
        [1.0, 2.0].forEach((retry) => {
            expect(() => {
                new Retry(retry);
            }).not.toThrow();
        });
    });
});