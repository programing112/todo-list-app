import inquirer from "inquirer";
//todo app in typescript!
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: "Add todo items in listing "
        },
        {
            name: "addMore",
            type: "list",
            choices: ["yes", "no"],
            message: "choice your options"
        },
    ]);
    const { Todoitem, addMore } = input;
    todos.push(Todoitem);
    if (addMore == "no") {
        console.log("Todolist:");
        //add more items
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        //exir
        break;
    }
}
