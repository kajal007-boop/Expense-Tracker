alert("JS is running");
const titleInput = 
document.getElementById("title");
const amountInput =
document.getElementById("amount");
const dateInput =
document.getElementById("date");
const addBtn =
document.getElementById("addBtn");
const expenseList =
document.getElementById("expenseList");
const totalEl =
document.getElementById("total");

let expenses = [];
let total = 0;

addBtn.addEventListener("click",function () {
    
    const title = titleInput.value;
    const amount = parseInt(amountInput.value);
    const date = dateInput.value;

    if(title === ""|| isNaN(amount) ||
     date === "") {
     alert("Fill all fields");
   return;
}
    const expense = {title,amount,date};
    
expenses.push(expense);
total += amount;
renderExpenses() ;
clearInputs();
});


function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li =
        document.createElement("li");
        li.innerHTML =`
        ${expense.title} - ₹$
        {expense.amount}
        <button
        onclick="deleteExpense(${index})">X</button>
       `;
    expenseList.appendChild(li);
    });
    totalEl.textContent = total;
}
    function deleteExpense(index) {
        total -= expenses[index].amount;
        expenses.splice(index, 1);
        renderExpenses();
    }
    
    function clearInputs() {
        titleInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
    }

    

