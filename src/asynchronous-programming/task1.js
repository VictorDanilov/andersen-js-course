function foo(x, creatCb){
    if(x > 10){
        console.log('x > 10')
    }
    if( x <= 10){
        console.log('x <= 10');
    }
}
function createCb(){
    console.log(`В консоль вывелось следущее:`)
}


// foo(5, createCb('cb') );