function taskOne(callback) {

    setTimeout(function(){
        //const x = 100;
        callback();
    }, 5000)
}
const x = 100;
const nextTask = function() {
    console.log('NextTask Exeuted!!', x);
};

taskOne(nextTask);