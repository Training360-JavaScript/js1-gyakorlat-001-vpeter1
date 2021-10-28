"use strict"

    /* function personDataLog  ({firstname='John', lastname='Doe', age=33} = {}) {
    return "My name is " + firstname + " " + lastname + ". I'm " + age + " years old."
    }

    console.log(personDataLog())
    console.log(personDataLog({firstname:'Jane', lastname:'Smith', age:25})) */

    let personDataLog = ({firstname='John', lastname='Doe', age=33} = {}) =>
     "My name is " + firstname + " " + lastname + ". I'm " + age + " years old."
    

    console.log(personDataLog())
    console.log(personDataLog({firstname:'Jane', lastname:'Smith', age:25}))
