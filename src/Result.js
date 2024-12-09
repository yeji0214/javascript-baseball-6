export const compareNumbers = (computer, user) => {
    let ball = 0, strike = 0, nothing = 0;
        for(let i = 0; i < 3; i++) {
            if (user[i] === computer[i]) strike++;
            else if (computer.includes(user[i])) ball++;
        }
        if (strike === 0 && ball === 0) nothing++;

    return [ball, strike, nothing];
}