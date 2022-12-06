import React from 'react';



const config = {
    alphabet : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","QU","R","S","T","U","V","W","X","Y","Z"],
    vowels : "AEIOU".split(''),
    common : "AEIO".split(''),
    uncommon : ["Z", "QU", "V", "X", "J",]
}

const RandomLetter = (letters) => {
    
    letters = letters ? letters.split('') : config.alphabet;

    return letters[Math.floor(Math.random() * letters.length )];
}

export { RandomLetter, config};