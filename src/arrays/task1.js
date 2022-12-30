const arr = ['String', 26, true, 'Array'];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

const second = arr[1];

for(let a of arr){
    console.log(a);
};

arr.forEach(element => console.log(element));

console.log(second);