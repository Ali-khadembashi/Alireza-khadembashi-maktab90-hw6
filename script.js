'use strict'




/*Task 3*/


function SrotByAge(array) {
    array.sort((a, b) => a.age - b.age);

    // console.log(`${array}`);
    for (const element of array) {
        console.log(` ${element.name} is ${element.age} years old `);
    }

}





