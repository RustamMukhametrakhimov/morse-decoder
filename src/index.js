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
    // write your solution here
    let len = expr.length;
    let str = '';
    let tmpStr = '';
    for (let i = 0; i < len; i+=10) {
        tmpStr = expr.substr(i, 10);
        if (tmpStr == '**********') {
            str += ' ';
            continue;
        };
        let s = '';
        for (let j = 0; j < 10; j+=2) {
            switch (tmpStr.substr(j, 2)) {
                case '00': 
                    break; 
                case '10': 
                    s = s + '.';
                    break;
                case '11': 
                    s = s + '-';
                    break;
            };    
        };
        str = str + MORSE_TABLE[s];
    };
    return str;
}

module.exports = {
    decode
}