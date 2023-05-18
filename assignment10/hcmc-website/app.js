'use strict';
const registrationButton = document.getElementById('btnRegisterPatient');
const elderlyPatientFilter = document.getElementById('chkElderlyPatients');
const table = document.getElementById('patientTable');
const tBody = document.getElementById('tbodyPatientsList');

registrationButton.addEventListener('click', register);
elderlyPatientFilter.addEventListener('change', filterElderly);

function register(event) {

    event.preventDefault();

    const patientId = document.createElement('td');
    patientId.appendChild(document.createTextNode(document.getElementById('patientIdNumber').value));

    const firstName = document.createElement('td');
    firstName.appendChild(document.createTextNode(document.getElementById('firstName').value));

    const middleInitials = document.createElement('td');
    middleInitials.appendChild(document.createTextNode(document.getElementById('middleInitials').value));

    const lastName = document.createElement('td');
    lastName.appendChild(document.createTextNode(document.getElementById('lastName').value));

    const dateOfBirth = document.createElement('td');
    dateOfBirth.appendChild(document.createTextNode(document.getElementById('dateOfBirth').value));

    const department = document.createElement('td');
    department.appendChild(document.createTextNode(document.getElementById('ddlDepartment').value));

    const outPatient = document.createElement('td');
    outPatient.appendChild(document.createTextNode((document.getElementById('radioIsOutPatientYes').checked) ?
        document.getElementById('radioIsOutPatientYes').value : document.getElementById('radioIsOutPatientNo').value));

    const newRow = table.getElementsByTagName('tbody')[0].insertRow();
    newRow.appendChild(patientId);
    newRow.appendChild(firstName);
    newRow.appendChild(middleInitials);
    newRow.appendChild(lastName);
    newRow.appendChild(dateOfBirth);
    newRow.appendChild(department);
    newRow.appendChild(outPatient);
}

function filterElderly(event) {

    event.preventDefault;
    if (elderlyPatientFilter.checked) {
        
    }
}