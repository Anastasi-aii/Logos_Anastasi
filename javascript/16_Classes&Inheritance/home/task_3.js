class Employee {
    constructor(fullName, rate, days) {
        this.fullName = fullName;
        this.rate = rate;
        this.days = days;
        Employee.employeesList.push(this);
    }


    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }

    static employeesList = [];

    static getGeneralSum() {
        const allSalaries = Employee.employeesList.map((employee) => employee.getSalary());
        let generalSum = 0;
        for (let salary of allSalaries) {
            generalSum += salary;
        }
        return generalSum;
    }
};




const jack = new Employee('Jack Shepard', 500, 22);
jack.salary = jack.getSalary();

const tom = new Employee('Tom Atkins', 100, 25);
tom.salary = tom.getSalary();

console.log(jack.salary); // 11000
console.log(tom.salary); // 2500 
console.log(Employee.getGeneralSum()); // 13500









