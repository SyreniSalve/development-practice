function transformString (word) {
    let transformedWord = '';
    for(let i = 0; i < word.length; i++) {
        transformedWord += (i % 2 === 0) ? word[i].toUpperCase():
        word[i].toLowerCase();
    };
    console.log(transformedWord);
}
transformString('devMentor');