var f1 = function(){
    setTimeout(function(){ console.log('1'); },
    Math.floor((Math.random() 1000) + 1));//do not edit
    }
    var f2 = function(){
    setTimeout(function(){ console.log('2'); },
    Math.floor((Math.random() 1000) + 1));//do not edit
    }
    var f3 = function(){
    setTimeout(function(){ console.log('3'); },
    Math.floor((Math.random() 1000) + 1));//do not edit
    }
    var f4 = function(){
    setTimeout(function(){ console.log('4'); },
    Math.floor((Math.random() 1000) + 1));//do not edit
    }
    var f5 = function(){
    setTimeout(function(){ console.log('5'); },
    Math.floor((Math.random() * 1000) + 1));//do not edit
    }
    f1();
    f2();
    f3();
    f4();
    f5();
    //Modify code above using Promises.
    //Expected output is:
    //1
    //2
    //3
    //4
    //5