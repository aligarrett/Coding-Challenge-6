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

// Task 3: Create a Function to Assign a New Shift

function assignShift(employees, employeeName, day, hours) {
    // Find the employee by name
    const employee = employees.find(emp => emp.name === employeeName);

    // Check if the employee exists
    if (!employee) {
        console.log(`Employee ${employeeName} not found.`);
        return;
    }

    // Check if the employee is already assigned a shift for that day
    const hasShift = employee.shifts.some(shift => shift.day === day);
    
    if (hasShift) {
        console.log(`Error: ${employeeName} is already assigned a shift on ${day}.`);
    } else {
        // Add the new shift
        employee.shifts.push({ day, hours });
        console.log(`Assigned ${hours} hours on ${day} to ${employeeName}.`);
    }
}

// Example usage
assignShift(employees, 'Claudia', 'Monday', 4); // Should log an error
assignShift(employees, 'Claudia', 'Tuesday', 5); // Should successfully assign the shift

// Check the updated shifts
displayEmployeeShifts(employees.find(emp => emp.name === 'Claudia'));