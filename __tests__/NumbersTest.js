import Numbers from "../src/Numbers";
import { MESSAGES } from "../src/constants";

describe("숫자 테스트", () => {

    test("숫자가 아닌 값이 포함되어 있으면 예외가 발생한다.", () => {
        ['1e2', '14-'].forEach((num) => {
            expect(() => {
                new Numbers(num);
            }).toThrow(MESSAGES.ERROR.NUMBER_NOT_NUMBER);
        });
    });

    test("소수를 입력하면 예외가 발생한다.", () => {
        ['123.5', '1.123', '123.0'].forEach((num) => {
            expect(() => {
                new Numbers(num);
            }).toThrow(MESSAGES.ERROR.NUMBER_NOT_NUMBER);
        });
    });

    test("범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Numbers('107');
        }).toThrow(MESSAGES.ERROR.NUMBER_OUT_OF_RANGE);
    });

    test("중복되는 숫자가 있으면 예외가 발생한다.", () => {
        ['112', '979'].forEach((num) => {
            expect(() => {
                new Numbers(num);
            }).toThrow(MESSAGES.ERROR.NUMBER_DUPLICATION);
        });
    });

    test("입력한 숫자가 3개가 아니면 예외가 발생한다.", () => {
        ['12', '1234'].forEach((num) => {
            expect(() => {
                new Numbers(num);
            }).toThrow(MESSAGES.ERROR.WINNING_NUMBERS_NOT_THREE);
        });
    });



    test("올바른 숫자가 입력되면 객체가 정상 생성된다.", () => {
        ['123', '567'].forEach((num) => {
            expect(() => {
                new Numbers(num);
            }).not.toThrow();
        });
    });
});