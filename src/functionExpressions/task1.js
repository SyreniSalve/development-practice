function fn1 () {
    console.log('Function decalration');
}

(function () {
   console.log('Anonymous function expression'); 
});

const fn2 = function () {
   console.log('Anonymous function expression'); 
};

() => console.log('Arrow based function');

const fn3 = () => console.log('Arrow based function');

fn1();
fn2();
fn3();