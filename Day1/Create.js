// "// Day 1://"Hello World Function"

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


 const f = createHelloWorld();
console.log(f());

