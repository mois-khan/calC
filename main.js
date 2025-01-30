console.log('Hello World!');

// Numbers

const one = document.getElementById("one");
const two = document.getElementById("two");

//other buttons 

const displayField = document.getElementById("display-field");
const enter = document.getElementById("equal");
const btns = document.querySelectorAll(".btn");
const allClear = document.getElementById("clear");
const del = document.getElementById("delete");

// Operators

const plus = document.getElementById("plus");



// performing calculations

let string = displayField.innerHTML;
let output;

        enter.addEventListener('click', (e)=>{
        if (e.target.innerText == "Enter") {
            
            try {
                let input = displayField.value;
            output = eval(input);
            
            displayField.value = output;
        }
             catch (e) {
                displayField.value = "Invalid input"
            }
        
    }
    })  
    

// displaying entered values in result box

btns.forEach(btn => {
    btn.addEventListener("click", function(){
        if (displayField.value == "") {
            displayField.value = this.textContent;
        }
        
        else {
            displayField.value += "" + this.textContent;
        }
    })
})


// ClearAll button

allClear.addEventListener("click", function(){
    displayField.value = "";
})


// delete button

del.addEventListener('click', (e)=>{
    let input = displayField.value;
    displayField.value = input.slice(0,-2);
})
