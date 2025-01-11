function calculateFees(event) {
    event.preventDefault();
    var program = document.forms["feeCalculatorForm"]['program'].value;
    var level = document.forms["feeCalculatorForm"]['course'].value;
    var cost = document.forms["feeCalculatorForm"]['course'].options[document.forms["feeCalculatorForm"]['course'].selectedIndex].getAttribute('costhour');
    var credit = document.forms["feeCalculatorForm"]['credits'].value;
    var scholar = document.forms["feeCalculatorForm"]['scholarship'].value;
    if (!program) {
        document.getElementById("result").innerHTML = "Please select a program.";
        return;
    }
    if (!level) {
        document.getElementById("result").innerHTML = "Please select a course.";
        return;
    }
    if (credit <= 2 || credit > 130) {
        document.getElementById("result").innerHTML = "Please enter a valid number of credit hours (3-130).";
        return;
    }
    if (scholar < 0 || scholar > 100) {
        document.getElementById("result").innerHTML = "Please enter a valid scholarship percentage (0-100).";
        return;
    }
    if (program == "bsc"){
        var totalCost = (cost * credit) - ((scholar * credit * cost) / 100);
    }
    else{
        var totalCost = ((cost * credit) - ((scholar * credit * cost) / 100))*1.5;
    }
    document.getElementById("result").innerHTML = `
        <div class="alert alert-success">
            <h5 class="alert-heading">Calculation Successful!</h5>
            <p>The total cost for the program is: <strong> AU$${totalCost.toFixed(2)}</strong></p>
        </div>`;
}