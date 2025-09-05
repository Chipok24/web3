const output_1 = document.getElementById("output_1");
const output_2 = document.getElementById("output_2");
const output_3 = document.getElementById("output_3");

const calculation = document.getElementById("calculation");


calculation.addEventListener("click", function () {
    const number_visitors = parseFloat(document.getElementById("input_3").value);
    const cheque = parseFloat(document.getElementById("input_1").value);
    const discount = parseFloat(document.getElementById("input_2").value);

    if (number_visitors <= 0 || number_visitors < 0 || cheque <= 0){
        alert("Ошибка, некоректные данные");
        output_1.textContent = `Чаевые:`;
        output_2.textContent = `Общая сумма:`;
        output_3.textContent = `С каждого:`;
    }
    else{
        const tip = cheque*discount/100;
        output_1.textContent = `Чаевые: ${tip.toFixed(2)} ₽`;
        output_2.textContent = `Общая сумма: ${(cheque + tip).toFixed(2)} ₽`;
        output_3.textContent = `С каждого: ${((cheque + tip) / number_visitors).toFixed(2)} ₽`;
    }
});