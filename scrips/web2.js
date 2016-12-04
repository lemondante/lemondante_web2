/**
 * Created by youweikang on 2016/11/27.
 */
var number = document.getElementById("screen");
var cal = "";
var tempcal = "";
var numbefore = 0;
var ifcal = false;
var ifanswer = false;

function show(num) {
    switch (num) {
        case "+":
            cal = "+";

            if (ifcal == true && ifanswer == false) {
                answer();
            }
            tempcal = cal;
            ifanswer = false;
            break;

        case "-":
            cal = "-";

            if (ifcal == true && ifanswer == false) {
                answer();
            }
            tempcal = cal;
            ifanswer = false;
            break;

        case "*":
            cal = "*";

            if (ifcal == true && ifanswer == false) {
                answer();
            }
            tempcal = cal;
            ifanswer = false;
            break;

        case "/":
            cal = "/";

            if (ifcal == true && ifanswer == false) {
                answer();
            }
            tempcal = cal;
            ifanswer = false;
            break;

        default:
            if (number.value == "") {
                number.value += num;
            }
            else if (cal != "" && ifcal == false) {
                numbefore = number.value;
                number.value = "";
                number.value += num;
                cal = "";
                ifcal = true;
            }
            else if (cal != "" && ifcal == true) {

                numbefore = number.value;
                number.value = "";
                number.value += num;
                cal = "";
            }
            else {
                number.value += num;
            }
    }
}
function reclear() {
    number.value = "";
    cal = "";
    tempcal = "";
    ifcal = false;
    numbefore = 0;
    ifanswer = false;
}
function answer() {
    switch (tempcal) {
        case "+":
            number.value = Number(number.value) + Number(numbefore);
            break;

        case "-":
            number.value = Number(numbefore) - Number(number.value);
            break;

        case "*":
            number.value = Number(number.value) * Number(numbefore);
            break;

        case "/":
            number.value = Number(numbefore) / Number(number.value);
            break;
    }
    ifanswer = true;
}