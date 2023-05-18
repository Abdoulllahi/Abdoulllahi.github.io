/**
 * @ Author: Abdou Lahi DIOP
 * @ Create Time: 2023-05-17 00:03:21
 * @ Modified by: Abdou Lahi DIOP
 * @ Modified time: 2023-05-18 18:16:57
 * @ Description:
 */

'use strict';
const form = document.getElementsByTagName('form');
const registrationButton = document.getElementById('btnRegisterPatient');
const elderlyPatientFilter = document.getElementById('chkElderlyPatients');
const outPatients = document.getElementById('chkShowOutPatients');
const table = document.getElementById('patientTable');
const tBody = document.getElementById('tbodyPatientsList');

registrationButton.addEventListener('click', register);
elderlyPatientFilter.addEventListener('change', filterNonElderly);
outPatients.addEventListener('change', filterNonOutPatients);

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

    form[1].reset();
}

function filterNonElderly(event) {

    event.preventDefault();
    const rows = tBody.rows;
    if (elderlyPatientFilter.checked) {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (calculateAge(row.cells[4].innerText) < 65) {
                row.classList.add('no-elder')
            }
        }
    } else {
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            row.classList.remove('no-elder');
        }
    }
}

function calculateAge(dateOfBirth) {
    return Math.floor((Date.now() - new Date(dateOfBirth).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}

function filterNonOutPatients(event) {

    event.preventDefault();
    const rows = tBody.rows;
    if (outPatients.checked) {
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].cells[6].innerText == 'No') {
                rows[i].classList.add('no-out-patient')
            }
        }
    } else {
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('no-out-patient')
        }
    }
} 