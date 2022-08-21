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
  return new Promise((resolve, reject) => {
    const employee = employees.find((employee) => employee.id === id);
    employee ? resolve(employee) : reject(`Employee with id ${id} not found`);
  });
};

const getSalary = (id, callback) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((salary) => salary.id === id)?.salary;
    salary
      ? resolve(salary)
      : reject(`Salary for employee with id ${id} not found`);
  });
};

const id = 2;

getEmployeeById(id)
  .then((employee) => {
    getSalary(id)
      .then((salary) => {
        console.log(salary);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
