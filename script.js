const employees = [];

function showAddEmployeeForm() {
    document.getElementById('addEmployeeForm').style.display = 'block';
}

function hideAddEmployeeForm() {
    document.getElementById('addEmployeeForm').style.display = 'none';
}

function addEmployee(event) {
    event.preventDefault();
    
    const form = event.target;
    const newEmployee = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        imageUrl: form.imageUrl.value,
        email: form.email.value,
        contactNumber: form.contactNumber.value,
        salary: form.salary.value,
        address: form.address.value,
        dob: form.dob.value,
    };
    
    employees.push(newEmployee);
    form.reset();
    hideAddEmployeeForm();
    renderEmployeeList();
}

function renderEmployeeList() {
    const employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = '';
    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.textContent = `${employee.firstName} ${employee.lastName}`;
        employeeDiv.classList.add('employee-item');
        employeeDiv.onclick = () => showEmployeeInfo(index);
        employeeListDiv.appendChild(employeeDiv);
    });
}

function showEmployeeInfo(index) {
    const employee = employees[index];
    const employeeInfoDiv = document.getElementById('employeeInfo');
    employeeInfoDiv.innerHTML = `
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <p>Email: ${employee.email}</p>
        <p>Contact: ${employee.contactNumber}</p>
        <p>Salary: ${employee.salary}</p>
        <p>Address: ${employee.address}</p>
        <p>Date of Birth: ${employee.dob}</p>
        <img src="${employee.imageUrl}" alt="${employee.firstName} ${employee.lastName}" style="max-width: 100px;" />
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderEmployeeList();
});