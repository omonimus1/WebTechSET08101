# Solution of the W3School Javascript Exercises

# JS Variables

Create a variabole called carName and assign the value Volvo to it.
```
var carName = "Volvo";
```
Create a variable called X, assign the value 50 to it:
```
var x  = 50;
```
Display the sum of 5+10, using the varuable: x and y
```
var x = 5;
var y = 10;
document.gtElementById("demo").innerHTML = x + y;
```
Create a varialbe called Z, assign x+y to it, and display the result in an alert box
```
var x  = 5;
var y = 10;
var z = x + y;
alert(z);
```
On one sigle line, declare threee variable with the following names and values:
* firstName = "John"
* lastName = "Doe"
* age = 35
```
var firstName = "John" ,  lastName = "Doe" , age = 35;
```

# JS Operator

Multiply 10 with 5, and alert the result:
```
alert(10*5);
```
Divide 1- by 2, and alert the result:
```
alert(10/2);
```
Alert the remainder when 15 is divided by 9:
```
alert(15%9);
```
Use the assignment operator that will result in x being 15 (same as x = x + y )
```
x = 10;
y = 5;
x += y;
```
Use the correct assignment operator that will result in X being 50 (same as X = X * Y);
```
x = 10;
y = 5;
x *= y;
```

# JS Data types

```
var length = 16;          //  Number

var lastName = "Johnson"; // String

var x = {
  firstName: "John",
  lastName: "Doe"
};                        // Object
```

# JS Functions
Execyte the function names myFunction

```
function myFunctin()  {
  alert("Hello World!");
}
myFunctin();
```

Create a function called "myFunction()"
```
function myFunction{
  alert("Hello World");
}
```

Make the function return "Hello"
```
function mmyFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunctin();
```
Make the function display "Hello" in the inner HTML of the element with the ID "demo"
```
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}
```

# JS Object

Alert "John" by extracting information from the person Object
```
var person =  {
  firstName : "John",
  lastName : "Doe"
};
alert(person.firstName);
```

Add the following property and value to the person object: country: Norway.
```
var person = {
  firstName: "John",
  lastName: "Doe",
  country : "Norway"
};
```

Create an object called person with name = John, age = 50.
Then, access the object to alert("John is 50")
```
var person = {
  name : "John" , age : 50
};
alert(person.name + " is " + person.age);
```

# JS Events

The ```<button>``` element should do something when someone clicks on it. Try to fix it!

```
<button onClick="alert('Hello')">Click Me. </button>
```
When the button is clicked, the function "myFunction" should be executed.
```
<button onClick="myFunction()"> Click me. </button>
```
The <div> element should turn red when someone moves the mouse over it.
```
<div onmouseover = "this.style.backgrundColor='red'"> myDiv. </div>
```

# JS String
Use the length property to alert the length of txt.

```
var txt = "Hello World!";
var x = txt.length;
alert(x);
```
Use escape characters to alert We are "Vikings".
```
var txt = "
We are \"Vikings\"";
alert(txt);
```

Conceteate the two string to alert "Hello World"!
```
var str1 = "Hello ";
var str2 = "World";
alert(str1 + str2);
```

# JS String Methods
Find the position of the character h in the string txt.
```
var txt = "abcdefghijklm";
var pos = txt.indexOf('h');
```

Use the slice method to return the word "bananas".
```
var txt = I can eat bananas all day";
var x = txt.slice(10,17);
```
Use the correct String method to replace the word "Hello" with the word "Welcome".
```
var txt = "Hello World";
txt = txt.replace("Hello" , "Welcome");
```
Convert the value of txt to upper case.
```
var txt = "Hello World";
txt = txt.toUpperCase();
```
Convert the value of txt to lower case.
```
var txt = "Hello World";
txt =  txt.toLowerCase();
```
# JS array
Get the value "Volvo" from the cars array.
```
var cars = ["Saab" , "Volvo" , "BMW"];
var x = cars[1];
```
Change the first item of cars to "Ford".
```
var cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";
```

Alert the number of items in an array, using the correct Array method.
```
var cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length );
```

# JS Array Methods
Use the correct Array method to remove the last item of the fruits array.
```

```


```

```

```

```

# Js array Sort


# JS dates

# JS Math


# JS Comparison


# JS Conditions

# JS For Loops

# JS while Loops

# JS Breack Loops

# JS HTML DOM
