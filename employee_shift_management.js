// Task 1: Create an Employees Array of Employee Objects

const employees = [

    { name: 'Claudia', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
    { name: 'Lestat', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    
    { name: 'Armand', shifts: [{ day: 'Monday', hours: 8 }] },
    
    { name: 'Louis', shifts: [{ day: 'Friday', hours: 8 }] }
    
];

// Results:
console.log(employees);

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Employee Name: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`);
    });
}

// Example usage:
employees.forEach(displayEmployeeShifts);