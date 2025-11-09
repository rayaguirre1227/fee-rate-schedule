var masterFrame = document.getElementById("masterFrame").contentWindow;

var rateAmount1 = document.getElementById("fee-rate1");
var codeSelect1 = document.getElementById("codeSelection1");
var insuranceSelect1 = document.getElementById("insuranceSelection1");

var rateAmount2 = document.getElementById("fee-rate2");
var codeSelect2 = document.getElementById("codeSelection2");
var insuranceSelect2 = document.getElementById("insuranceSelection2");

var rateAmount3 = document.getElementById("fee-rate3");
var codeSelect3 = document.getElementById("codeSelection3");
var insuranceSelect3 = document.getElementById("insuranceSelection3");

var rateAmount4 = document.getElementById("fee-rate4");
var codeSelect4 = document.getElementById("codeSelection4");
var insuranceSelect4 = document.getElementById("insuranceSelection4");

var rateAmount5 = document.getElementById("fee-rate5");
var codeSelect5 = document.getElementById("codeSelection5");
var insuranceSelect5 = document.getElementById("insuranceSelection5");

var rateAmount6 = document.getElementById("fee-rate6");
var codeSelect6 = document.getElementById("codeSelection6");
var insuranceSelect6 = document.getElementById("insuranceSelection6");

var rateAmount7 = document.getElementById("fee-rate7");
var codeSelect7 = document.getElementById("codeSelection7");
var insuranceSelect7 = document.getElementById("insuranceSelection7");

var rateAmount8 = document.getElementById("fee-rate8");
var codeSelect8 = document.getElementById("codeSelection8");
var insuranceSelect8 = document.getElementById("insuranceSelection8");

var rateAmount9 = document.getElementById("fee-rate9");
var codeSelect9 = document.getElementById("codeSelection9");
var insuranceSelect9 = document.getElementById("insuranceSelection9");

var rateAmount10 = document.getElementById("fee-rate10");
var codeSelect10 = document.getElementById("codeSelection10");
var insuranceSelect10 = document.getElementById("insuranceSelection10");

var rateAmount11 = document.getElementById("fee-rate11");
var codeSelect11 = document.getElementById("codeSelection11");
var insuranceSelect11 = document.getElementById("insuranceSelection11");

var rateAmount12 = document.getElementById("fee-rate12");
var codeSelect12 = document.getElementById("codeSelection12");
var insuranceSelect12 = document.getElementById("insuranceSelection12");



codeSelect1.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("change",updateRate);

codeSelect2.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect3.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect4.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect5.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect6.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect7.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect8.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect9.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect10.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect11.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

codeSelect12.addEventListener("change",updateRate) &
insuranceSelect1.addEventListener("input",updateRate);

function updateRate() {

        var selectedCode1 = codeSelect1.value;
        var selectedInsurance1 = insuranceSelect1.value;

        var selectedcode2 = codeSelect2.value;
        var selectedInsurance2 = insuranceSelect2.value;

        var selectedCode3 = codeSelect3.value;
        var selectedInsurance3 = insuranceSelect3.value;

        var selectedCode4 = codeSelect4.value;
        var selectedInsurance4 = insuranceSelect4.value;

        var selectedCode5 = codeSelect5.value;
        var selectedInsurance5 = insuranceSelect5.value;

        var selectedCode6 = codeSelect6.value;
        var selectedInsurance6 = insuranceSelect6.value;

        var selectedCode7 = codeSelect7.value;
        var selectedInsurance7 = insuranceSelect7.value;
        
        var selectedCode8 = codeSelect8.value;
        var selectedInsurance8 = insuranceSelect8.value;

        var selectedCode9 = codeSelect9.value;
        var selectedInsurance9 = insuranceSelect9.value;

        var selectedCode10 = codeSelect10.value;
        var selectedInsurance10 = insuranceSelect10.value;

        var selectedCode11 = codeSelect11.value;
        var selectedInsurance11 = insuranceSelect11.value;

        var selectedCode12 = codeSelect12.value;
        var selectedInsurance12 = insuranceSelect12.value;

        var chosenInsurance = insuranceSelect1.value;

        insuranceSelect2.value = chosenInsurance;
        insuranceSelect3.value = chosenInsurance;
        insuranceSelect4.value = chosenInsurance;
        insuranceSelect5.value = chosenInsurance;
        insuranceSelect6.value = chosenInsurance;
        insuranceSelect7.value = chosenInsurance;
        insuranceSelect8.value = chosenInsurance;
        insuranceSelect9.value = chosenInsurance;
        insuranceSelect10.value = chosenInsurance;
        insuranceSelect11.value = chosenInsurance;
        insuranceSelect12.value = chosenInsurance;


        // 1ST ROW OF DROPDOWNS
        // 1ST ROW OF DROPDOWNS
        // 1ST ROW OF DROPDOWNS


            // SET FOR CODE CODE 1

        
        if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode1 === "code1" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode1 === "code2" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode1 === "code3" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode1 === "code4" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode1 === "code5" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode1 === "code6" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode1 === "code7" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode1 === "code8" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode1 === "code9" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode1 === "code10" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode1 === "code11" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode1 === "code12" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode1 === "code13" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode1 === "code14" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode1 === "code15" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode1 === "code16" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode1 === "code17" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode1 === "code18" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode1 === "code19" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode1 === "code20" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode1 === "code21" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode1 === "code22" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode1 === "code23" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode1 === "code24" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode1 === "code25" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode1 === "code26" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode1 === "code27" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode1 === "code28" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode1 === "code29" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode1 === "code30" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode1 === "code31" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode1 === "code32" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode1 === "code33" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode1 === "code34" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode1 === "code35" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode1 === "code36" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode1 === "code37" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode1 === "code38" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode1 === "code39" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode1 === "code40" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode1 === "code41" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode1 === "code42" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode1 === "code43" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode1 === "code44" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode1 === "code45" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode1 === "code46" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode1 === "code47" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode1 === "code48" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode1 === "code49" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option1" ) {
            rateAmount1.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option2") {
            rateAmount1.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option3") {
            rateAmount1.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option4") {
            rateAmount1.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option5") {
            rateAmount1.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option6") {
            rateAmount1.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode1 === "code50" & selectedInsurance1 === "insurance-option7") {
            rateAmount1.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode1 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount1.value = "$0.00"
        }

        // 2ND ROW OF DROPDOWNS
        // 2ND ROW OF DROPDOWNS
        // 2ND ROW OF DROPDOWNS

            // SET FOR CODE CODE 1
        
        if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedcode2 === "code1" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedcode2 === "code2" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedcode2 === "code3" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedcode2 === "code4" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedcode2 === "code5" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedcode2 === "code6" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedcode2 === "code7" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedcode2 === "code8" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedcode2 === "code9" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedcode2 === "code10" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedcode2 === "code11" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedcode2 === "code12" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedcode2 === "code13" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedcode2 === "code14" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedcode2 === "code15" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedcode2 === "code16" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedcode2 === "code17" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedcode2 === "code18" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedcode2 === "code19" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedcode2 === "code20" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedcode2 === "code21" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedcode2 === "code22" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedcode2 === "code23" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedcode2 === "code24" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedcode2 === "code25" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedcode2 === "code26" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedcode2 === "code27" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedcode2 === "code28" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedcode2 === "code29" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedcode2 === "code30" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedcode2 === "code31" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedcode2 === "code32" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedcode2 === "code33" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedcode2 === "code34" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedcode2 === "code35" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedcode2 === "code36" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedcode2 === "code37" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedcode2 === "code38" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedcode2 === "code39" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedcode2 === "code40" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedcode2 === "code41" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedcode2 === "code42" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedcode2 === "code43" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedcode2 === "code44" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedcode2 === "code45" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedcode2 === "code46" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedcode2 === "code47" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedcode2 === "code48" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedcode2 === "code49" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option1" ) {
            rateAmount2.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option2") {
            rateAmount2.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option3") {
            rateAmount2.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option4") {
            rateAmount2.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option5") {
            rateAmount2.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option6") {
            rateAmount2.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedcode2 === "code50" & selectedInsurance2 === "insurance-option7") {
            rateAmount2.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedcode2 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount2.value = "$0.00"
        }


        // 3RD ROW OF DROPDOWNS
        // 3RD ROW OF DROPDOWNS
        // 3RD ROW OF DROPDOWNS
        
        
        if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode3 === "code1" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode3 === "code2" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode3 === "code3" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode3 === "code4" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode3 === "code5" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode3 === "code6" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode3 === "code7" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode3 === "code8" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode3 === "code9" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode3 === "code10" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode3 === "code11" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode3 === "code12" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode3 === "code13" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode3 === "code14" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode3 === "code15" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode3 === "code16" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode3 === "code17" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode3 === "code18" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode3 === "code19" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode3 === "code20" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode3 === "code21" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode3 === "code22" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode3 === "code23" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode3 === "code24" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode3 === "code25" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode3 === "code26" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode3 === "code27" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode3 === "code28" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode3 === "code29" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode3 === "code30" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode3 === "code31" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode3 === "code32" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode3 === "code33" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode3 === "code34" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode3 === "code35" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode3 === "code36" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode3 === "code37" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode3 === "code38" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode3 === "code39" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode3 === "code40" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode3 === "code41" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode3 === "code42" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode3 === "code43" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode3 === "code44" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode3 === "code45" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode3 === "code46" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode3 === "code47" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode3 === "code48" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode3 === "code49" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option1" ) {
            rateAmount3.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option2") {
            rateAmount3.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option3") {
            rateAmount3.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option4") {
            rateAmount3.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option5") {
            rateAmount3.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option6") {
            rateAmount3.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode3 === "code50" & selectedInsurance3 === "insurance-option7") {
            rateAmount3.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode3 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount3.value = "$0.00"
        }


        // 4TH ROW OF DROPDOWNS
        // 4TH ROW OF DROPDOWNS
        // 4TH ROW OF DROPDOWNS
        
        
        if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode4 === "code1" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode4 === "code2" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode4 === "code3" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode4 === "code4" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode4 === "code5" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode4 === "code6" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode4 === "code7" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode4 === "code8" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode4 === "code9" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode4 === "code10" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode4 === "code11" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode4 === "code12" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode4 === "code13" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode4 === "code14" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode4 === "code15" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode4 === "code16" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode4 === "code17" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode4 === "code18" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode4 === "code19" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode4 === "code20" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode4 === "code21" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode4 === "code22" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode4 === "code23" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode4 === "code24" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode4 === "code25" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode4 === "code26" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode4 === "code27" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode4 === "code28" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode4 === "code29" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode4 === "code30" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode4 === "code31" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode4 === "code32" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode4 === "code33" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode4 === "code34" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode4 === "code35" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode4 === "code36" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode4 === "code37" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode4 === "code38" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode4 === "code39" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode4 === "code40" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode4 === "code41" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode4 === "code42" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode4 === "code43" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode4 === "code44" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode4 === "code45" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode4 === "code46" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode4 === "code47" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode4 === "code48" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode4 === "code49" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option1" ) {
            rateAmount4.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option2") {
            rateAmount4.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option3") {
            rateAmount4.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option4") {
            rateAmount4.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option5") {
            rateAmount4.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option6") {
            rateAmount4.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode4 === "code50" & selectedInsurance4 === "insurance-option7") {
            rateAmount4.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode4 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount4.value = "$0.00"
        }
        // 5TH ROW OF DROPDOWNS
        // 5TH ROW OF DROPDOWNS
        // 5TH ROW OF DROPDOWNS
        
        
        if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode5 === "code1" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode5 === "code2" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode5 === "code3" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode5 === "code4" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode5 === "code5" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode5 === "code6" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode5 === "code7" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode5 === "code8" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode5 === "code9" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode5 === "code10" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode5 === "code11" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode5 === "code12" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode5 === "code13" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode5 === "code14" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode5 === "code15" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode5 === "code16" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode5 === "code17" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode5 === "code18" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode5 === "code19" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode5 === "code20" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode5 === "code21" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode5 === "code22" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode5 === "code23" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode5 === "code24" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode5 === "code25" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode5 === "code26" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode5 === "code27" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode5 === "code28" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode5 === "code29" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode5 === "code30" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode5 === "code31" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode5 === "code32" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode5 === "code33" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode5 === "code34" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode5 === "code35" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode5 === "code36" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode5 === "code37" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode5 === "code38" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode5 === "code39" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode5 === "code40" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode5 === "code41" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode5 === "code42" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode5 === "code43" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode5 === "code44" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode5 === "code45" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode5 === "code46" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode5 === "code47" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode5 === "code48" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode5 === "code49" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option1" ) {
            rateAmount5.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option2") {
            rateAmount5.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option3") {
            rateAmount5.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option4") {
            rateAmount5.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option5") {
            rateAmount5.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option6") {
            rateAmount5.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode5 === "code50" & selectedInsurance5 === "insurance-option7") {
            rateAmount5.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode5 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount5.value = "$0.00"
        }

        // 6TH ROW OF DROPDOWNS
        // 6TH ROW OF DROPDOWNS
        // 6TH ROW OF DROPDOWNS
        
        
        if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode6 === "code1" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode6 === "code2" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode6 === "code3" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode6 === "code4" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode6 === "code5" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode6 === "code6" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode6 === "code7" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode6 === "code8" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode6 === "code9" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode6 === "code10" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode6 === "code11" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode6 === "code12" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode6 === "code13" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode6 === "code14" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode6 === "code15" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode6 === "code16" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode6 === "code17" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode6 === "code18" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode6 === "code19" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode6 === "code20" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode6 === "code21" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode6 === "code22" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode6 === "code23" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode6 === "code24" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode6 === "code25" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode6 === "code26" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode6 === "code27" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode6 === "code28" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode6 === "code29" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode6 === "code30" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode6 === "code31" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode6 === "code32" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode6 === "code33" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode6 === "code34" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode6 === "code35" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode6 === "code36" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode6 === "code37" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode6 === "code38" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode6 === "code39" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode6 === "code40" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode6 === "code41" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode6 === "code42" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode6 === "code43" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode6 === "code44" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode6 === "code45" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode6 === "code46" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode6 === "code47" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode6 === "code48" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode6 === "code49" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option1" ) {
            rateAmount6.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option2") {
            rateAmount6.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option3") {
            rateAmount6.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option4") {
            rateAmount6.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option5") {
            rateAmount6.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option6") {
            rateAmount6.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode6 === "code50" & selectedInsurance6 === "insurance-option7") {
            rateAmount6.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode6 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount6.value = "$0.00"
        }

        // 7TH ROW OF DROPDOWNS
        // 7TH ROW OF DROPDOWNS
        // 7TH ROW OF DROPDOWNS
    
        
        if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode7 === "code1" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode7 === "code2" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode7 === "code3" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode7 === "code4" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode7 === "code5" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode7 === "code6" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode7 === "code7" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode7 === "code8" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode7 === "code9" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode7 === "code10" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode7 === "code11" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode7 === "code12" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode7 === "code13" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode7 === "code14" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode7 === "code15" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode7 === "code16" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode7 === "code17" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode7 === "code18" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode7 === "code19" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode7 === "code20" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode7 === "code21" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode7 === "code22" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode7 === "code23" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode7 === "code24" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode7 === "code25" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode7 === "code26" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode7 === "code27" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode7 === "code28" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode7 === "code29" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode7 === "code30" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode7 === "code31" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode7 === "code32" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode7 === "code33" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode7 === "code34" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode7 === "code35" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode7 === "code36" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode7 === "code37" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode7 === "code38" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode7 === "code39" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode7 === "code40" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode7 === "code41" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode7 === "code42" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode7 === "code43" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode7 === "code44" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode7 === "code45" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode7 === "code46" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode7 === "code47" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode7 === "code48" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode7 === "code49" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option1" ) {
            rateAmount7.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option2") {
            rateAmount7.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option3") {
            rateAmount7.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option4") {
            rateAmount7.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option5") {
            rateAmount7.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option6") {
            rateAmount7.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode7 === "code50" & selectedInsurance7 === "insurance-option7") {
            rateAmount7.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode7 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount7.value = "$0.00"
        }

        // 8TH ROW OF DROPDOWNS
        // 8TH ROW OF DROPDOWNS
        // 8TH ROW OF DROPDOWNS
    
        
        if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode8 === "code1" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode8 === "code2" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode8 === "code3" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode8 === "code4" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode8 === "code5" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode8 === "code6" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode8 === "code7" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode8 === "code8" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode8 === "code9" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode8 === "code10" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode8 === "code11" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode8 === "code12" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode8 === "code13" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode8 === "code14" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode8 === "code15" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode8 === "code16" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode8 === "code17" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode8 === "code18" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode8 === "code19" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode8 === "code20" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode8 === "code21" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode8 === "code22" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode8 === "code23" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode8 === "code24" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode8 === "code25" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode8 === "code26" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode8 === "code27" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode8 === "code28" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode8 === "code29" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode8 === "code30" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode8 === "code31" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode8 === "code32" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode8 === "code33" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode8 === "code34" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode8 === "code35" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode8 === "code36" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode8 === "code37" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode8 === "code38" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode8 === "code39" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode8 === "code40" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode8 === "code41" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode8 === "code42" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode8 === "code43" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode8 === "code44" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode8 === "code45" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode8 === "code46" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode8 === "code47" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode8 === "code48" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode8 === "code49" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option1" ) {
            rateAmount8.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option2") {
            rateAmount8.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option3") {
            rateAmount8.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option4") {
            rateAmount8.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option5") {
            rateAmount8.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option6") {
            rateAmount8.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode8 === "code50" & selectedInsurance8 === "insurance-option7") {
            rateAmount8.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode8 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount8.value = "$0.00"
        }
        // 9TH ROW OF DROPDOWNS
        // 9TH ROW OF DROPDOWNS
        // 9TH ROW OF DROPDOWNS
    
        
        if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode9 === "code1" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode9 === "code2" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode9 === "code3" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode9 === "code4" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode9 === "code5" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode9 === "code6" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode9 === "code7" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode9 === "code8" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode9 === "code9" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode9 === "code10" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode9 === "code11" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode9 === "code12" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode9 === "code13" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode9 === "code14" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode9 === "code15" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode9 === "code16" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode9 === "code17" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode9 === "code18" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode9 === "code19" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode9 === "code20" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode9 === "code21" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode9 === "code22" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode9 === "code23" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode9 === "code24" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode9 === "code25" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode9 === "code26" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode9 === "code27" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode9 === "code28" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode9 === "code29" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode9 === "code30" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode9 === "code31" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode9 === "code32" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode9 === "code33" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode9 === "code34" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode9 === "code35" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode9 === "code36" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode9 === "code37" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode9 === "code38" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode9 === "code39" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode9 === "code40" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode9 === "code41" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode9 === "code42" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode9 === "code43" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode9 === "code44" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode9 === "code45" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode9 === "code46" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode9 === "code47" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode9 === "code48" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode9 === "code49" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option1" ) {
            rateAmount9.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option2") {
            rateAmount9.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option3") {
            rateAmount9.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option4") {
            rateAmount9.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option5") {
            rateAmount9.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option6") {
            rateAmount9.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode9 === "code50" & selectedInsurance9 === "insurance-option7") {
            rateAmount9.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode9 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount9.value = "$0.00"
        }

        // 10TH ROW OF DROPDOWNS
        // 10TH ROW OF DROPDOWNS
        // 10TH ROW OF DROPDOWNS
    
        
        if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode10 === "code1" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode10 === "code2" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode10 === "code3" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode10 === "code4" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode10 === "code5" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode10 === "code6" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode10 === "code7" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode10 === "code8" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode10 === "code9" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode10 === "code10" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode10 === "code11" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode10 === "code12" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode10 === "code13" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode10 === "code14" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode10 === "code15" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode10 === "code16" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode10 === "code17" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode10 === "code18" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode10 === "code19" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode10 === "code20" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode10 === "code21" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode10 === "code22" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode10 === "code23" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode10 === "code24" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode10 === "code25" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode10 === "code26" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode10 === "code27" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode10 === "code28" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode10 === "code29" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode10 === "code30" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode10 === "code31" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode10 === "code32" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode10 === "code33" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode10 === "code34" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode10 === "code35" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode10 === "code36" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode10 === "code37" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode10 === "code38" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode10 === "code39" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode10 === "code40" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode10 === "code41" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode10 === "code42" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode10 === "code43" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode10 === "code44" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode10 === "code45" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode10 === "code46" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode10 === "code47" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode10 === "code48" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode10 === "code49" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option1" ) {
            rateAmount10.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option2") {
            rateAmount10.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option3") {
            rateAmount10.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option4") {
            rateAmount10.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option5") {
            rateAmount10.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option6") {
            rateAmount10.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode10 === "code50" & selectedInsurance10 === "insurance-option7") {
            rateAmount10.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode10 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount10.value = "$0.00"
        }

        // 11TH ROW OF DROPDOWNS
        // 11TH ROW OF DROPDOWNS
        // 11TH ROW OF DROPDOWNS
    
        
        if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode11 === "code1" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode11 === "code2" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode11 === "code3" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode11 === "code4" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode11 === "code5" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode11 === "code6" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode11 === "code7" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode11 === "code8" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode11 === "code9" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode11 === "code10" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode11 === "code11" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode11 === "code12" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode11 === "code13" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode11 === "code14" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode11 === "code15" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode11 === "code16" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode11 === "code17" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode11 === "code18" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode11 === "code19" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode11 === "code20" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode11 === "code21" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode11 === "code22" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode11 === "code23" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode11 === "code24" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode11 === "code25" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode11 === "code26" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode11 === "code27" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode11 === "code28" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode11 === "code29" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode11 === "code30" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode11 === "code31" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode11 === "code32" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode11 === "code33" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode11 === "code34" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode11 === "code35" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode11 === "code36" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode11 === "code37" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode11 === "code38" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode11 === "code39" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode11 === "code40" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode11 === "code41" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode11 === "code42" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode11 === "code43" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode11 === "code44" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode11 === "code45" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode11 === "code46" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode11 === "code47" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode11 === "code48" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode11 === "code49" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option1" ) {
            rateAmount11.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option2") {
            rateAmount11.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option3") {
            rateAmount11.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option4") {
            rateAmount11.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option5") {
            rateAmount11.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option6") {
            rateAmount11.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode11 === "code50" & selectedInsurance11 === "insurance-option7") {
            rateAmount11.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode11 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount11.value = "$0.00"
        }

        // 12TH ROW OF DROPDOWNS
        // 12TH ROW OF DROPDOWNS
        // 12TH ROW OF DROPDOWNS
    
        
        if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row1-3").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row1-4").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row1-5").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row1-6").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row1-7").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row1-8").innerHTML;
        }
        else if ( selectedCode12 === "code1" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row1-9").innerHTML;
        }

            // CODE SET FOR CODE 2

        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row2-3").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row2-4").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row2-5").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row2-6").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row2-7").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row2-8").innerHTML;
        }
        else if ( selectedCode12 === "code2" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row2-9").innerHTML;
        }

            // CODE SET FOR CODE 3

        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row3-3").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row3-4").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row3-5").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row3-6").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row3-7").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row3-8").innerHTML;
        }
        else if ( selectedCode12 === "code3" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row3-9").innerHTML;
        }

            // CODE SET FOR CODE 4

        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row4-3").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row4-4").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row4-5").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row4-6").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row4-7").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row4-8").innerHTML;
        }
        else if ( selectedCode12 === "code4" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row4-9").innerHTML;
        }

            // CODE SET FOR CODE 5

        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row5-3").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row5-4").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row5-5").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row5-6").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row5-7").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row5-8").innerHTML;
        }
        else if ( selectedCode12 === "code5" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row5-9").innerHTML;
        }

            // CODE SET FOR CODE 6

        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row6-3").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row6-4").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row6-5").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row6-6").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row6-7").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row6-8").innerHTML;
        }
        else if ( selectedCode12 === "code6" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row6-9").innerHTML;
        }

            // CODE SET FOR CODE 7

        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row7-3").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row7-4").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row7-5").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row7-6").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row7-7").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row7-8").innerHTML;
        }
        else if ( selectedCode12 === "code7" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row7-9").innerHTML;
        }

            // CODE SET FOR CODE 8

        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row8-3").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row8-4").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row8-5").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row8-6").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row8-7").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row8-8").innerHTML;
        }
        else if ( selectedCode12 === "code8" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row8-9").innerHTML;
        }

            // CODE SET FOR CODE 9 

        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row9-3").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row9-4").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row9-5").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row9-6").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row9-7").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row9-8").innerHTML;
        }
        else if ( selectedCode12 === "code9" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row9-9").innerHTML;
        }

            // CODE SET FOR CODE 10 

        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row10-3").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row10-4").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row10-5").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row10-6").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row10-7").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row10-8").innerHTML;
        }
        else if ( selectedCode12 === "code10" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row10-9").innerHTML;
        }

            // CODE SET FOR CODE 11

        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row11-3").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row11-4").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row11-5").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row11-6").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row11-7").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row11-8").innerHTML;
        }
        else if ( selectedCode12 === "code11" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row11-9").innerHTML;
        }

            // CODE SET FOR CODE 12

        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row12-3").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row12-4").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row12-5").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row12-6").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row12-7").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row12-8").innerHTML;
        }
        else if ( selectedCode12 === "code12" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row12-9").innerHTML;
        }

            // CODE SET FOR CODE 13 

        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row13-3").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row13-4").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row13-5").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row13-6").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row13-7").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row13-8").innerHTML;
        }
        else if ( selectedCode12 === "code13" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row13-9").innerHTML;
        }

            // CODE SET FOR CODE 14 

        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row14-3").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row14-4").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row14-5").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row14-6").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row14-7").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row14-8").innerHTML;
        }
        else if ( selectedCode12 === "code14" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row14-9").innerHTML;
        }

            // CODE SET FOR CODE 15 

        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row15-3").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row15-4").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row15-5").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row15-6").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row15-7").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row15-8").innerHTML;
        }
        else if ( selectedCode12 === "code15" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row15-9").innerHTML;
        }

            // CODE SET FOR CODE 16 

        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row16-3").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row16-4").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row16-5").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row16-6").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row16-7").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row16-8").innerHTML;
        }
        else if ( selectedCode12 === "code16" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row16-9").innerHTML;
        }

            // CODE SET FOR CODE 17 

        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row17-3").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row17-4").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row17-5").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row17-6").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row17-7").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row17-8").innerHTML;
        }
        else if ( selectedCode12 === "code17" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row17-9").innerHTML;
        }

            // CODE SET FOR CODE 18

        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row18-3").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row18-4").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row18-5").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row18-6").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row18-7").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row18-8").innerHTML;
        }
        else if ( selectedCode12 === "code18" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row18-9").innerHTML;
        }

            // CODE SET FOR CODE 19

        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row19-3").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row19-4").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row19-5").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row19-6").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row19-7").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row19-8").innerHTML;
        }
        else if ( selectedCode12 === "code19" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row19-9").innerHTML;
        }

            // CODE SET FOR CODE 20

        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row20-3").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row20-4").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row20-5").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row20-6").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row20-7").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row20-8").innerHTML;
        }
        else if ( selectedCode12 === "code20" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row20-9").innerHTML;
        }

            // CODE SET FOR CODE 21

        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row21-3").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row21-4").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row21-5").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row21-6").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row21-7").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row21-8").innerHTML;
        }
        else if ( selectedCode12 === "code21" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row21-9").innerHTML;
        }

            // CODE SET FOR CODE 22

        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row22-3").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row22-4").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row22-5").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row22-6").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row22-7").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row22-8").innerHTML;
        }
        else if ( selectedCode12 === "code22" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row22-9").innerHTML;
        }

            // CODE SET FOR CODE 23

        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row23-3").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row23-4").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row23-5").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row23-6").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row23-7").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row23-8").innerHTML;
        }
        else if ( selectedCode12 === "code23" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row23-9").innerHTML;
        }

            // CODE SET FOR CODE 24

        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row24-3").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row24-4").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row24-5").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row24-6").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row24-7").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row24-8").innerHTML;
        }
        else if ( selectedCode12 === "code24" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row24-9").innerHTML;
        }

            // CODE SET FOR CODE 25

        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row25-3").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row25-4").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row25-5").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row25-6").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row25-7").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row25-8").innerHTML;
        }
        else if ( selectedCode12 === "code25" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row25-9").innerHTML;
        }

            // CODE SET FOR CODE 26

        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row26-3").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row26-4").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row26-5").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row26-6").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row26-7").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row26-8").innerHTML;
        }
        else if ( selectedCode12 === "code26" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row26-9").innerHTML;
        }

            // CODE SET FOR CODE 27

        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row27-3").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row27-4").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row27-5").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row27-6").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row27-7").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row27-8").innerHTML;
        }
        else if ( selectedCode12 === "code27" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row27-9").innerHTML;
        }

            // CODE SET FOR CODE 28

        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row28-3").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row28-4").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row28-5").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row28-6").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row28-7").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row28-8").innerHTML;
        }
        else if ( selectedCode12 === "code28" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row28-9").innerHTML;
        }

            // CODE SET FOR CODE 29

        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row29-3").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row29-4").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row29-5").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row29-6").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row29-7").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row29-8").innerHTML;
        }
        else if ( selectedCode12 === "code29" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row29-9").innerHTML;
        }

            // CODE SET FOR CODE 30

        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row30-3").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row30-4").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row30-5").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row30-6").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row30-7").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row30-8").innerHTML;
        }
        else if ( selectedCode12 === "code30" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row30-9").innerHTML;
        }

            // CODE SET FOR CODE 31

        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row31-3").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row31-4").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row31-5").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row31-6").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row31-7").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row31-8").innerHTML;
        }
        else if ( selectedCode12 === "code31" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row31-9").innerHTML;
        }

            // CODE SET FOR CODE 32

        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row32-3").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row32-4").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row32-5").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row32-6").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row32-7").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row32-8").innerHTML;
        }
        else if ( selectedCode12 === "code32" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row32-9").innerHTML;
        }

            // CODE SET FOR CODE 33

        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row33-3").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row33-4").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row33-5").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row33-6").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row33-7").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row33-8").innerHTML;
        }
        else if ( selectedCode12 === "code33" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row33-9").innerHTML;
        }

            // CODE SET FOR CODE 34

        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row34-3").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row34-4").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row34-5").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row34-6").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row34-7").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row34-8").innerHTML;
        }
        else if ( selectedCode12 === "code34" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row34-9").innerHTML;
        }

            // CODE SET FOR CODE 35

        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row35-3").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row35-4").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row35-5").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row35-6").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row35-7").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row35-8").innerHTML;
        }
        else if ( selectedCode12 === "code35" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row35-9").innerHTML;
        }

            // CODE SET FOR CODE 36

        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row36-3").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row36-4").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row36-5").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row36-6").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row36-7").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row36-8").innerHTML;
        }
        else if ( selectedCode12 === "code36" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row36-9").innerHTML;
        }

            // CODE SET FOR CODE 37

        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row37-3").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row37-4").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row37-5").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row37-6").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row37-7").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row37-8").innerHTML;
        }
        else if ( selectedCode12 === "code37" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row37-9").innerHTML;
        }

            // CODE SET FOR CODE 38

        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row38-3").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row38-4").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row38-5").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row38-6").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row38-7").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row38-8").innerHTML;
        }
        else if ( selectedCode12 === "code38" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row38-9").innerHTML;
        }

            // CODE SET FOR CODE 39

        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row39-3").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row39-4").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row39-5").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row39-6").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row39-7").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row39-8").innerHTML;
        }
        else if ( selectedCode12 === "code39" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row39-9").innerHTML;
        }

            // CODE SET FOR CODE 40

        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row40-3").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row40-4").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row40-5").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row40-6").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row40-7").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row40-8").innerHTML;
        }
        else if ( selectedCode12 === "code40" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row40-9").innerHTML;
        }

            // CODE SET FOR CODE 41

        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row41-3").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row41-4").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row41-5").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row41-6").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row41-7").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row41-8").innerHTML;
        }
        else if ( selectedCode12 === "code41" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row41-9").innerHTML;
        }

            // CODE SET FOR CODE 42

        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row42-3").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row42-4").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row42-5").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row42-6").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row42-7").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row42-8").innerHTML;
        }
        else if ( selectedCode12 === "code42" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row42-9").innerHTML;
        }

            // CODE SET FOR CODE 43

        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row43-3").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row43-4").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row43-5").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row43-6").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row43-7").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row43-8").innerHTML;
        }
        else if ( selectedCode12 === "code43" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row43-9").innerHTML;
        }

            // CODE SET FOR CODE 44

        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row44-3").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row44-4").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row44-5").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row44-6").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row44-7").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row44-8").innerHTML;
        }
        else if ( selectedCode12 === "code44" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row44-9").innerHTML;
        }

            // CODE SET FOR CODE 45

        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row45-3").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row45-4").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row45-5").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row45-6").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row45-7").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row45-8").innerHTML;
        }
        else if ( selectedCode12 === "code45" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row45-9").innerHTML;
        }

            // CODE SET FOR CODE 46

        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row46-3").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row46-4").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row46-5").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row46-6").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row46-7").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row46-8").innerHTML;
        }
        else if ( selectedCode12 === "code46" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row46-9").innerHTML;
        }

            // CODE SET FOR CODE 47

        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row47-3").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row47-4").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row47-5").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row47-6").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row47-7").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row47-8").innerHTML;
        }
        else if ( selectedCode12 === "code47" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row47-9").innerHTML;
        }

            // CODE SET FOR CODE 48

        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row48-3").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row48-4").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row48-5").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row48-6").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row48-7").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row48-8").innerHTML;
        }
        else if ( selectedCode12 === "code48" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row48-9").innerHTML;
        }

            // CODE SET FOR CODE 49

        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row49-3").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row49-4").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row49-5").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row49-6").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row49-7").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row49-8").innerHTML;
        }
        else if ( selectedCode12 === "code49" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row49-9").innerHTML;
        }

            // CODE SET FOR CODE 50

        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option1" ) {
            rateAmount12.value = masterFrame.document.getElementById("row50-3").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option2") {
            rateAmount12.value = masterFrame.document.getElementById("row50-4").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option3") {
            rateAmount12.value = masterFrame.document.getElementById("row50-5").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option4") {
            rateAmount12.value = masterFrame.document.getElementById("row50-6").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option5") {
            rateAmount12.value = masterFrame.document.getElementById("row50-7").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option6") {
            rateAmount12.value = masterFrame.document.getElementById("row50-8").innerHTML;
        }
        else if ( selectedCode12 === "code50" & selectedInsurance12 === "insurance-option7") {
            rateAmount12.value = masterFrame.document.getElementById("row50-9").innerHTML;
        }
        else if ( selectedCode12 === "==SELECT OPTION==" || selectedInsurance1 === "==SELECT OPTION==") {
            rateAmount12.value = "$0.00"
        }

        // TOTAL DUE BOX CALC.
        // TOTAL DUE BOX CALC.
        // TOTAL DUE BOX CALC.

        var totaldue = document.getElementById("totalduebox");
        totaldue.value = "$" + (parseFloat(rateAmount1.value.substring(1).replace(",","")) + parseFloat(rateAmount2.value.substring(1).replace(",",""))
        + parseFloat(rateAmount3.value.substring(1).replace(",","")) + parseFloat(rateAmount4.value.substring(1).replace(",","")) 
        + parseFloat(rateAmount5.value.substring(1).replace(",","")) + parseFloat(rateAmount6.value.substring(1).replace(",",""))
        + parseFloat(rateAmount7.value.substring(1).replace(",","")) + parseFloat(rateAmount8.value.substring(1).replace(",",""))
        + parseFloat(rateAmount9.value.substring(1).replace(",","")) + parseFloat(rateAmount10.value.substring(1).replace(",",""))
        + parseFloat(rateAmount11.value.substring(1).replace(",","")) + parseFloat(rateAmount12.value.substring(1).replace(",",""))

               ).toLocaleString("en-US", {minimumFractionDigits:2 , maximumFractionDigits: 2});
    }