var Checker = 0, RightChecker = 0, Num1, Num2;

function Solving() {
    if (Checker == 4) {
        Reload()
        alert(Checker + "" + RightChecker)
        alert("Ваша результотивнасть " + RightChecker / (Checker) * 100 + "%")

    } else {
        if ($("#EnteringNumber").val() == Num1 + Num2) {
            RightChecker += 1
            Checker += 1;

            Clear()

        } else {
            Checker += 1;

            Clear()

        }
    }
}

function Clear() {
    GenerateTwoNumbers()
    $("#EnteringNumber").val("")

}

function GenerateTwoNumbers(message) {
    Num1 = Math.round(Math.random() * 10)
    Num2 = Math.round(Math.random() * 10)
    $("#CheckerOfText").css({"display": "flex", "align-items": "center"})
    $("#CheckerOfText").text(Num1 + "+" + Num2 + "=")
    $('#Start').css('display', 'none')
    if (Checker != 4) {
        $("#EnteringNumber").css({"display": "flex", "align-items": "center"})
    } else {
        Solving()
        $("#Start").css({"display": "flex", "align-items": "center"})
        $("#EnteringNumber").css({"display": "none"})
        $("#CheckerOfText").css({'display': 'none'})
        Checker=0
        RightChecker=0
    }
}

function Reload() {
    $("#EnteringNumber").css({'display': 'none'})
    $("#CheckerOfText").css({'display': 'none'})
}
