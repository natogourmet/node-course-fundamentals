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

const getUserInfo = async (id) => {
  try {
    const employee = await getEmployeeById(id);
    const salary = await getSalary(id);
    return `Name: ${employee.name}, Salary: ${salary}`;
  } catch (err) {
    throw err;
  }
};

getUserInfo(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
