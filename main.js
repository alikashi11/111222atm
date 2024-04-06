import inquirer from "inquirer";
let myBalnace = 10000;
let myPIN = 1111;
let PinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "enter your Pin",
        type: "number",
    }
]);
if (PinAnswer.Pin === myPIN) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select opition",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalnace -= amountAns.amount;
        console.log("your remaning balance is: " + myBalnace);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalnace);
    }
}
else {
    console.log("Incorrect pin number");
}
