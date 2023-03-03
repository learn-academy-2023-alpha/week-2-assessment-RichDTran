# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a inputed value, index, or number in a function
such as (array[bean, fruit, meat], /string"Hello How are you", index[2], 25) 
where a argument an argument is if a value is given under a condition and then 
it is logged in result as a return

Researched answer: Parameters are the names listed in the functions Definition
                    Example : function example(paramenter) {
                        console.log(parameter)
                    }
                    An Argument are real values passed to the function
                    const argument = "LEARN"


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map goes through each value in a array from a function and does not change the original array key and values are the predefined parameters

Researched answer: .map is a collections of key value pairs. It does not contain any keys by default. it only contains what is explicitly put into it. It can be any value like functions objecs or any primitive. It iterates in the order of insertion.

//** UPDATE : 
map "touches each value in array" and produces that new value in a array. Such as % 2===0
in each number in a array. If the remainder is 0 it means that it is even if there is remainder it is odd

3. What is the difference between map and filter?

Your answer:map returns the information or log from the original array , where as filter returns a specific information based on what is being requested

Researched answer:Filter creates an array filled with all elements pass a test implemented by the function and search for specifics through a function and logs those specifics back . 
Such as finding fruits in a array of vegetables and fruits. 
Map creates a new array going through EACH element in a function like dividing all numbers by 2 and logging those answers in its return.

//**UPDATE : .map will touch each value in array and produce what is being called for(output) in a new array like multiplication or %
.filter will create a new array and output a given specifically looking for in a parameter such as looking for vowels in a word.

1. What is iteration?

Your answer:Iteration is process in a function where information or data is repeated and is returned what is requested in that function such as for loops.

Researched answer:Iterative refers to a sequence of instructions or code being repeated until a specific end result is achieved. Iterative development is sometimes called circular or evolutionary development. const variable = (function) => {
                                            for (string) =>{
                                                return:
                                            }
}

1. What is the difference between a function and a method?

Your answer: A method is a const with key and values such as data, arrays, numbers labeled such as
            const goodFruit = [papaya, apple, orange]
            A function is a process which takes variables and methods through specific parameters and returning information that is being requested

Researched answer: A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not. 
var str = 'CodeCADEMY';
var str1 = str.toLowerCase();
var str2 = str.toUpperCase();

//** UPDATE :Functions are code that can be used again and again with inputted values where as methods can have functions INSIDE them but the methods CANNOT be changed.


6. STRETCH: What is hoisting in JavaScript?

Your answer: Takes variables and information to the top before entering a function or process

Researched answer: In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
It allows us to call functions before even writing them in our code. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: are templates for Javascript Objects.

2. Spread operator:Ability to copy an array into another array (...)

3. React state: Is where you store property values that belongs to the component. When state object changes the compnent reenders. State can contatin unlimited properties. Example this.state.propertyname

4. React props: Are arguments passed into react components like HTML attributes. They are like function arguments in Javascript and attributes in HTML. 

5. DOM events:Document Object Model inclues events, and each HTML element contains a collection of events that trigger Javascript code.
