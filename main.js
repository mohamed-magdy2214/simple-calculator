
let output = document.getElementById('output');

function display(num){
    output.value += num;
}

function Delete(){
    output.value =  output.value.slice(0,-1);
}

function Clear() {
    output.value = '';
}

function calc() {
    try {
        output.value = eval(output.value);
    }
    catch(err){
        output.value = 'Error';
    }
}