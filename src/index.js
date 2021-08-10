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

function decode(e) {
  let decode = [];

  for (let i = 0; i < e.length; i += 10) {
    let  zeroCode = e.slice(i, i + 10);

      if ( zeroCode == '**********') {
         decode += ' '
         continue
      };

     let morseLetter = zeroCode.replace(/11/g,'-').replace(/10/g,'.').replace(/00/g,'');

     decode+=MORSE_TABLE[morseLetter] ;
      
  }
  return decode;
}

module.exports = {
    decode
}