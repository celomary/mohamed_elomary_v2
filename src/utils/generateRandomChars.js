const characters = 'abcdefghigklmnopqrstuvwxyz123659_$';

export const randomChars = (length) => {
    let generatedChars = '';
    while (length > 0) {
        generatedChars +=
            characters[Math.floor(Math.random() * characters.length)];
        length--;
    }
    return generatedChars;
};
