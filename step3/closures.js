// inner function
// outer function
// outer function variable
function outer(){
    const a = 1000;
    const b = 500;
    return function inner(){
        const x = 100;
        const z = 200;
        console.log(a,b);
        console.log("hello");
        //return "Hi";
    }
}

const out = outer();
out();
//console.log(out(100));