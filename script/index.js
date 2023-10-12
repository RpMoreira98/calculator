const button = document.querySelectorAll('.number');
const clear = document.getElementById('clear');
const back = document.querySelector('#back');
const resultValue = document.getElementById('result');

//Event of numbers appearing on the screen.
button.forEach((e) => {
    e.addEventListener('click', () => {
        ((num) => {
            const value = document.getElementById('display');
            value.innerHTML += num;
        })(e.innerHTML);
    })
})

//Clear screen event.
clear.addEventListener('click', () => {
    (() => {
        const display = document.getElementById('display');
        display.innerHTML = '';
    })();
})

//Event of erasing a number from the screen.
back.addEventListener('click', () => {
    (() => {
        const display = document.getElementById('display');
        display.innerHTML = display.innerHTML ? display.innerHTML.slice(0, display.innerHTML.length - 1) : display.innerHTML = '';
    })();
});



//Calculation event.
resultValue.addEventListener('click', () => {

    (() => {
        let result = document.getElementById('display');
        if (result) {
            try {
                const resultado = eval(display.innerHTML)
                if ([Infinity, NaN].includes(resultado)) {
                    throw new Error('sadasdas');
                };
                result.innerHTML = resultado;
            } catch (error) {
                result.innerHTML = 'ERRO';
                setTimeout(() => {
                    result.innerHTML = '0';
                }, 500)
            }
        };
    })();
})





