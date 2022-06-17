//blocks
var mainBlock = document.getElementById('mainForm');
var competeBlock = document.getElementById('compete');
var exposeBlock = document.getElementById('expose');
var individualBlock = document.getElementById('individualCompetetor');
var teamLeadarBlock = document.getElementById('teamLeader');
var secondMemberBlock = document.getElementById('secondMember');
var thirdMemberBlock = document.getElementById('thirdMember');
var fourthMemberBlock = document.getElementById('fourthMember');
var lastMemberBlock = document.getElementById('lastMember');

var teamMembersNum = document.querySelectorAll(".teamMembersNum");
var numOfMembers = document.querySelector("#membersNum");
const teamMembersLabel = document.querySelector("#hidden-panel1");
var compete = document.querySelector('#flexRadioDefault1');
var expose = document.querySelector('#flexRadioDefault2');
var individual = document.querySelector("#flexRadioDefault3");
var team = document.querySelector("#flexRadioDefault4");

var exposeName = document.querySelector("#name");
var exposePhoneNumber = document.querySelector("#phoneNum");
var exposeEmail = document.querySelector("#email");
var individualName = document.querySelector("#indivName");
var individualPhoneNum = document.querySelector("#indivPhoneNum");
var individualEmail = document.querySelector("#indivEmail");
var memberName1 = document.querySelector("#name1");
var memberPhoneNum1 = document.querySelector("#phoneNum1");
var memberEmail1 = document.querySelector("#email1");
var memberName2 = document.querySelector("#name2");
var memberPhoneNum2 = document.querySelector("#phoneNum2");
var memberEmail2 = document.querySelector("#email2");
var memberName3 = document.querySelector("#name3");
var memberPhoneNum3 = document.querySelector("#phoneNum3");
var memberEmail3 = document.querySelector("#email3");
var memberName4 = document.querySelector("#name4");
var memberPhoneNum4 = document.querySelector("#phoneNum4");
var memberEmail4 = document.querySelector("#email4");
var memberName5 = document.querySelector("#name5");
var memberPhoneNum5 = document.querySelector("#phoneNum5");
var memberEmail5 = document.querySelector("#email5");


var nameError = document.querySelectorAll('.nameError')
var emailError = document.querySelectorAll('.emailError');
var phoneError = document.querySelectorAll('.phoneError');

var Selectedunivercity = document.querySelectorAll('.nuiversity');
var selectedUni = document.querySelectorAll('.uni');
var uniNote = document.querySelectorAll(".uniNote");

var teamname = document.querySelector("#teamname");
var teamnamelabel = document.querySelector("#teamnamelabel");

mainBlock.style.display = 'block';
competeBlock.style.display = 'none';
exposeBlock.style.display = 'none';
individualBlock.style.display = 'none';
teamLeadarBlock.style.display = 'none';
secondMemberBlock.style.display = 'none';
thirdMemberBlock.style.display = 'none';
fourthMemberBlock.style.display = 'none';
lastMemberBlock.style.display = 'none';

teamname.style.display = 'none';
teamnamelabel.style.display = 'none';

for (let j = 0; j < nameError.length; j++) {
    nameError[j].style.display = 'none';
}
for (let j = 0; j < emailError.length; j++) {
    emailError[j].style.display = 'none';
}
for (let j = 0; j < phoneError.length; j++) {
    phoneError[j].style.display = 'none';
}

for (let j = 0; j < selectedUni.length; j++) {
    selectedUni[j].style.display = 'none';
    uniNote[j].style.display = 'none';
}

for (let j = 0; j < Selectedunivercity.length; j++) {
    Selectedunivercity[j].addEventListener("change", () => {
        if (Selectedunivercity[j].value == "other") {
            selectedUni[j].style.display = 'block';
            uniNote[j].style.display = 'block';
        } else {
            selectedUni[j].style.display = 'none';
            uniNote[j].style.display = 'none';
        }
    })

}


teamMembersLabel.style.display = 'none';
numOfMembers.style.display = 'none';


//buttons
const firstCheckBoxBtn = document.querySelector('#firstCheckBoxBtn');
firstCheckBoxBtn.disabled = true;

var exposeReq = document.querySelectorAll(".exposereq")
var exposeSubmitBtn = document.getElementById("exposeSubmit");
exposeSubmitBtn.disabled = true;

var competeReq = document.querySelectorAll('[name="flexRadioDefault2"]');
var competeNextBtn = document.querySelector("#competeNextBtn");
competeNextBtn.disabled = true;

var individualReq = document.querySelectorAll(".individualreq");
var individualSubmitBtn = document.querySelector("#individualSubmit");
individualSubmitBtn.disabled = true;

var leaderReq = document.querySelectorAll(".leaderreq");
var teamLeaderNextBtn = document.querySelector('#teamLeaderNext');
teamLeaderNextBtn.disabled = true;

var secondReq = document.querySelectorAll(".secondreq");
var secondMemberNextBtn = document.querySelector('#secondNext');
secondMemberNextBtn.disabled = true;

var thirdReq = document.querySelectorAll(".thirdreq");
var thirdMemberNextBtn = document.querySelector('#thirdNext');
thirdMemberNextBtn.disabled = true;

var fourthReq = document.querySelectorAll(".fourthreq");
var fourthMemberNextBtn = document.querySelector('#fourthNext');
fourthMemberNextBtn.disabled = true;

var fifthReq = document.querySelectorAll(".fifthreq");
var lastMemberSubmitBtn = document.querySelector("#lastMemberSubmit");
lastMemberSubmitBtn.disabled = true;



// function checkInputs(inputs, button) {
//     for (let j = 0; j < inputs.length; j++) {
//         inputs[j].oninput = () => {
//             if (!(inputs[0].value == '') && !(inputs[1].value == '')) {
//                 button.disabled = false;
//                 // button.removeAttribute('disabled')
//             }
//         }
//     }
// }



function checkInputs(inputs, btn) {
    console.log("ess");
    let isValid = true;
    for (var i = 0; i < inputs.length; i++) {
        console.log("ess2");
        let changedInput = inputs[i];
        console.log(changedInput);
        console.log(changedInput.value);
        if (changedInput.value.trim() === "" || changedInput.value === null) {
            console.log("ess3");
            isValid = false;
            break;
        }
    }
    console.log("ess4");
    btn.disabled = !isValid;
}


for (let j = 0; j < exposeReq.length; j++) {
    exposeReq[j].addEventListener("input", () => {
        if (checkValidity(exposeName.value, exposePhoneNumber.value, exposeEmail.value, 0)){
            checkInputs(exposeReq, exposeSubmitBtn);
        }
        
    });
}

for (let j = 0; j < leaderReq.length; j++) {
    console.log("for");
    leaderReq[j].addEventListener("change", () => {
        checkInputs(leaderReq, teamLeaderNextBtn);
        console.log("end event");
    });
}

for (let j = 0; j < individualReq.length; j++) {
    console.log("for");
    individualReq[j].addEventListener("change", () => {
        if(checkValidity(individualName.value, individualPhoneNum.value, individualEmail.value, 1)){
            checkInputs(individualReq, individualSubmitBtn);
        }
        console.log("end event");
    });
}

for (let j = 0; j < secondReq.length; j++) {
    console.log("for");
    secondReq[j].addEventListener("change", () => {
        checkInputs(secondReq, secondMemberNextBtn);
        console.log("end event");
    });
}

for (let j = 0; j < thirdReq.length; j++) {
    console.log("for");
    thirdReq[j].addEventListener("change", () => {
        checkInputs(thirdReq, thirdMemberNextBtn);
        console.log("end event");
    });
}

for (let j = 0; j < fourthReq.length; j++) {
    console.log("for");
    fourthReq[j].addEventListener("change", () => {
        checkInputs(fourthReq, fourthMemberNextBtn);
        console.log("end event");
    });
}

for (let j = 0; j < fifthReq.length; j++) {
    console.log("for");
    fifthReq[j].addEventListener("change", () => {
        if(checkValidity(memberName5.value, memberPhoneNum5.value, memberEmail5.value, 6)){
            checkInputs(fifthReq, lastMemberSubmitBtn);
        }
        console.log("end event");
    });
}


teamname.addEventListener("change", function () {
    console.log("ess1");
    console.log(numOfMembers.value);
    if (team.checked && (numOfMembers.value != "") && teamname.value != "") {
        checkRadioButton(competeNextBtn)
        console.log("ess");
    }
});




individual.addEventListener("click", () => {
    checkRadioButton(competeNextBtn)
});


function checkRadioButton(btn) {
    btn.disabled = false;
}
if (mainBlock.style.display == 'block') {
    compete.addEventListener("click", () => {
        checkRadioButton(firstCheckBoxBtn)
    });
    expose.addEventListener("click", () => {
        checkRadioButton(firstCheckBoxBtn)
    });
}




function checkValidity(memberName, memberPhone, memberEmail, i) {
    validationFlag = true;

    // var letters = /^[A-Za-z ]+$/;
    // var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var phonereg = /^01\d{9}$/;
    var letters = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$/;
    var validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!letters.test(memberName) && memberName != "") {
        nameError[i].style.display = 'block';
        nameError[i].textContent = 'please enter valid name!';
        validationFlag = false;
    } else {
        nameError[i].style.display = 'none';
        nameError[i].textContent = '';
    }
    if (!validate.test(memberEmail) && memberEmail != "") {
        emailError[i].style.display = 'block';
        emailError[i].textContent = 'please enter valid email';
        validationFlag = false;
    } else {
        emailError[i].style.display = 'none';
        emailError[i].textContent = '';
    }
    if ((memberPhone.slice(0, 2) != 01 || memberPhone.length != 11 || /[^0-9]/.test(memberPhone))&& memberPhone != "") {
        console.log(memberPhone);
        phoneError[i].style.display = 'block';
        phoneError[i].textContent = 'please enter valid phone number!';
        validationFlag = false;
    } else {
        phoneError[i].style.display = 'none';
        phoneError[i].textContent = '';
    }

    return validationFlag;
}


firstCheckBoxBtn.addEventListener('click', function () {

    if (compete.checked) {
        competeBlock.style.display = 'block';
        mainBlock.style.display = 'none';

    }
    else if (expose.checked) {
        exposeBlock.style.display = 'block';
        mainBlock.style.display = 'none';
    }

});


individual.addEventListener("click", function () {

    teamMembersLabel.style.display = 'none';
    numOfMembers.style.display = 'none';
    teamname.style.display = 'none';
    teamnamelabel.style.display = 'none';

});

team.addEventListener("click", function () {

    teamMembersLabel.style.display = 'block';
    numOfMembers.style.display = 'block';
    teamname.style.display = 'block';
    teamnamelabel.style.display = 'block';

});



function teamOrIndividual() {
    if (team.checked) {
        competeBlock.style.display = 'none';
        teamLeadarBlock.style.display = 'block';

    }
    else if (individual.checked) {
        competeBlock.style.display = 'none';
        individualBlock.style.display = 'block';
    }
}

competeNextBtn.addEventListener('click', teamOrIndividual);

counter = 2

teamLeaderNextBtn.addEventListener('click', function () {
    validation = checkValidity(memberName1.value, memberPhoneNum1.value, memberEmail1.value, 2);
    console.log(validation);
    if (validation) {
        teamLeadarBlock.style.display = 'none';
        console.log(counter);
        console.log(numOfMembers.value);
        if (counter < numOfMembers.value) {  //3
            console.log("less than");
            secondMemberBlock.style.display = 'block';
        }
        else if(counter == numOfMembers.value){
            console.log("equal");
            lastMemberBlock.style.display = 'block';
        }
        counter++;
    }
})


secondMemberNextBtn.addEventListener('click', function () {
    validation = checkValidity(memberName2.value, memberPhoneNum2.value, memberEmail2.value, 3);
    if (validation) {
        secondMemberBlock.style.display = 'none';
        if (counter < numOfMembers.value) {
            thirdMemberBlock.style.display = 'block';
        }
        else {
            lastMemberBlock.style.display = 'block';
        }
        counter++;
    }
})



thirdMemberNextBtn.addEventListener('click', function () {
    validation = checkValidity(memberName3.value, memberPhoneNum3.value, memberEmail3.value, 4);
    if (validation) {
        thirdMemberBlock.style.display = 'none';
        if (counter < numOfMembers.value) {
            fourthMemberBlock.style.display = 'block';
        }
        else {
            lastMemberBlock.style.display = 'block';
        }
        counter++;
    }
})


fourthMemberNextBtn.addEventListener('click', function () {
    validation = checkValidity(memberName4.value, memberPhoneNum4.value, memberEmail4.value, 5);
    if (validation) {
        fourthMemberBlock.style.display = 'none';
        if (counter = numOfMembers.value) {
            lastMemberBlock.style.display = 'block';
        }
    }
})

