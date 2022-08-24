/* -- Working with js FILTERS function -- */

// const numbers = [1, 3, 5, 7, 2, 9, 11, 6]
// const filNumbers = numbers.filter((number) => number > 6);

const jobs = [
    { title: "Angular Developer", organization: "Google", },
    { title: "Programmer", organization: "Microsoft", },
    { title: "DEveloper", organization: "Microsoft", },
]
const filNumbers = jobs.filter((job) => job.organization === "Microsoft");

console.log(filNumbers);








/* -- Working with js SET function -- */
// Array - order
// Object - Association
// Set - Uniqueness

// const numbers = new Set();
// numbers.add(5);
// numbers.add(10);
// numbers.add(15);
// numbers.add(5);
// numbers.add(25);

// console.log(numbers);



/*  -- Working with AXIOS -- */

// const axios = require("axios");

// const url = "http://localhost:3000/jobs";


// const jobs1 = () => {
//     axios.get(url)
//         .then((response) => {
//             console.log(response.data)
//         });
// }
// jobs1();

// const jobs2 = async () => {
//     const response = await axios.get(url);
//     console.log(response.data);
// }
// jobs2();

// console.log(jobs.data);

// import { evenOrOdd, multiply } from "@/playground";

// describe("basic math", () => {
//     it("adds two numbers", () => {
//         expect(1 + 1).toBe(2)
//     });

//     it("subtract two numbers", () => {
//         expect(5 - 3).toBe(2);
//     });
//     describe("evenOrOdd", () => {
//         describe("when number is even", () => {
//             it("indicates number is even", () => {
//                 expect(evenOrOdd(4)).toBe("Even")
//             })
//         });
//         describe("when number is odd", () => {
//             it("indicates number is odd", () => {
//                 expect(evenOrOdd(3)).toBe("Odd")
//             })
//         });
//         describe("multiply", () => {
//             it("multiplies two numbers together", () => {
//                 expect(multiply(2, 3)).toBe(6);
//             })
//         })
//     })
// });

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((num) => num * num)

// console.log(squares);

// const favoriteFood = "sushi";

// const goodFoods = {
//     [favoriteFood]: true
// };
// console.log(goodFoods)

// setTimeout:
// setTimeout(() => {
//     console.log("I will print after 2 seconds")
// }, 2000)

// setInterval:
// const interval = setInterval(() => {
//     console.log("I will print every 2 seconds")
// }, 2000)

// setTimeout(() => {
//     clearInterval(interval);
// }, 10000)