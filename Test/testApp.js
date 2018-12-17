var myObject = {
    name : "Riska Rahmatul Janah",
    age : 21,
    print: function() {
        console.log(this.name+ " is " +this.age+ " years old");
        console.log(this === myObject);
    }
};

function myFunction() {
    console.log("this is my function");
    console.log(this === global);
}

myObject.print();
console.log("===========");
myFunction();