export const RESULT = {
    BALL: '볼',
    STRIKE: '스트라이크',
    NOTHING: '낫싱',
};

export const MESSAGES = {
    INFO: {
        GAME_START: '숫자 야구 게임을 시작합니다.\n',
        NUMBERS_PROMPT: '숫자를 입력해주세요 : ',
        GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
        RETRY_PROMPT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    },
    ERROR: {
        NUMBER_NOT_NUMBER: '[ERROR] 숫자만 입력해주세요\n',
        NUMBER_OUT_OF_RANGE: '[ERROR] 1부터 9 사이의 숫자만 입력해주세요.\n',
        NUMBER_DUPLICATION: '[ERROR] 중복되는 숫자가 있습니다.\n',
        WINNING_NUMBERS_NOT_THREE: '[ERROR] 숫자는 3개를 입력해주세요.\n',
        RETRY_NOT_NUMBER: '[ERROR] 게임 재시작 여부는 숫자로 입력해주세요.\n',
        RETRY_NOT_1_OR_2: '[ERROR] 1 또는 2를 입력해주세요.\n',
    }
};