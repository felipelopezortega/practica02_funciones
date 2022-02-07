function greet (){

    console.log("Hello");

};

greet(); //invoke the function

//function as parameters
function logGreeting(fn){

    fn();
};

logGreeting(greet);
// now the greet function is a parameter and we are invoking it
//with the name of the "fn" argument
