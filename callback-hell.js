const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'John Smith' },
];

const salaries = [
  { id: 1, salary: 2000 },
  { id: 2, salary: 3000 },
];

const getEmployeeById = (id, callback) => {
  const employee = employees.find((employee) => employee.id === id);
  if (employee) {
    return callback(null, employee);
  }
  return callback(`Employee with id ${id} not found`);
};

const getSalary = (id, callback) => {
  const salary = salaries.find((salary) => salary.id === id)?.salary;
  if (salary) {
    return callback(null, salary);
  }
  return callback(`Salary for employee with id ${id} not found`);
};

getEmployeeById(1, (err, employee) => {
  if (err) return console.log(err);
  
  getSalary(1, (err, salary) => {
    if (err) return console.log(err);
    console.log(employee, salary);
  });
});


