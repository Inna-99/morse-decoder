const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let result = '';
    while(i < expr.length / 10) {
        if (expr[i * 10 + 1] === '*') {
            result += ' ';
            i++;
            continue;
        }
        const encodedLetterString = expr.substring(i * 10, 10 + (i * 10));
        const lastIndex = encodedLetterString.indexOf('1');
        const pureString = encodedLetterString.substring(lastIndex);
        let decodedLetter = '';

        for (let i = 0; i < pureString.length / 2; i++) {
            const currentSymbol = pureString[i * 2] + pureString[i * 2 + 1];
            if (currentSymbol === '11') {
                decodedLetter += '-';
            }
            if (currentSymbol === '10') {
                decodedLetter += '.';
            }
        }
        result += MORSE_TABLE[decodedLetter];
        i++;
    }
    return result;
}

module.exports = {
    decode
}