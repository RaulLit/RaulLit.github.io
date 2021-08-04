var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");
var addEmployeeModel = document.querySelector("#employee-model");
var addInterviewModel = document.querySelector("#interview-model");

addCloseBtnEventListener();
addEmployeeModel.style.display = "none";
addInterviewModel.style.display = "none";

function addEmployee() {
    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var position = document.querySelector("#position").value;
    var department = document.querySelector("#department").value;
    var email = document.querySelector("#email").value;
    var salery = document.querySelector("#salery").value;

    var newEmployee = `<li>
    <div class="employee-card" id="employee1">
        <img class="user-img" src="img/user-img.png" alt="">
        <span>
            <div class="employment-details" id="employee1-details">
                <span class="name-format">`+name+`</span>
                <span class="name-format">`+surname+`</span>
                <br>
                <span>`+position+`</span>
                <br>
                <span>`+department+`</span>
                <br>
                <span>`+email+`</span>
                <br>
                <span>Rs. `+salery+`</span>
            </div>
        </span>
        <span class="close-btn">x</span>
    </div>
    </li>`;

    employeeListHolder.insertAdjacentHTML('beforeend', newEmployee);
    addEmployeeModel.style.display = "none";
    addCloseBtnEventListener();
}

function showAddEmpModel() {
    if(addInterviewModel.style.display=="block") {
        addInterviewModel.style.display = "none";
    }
    addEmployeeModel.style.display = "block";
}

function addInterview(){
    var intDepartment = document.querySelector("#int-department").value;
    var intPosition = document.querySelector("#int-position").value;

    var newInterview = `<li>
    <div class="list-item">
        <h3>`+intDepartment+`</h3>
        <p>`+intPosition+`</p>
        <button class="accept-btn">Accept</button>
        <button class="reject-btn">Reject</button>
    </div>
    </li>`;
    interviewListHolder.insertAdjacentHTML('beforeend', newInterview);
    addInterviewModel.style.display = "none";
}

function showAddIntModel() {
    if(addEmployeeModel.style.display=="block") {
        addEmployeeModel.style.display = "none";
    }
    addInterviewModel.style.display = "block";
}

function removeEmployeeModel() {
    addEmployeeModel.style.display = "none";
}
function removeInterviewModel() {
    addInterviewModel.style.display = "none";
}

function addCloseBtnEventListener() {
    var closeButton = document.querySelectorAll('.close-btn');
    closeButton.forEach(closeButton => {
        closeButton.addEventListener('click', e => {
            e.target.parentElement.remove();
        })
    });
}
