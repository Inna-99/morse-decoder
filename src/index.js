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
let i ;
let j ;
let bumper = '' ;
let str = '' ;
let from_11 = false ;
   
    for (i = 0; i < expr.length; i += 10) {
        if (expr[i] == '*') {
            str = str + ' ' ;
        }
          else {
            for ( j = i; j < (i + 10); j++ ) {
                if (from_11) {
                    if (expr[j] == '1') {
                        bumper = bumper + '-' ;
                    }
                    else {
                        bumper = bumper + '.' ;
                    }
                    from_11 = false ;
                }
                else {
                    if (expr[j] == '1') {
                        from_11 = true ;
                    }
                }
            }
            str = str + MORSE_TABLE[bumper] ;
            bumper = '' ;
        }
        
    } return str ;

}
module.exports = {
    decode
}