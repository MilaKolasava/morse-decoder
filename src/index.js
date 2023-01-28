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
    
      let result = '';
      const splittedExpresion = [];

      for (i = 0; i < expr.length; i = i + 10) {
        splittedExpresion.push(expr.slice(i, i + 10))
         }
 
         splittedExpresion.forEach( encodedLetter => {
            let morseLetter = '';

            if (encodedLetter === '**********') {
                result = result + ' ';
                return;
            } else {
                for (let index = 0; index < encodedLetter.length; index = index + 2) {

                    switch (encodedLetter.slice(index, index + 2)) {
                        case "00":
                            morseLetter = morseLetter + '';
                            break;
                        case "10":
                            morseLetter = morseLetter + '.';
                            break;
                        case "11":
                            morseLetter = morseLetter + '-';
                            break;
                    }
                                
                }
            }
            result = result + MORSE_TABLE[morseLetter]


         })
        return result;
      }



module.exports = {
    decode
}