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

    let newA=[]
    
      const replace11=expr.replace(/11/g,'-')
      const replace10=replace11.replace(/10/g,'.')
      const replace00=replace10.replace(/00/g,' ')
      const replaceS=replace00.replace(/\*\*\*\*\*\*\*\*\*\*/g,' &')
      const arr=replaceS.split(' ')
      
      for(let i=0;i<arr.length;i+=1){
        if(arr[i]==''){
          continue
        }
      
        if(arr[i]=='&'){
          newA.push(arr[i])
        }
      
        for(let key in MORSE_TABLE ){
      if(key==arr[i]){
        newA.push(MORSE_TABLE[key])
      }
        }
      }
      const r=newA.join('')
      return r.replace(/&/g,' ')
      }




module.exports = {
    decode
}