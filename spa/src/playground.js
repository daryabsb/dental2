// const developer = {
//     salary: 100000, experience: 4.5, techStack: ["Vue", "HTML", "CSS"], lookingForWork: true,
//     raiseSalary(p) {
//         this.salary = this.salary + (this.salary * p);
//         this.lookingForWork = false;
//     }
// };

// console.log(developer.salary);
// console.log(developer.lookingForWork)

// developer.raiseSalary(0.05);

// console.log(developer.salary);
// console.log(developer.lookingForWork);

export const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

export const multiply = (num1, num2) => num1 * num2;
