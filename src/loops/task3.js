const course = 'Fundamentals';
let letterACounter = 0;
for(let i = 0; i < course.length; i ++) {
    if(course.charAt(i) === 'a') {
        letterACounter++;
    }
}
console.log(letterACounter);