let form = document.forms[0] 
 
let regEx = { 
    name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 
    birth: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, 
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/, 
    adress: /^(\s|\w)\w*\W*$/,
    code: /^\d+$/, 
    city: /^(\s|\w)\w*\W*$/,  
} 
 
form.onsubmit = (e) => { 
    e.preventDefault() 
 
    let obj = {} 
    let fn = new FormData(form) 
 
    fn.forEach((value, key) => { 
        obj[key] = value 
    }) 
    
    validate()

    error = 0
    succes = 0
} 


let filledbox = document.querySelector('.filled')
let unfilledbox = document.querySelector('.need_to_fill')

let error = 0
let succes = 0
function validate() { 
    let inputs = document.querySelectorAll('.required') 
     
    inputs.forEach(inp => { 
        let name = inp.getAttribute('name') 
        if (regEx[name].test(inp.value)) { 
            inp.style.border = '1px solid green'
            inp.previousElementSibling.style.color = 'green' 
            inp.previousElementSibling.firstElementChild.style.display = 'none'
            succes++
        } else { 
            inp.style.border = '1px solid red' 
            inp.previousElementSibling.style.color = 'red' 
            inp.previousElementSibling.firstElementChild.style.display = 'inline'
            error++
        } 
        filledbox.innerHTML = succes
        unfilledbox.innerHTML = error
    }) 
} 

let agreementCheckbox = document.getElementById('agreement');
let submitButton = document.querySelector('button');

agreementCheckbox.addEventListener('change', function() {
  submitButton.disabled = !this.checked;
});