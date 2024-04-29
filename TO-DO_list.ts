#!/usr/bin/env node

import inquirer from "inquirer"

let todo_list: string[] = [];

let while_condition : boolean = true

while (while_condition === true){

    // ....................................options.........
    let options = await inquirer.prompt([{
        type: "list",
        name: "user_option",
        message: 'salect an option',
        choices: ["add","remove"]
    }]);
// ..........................Add..............
if(options.user_option === "add"){
    let ans = await inquirer.prompt([{
        type: "input",
        name: "user_ans",
        message:'write something to add in the task list. '
    }]);

    if(ans.user_ans !== ''){
        todo_list.push(ans.user_ans);
        console.log(todo_list);
    }else{
        console.log('please write something in the todo list');
    }
}
// ..........................Remove..........................
else if(options.user_option === "remove"){
    let remove_choise = await inquirer.prompt([{
        type: "input",
        name: "Remove_item",
        message: 'select item to remove',
        choices: todo_list
    }]);
    let index_to_remove = todo_list.indexOf(remove_choise.Remove_item);
    if(index_to_remove >= 0){
        todo_list.splice(index_to_remove, 1);
        console.log('you removed: ', remove_choise.Remove_item);
        console.log(todo_list);
    }

}
// .....................................Confirmation...............................
let user_answer = await inquirer.prompt([{
    type: "confirm",
    name: 'selection',
    message: 'Do you want to Continue?',
    default: true
    
}])
if(user_answer.selection === false){
    while_condition = false;
}

}