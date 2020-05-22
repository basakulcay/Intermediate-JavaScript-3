# Intermediate-JavaScript-3

## Message Mixer (Modules)

Message Mixer is a messaging service that allows you to perform an action on input text and display the output of that behavior to the console. For example, with the current functions defined in Message Mixer, you can:

    count the characters in a message
    capitalize the first character of words
    reverse a message’s words in place
    reversing characters in place
    replace the first occurrence of a string
    replace all occurrences of a string
    encode text by swapping certain characters for other characters

At present, Message Mixer runs as a program in a single file. This single file includes functions that define behavior as well as the output. Message Mixer knows that by extracting the functions into a module, logic can be reused in different parts of our application. 


## Workaround - Employees (Modules)

WorkAround is a human resources program that returns basic information about an employee, based on salary data. Using WorkAround, one can use an employee’s salary data to:

    return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
    calculate employee tax rates
    return employee benefits
    calculate employee bonuses
    calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits

WorkAround currently contains the data and functions in a single file, though they would like to modify the program so it makes use of JavaScript modules. Specifically, WorkAround asks you to demonstrate the different ways to export and import modules.
