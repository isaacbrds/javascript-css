function bin2Dec(input){
    let result = 0;
    let count = 0;
    for(let i = input.length - 1; i >= 0; i--){
        result += input.charAt(count) * 2 ** i;
        count++;
    }

    document.getElementById('result').innerHTML = `<p>O resultado da conversão foi: ${result}</p>`;
    document.getElementById('entry').value = ''
}

function binCalculate()
{
    
    let entry = document.getElementById('entry').value;
    bin2Dec(entry)
}

document.getElementById('btnCalcula').addEventListener("click", function (event){
    event.preventDefault();
    binCalculate();
})