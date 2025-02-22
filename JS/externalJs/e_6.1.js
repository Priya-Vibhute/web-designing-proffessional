const numbers=[23,67,89,23,90]

//delete numbers[3]
console.log(numbers)

console.log("==============================================")

for(let i of numbers)
{
    console.log(i)
}

console.log("==============================================")


//map foreach filter reduce

numbers.forEach((n)=>console.log(n))
console.log("==============================================")
numbers.forEach((n)=>console.log(n*n))
console.log("==============================================")

const newArray=numbers.map((n)=>n*n)
console.log(newArray)

console.log("==============================================")
console.log(numbers.filter((n)=>n>50))

console.log("==============================================")

console.log(numbers.filter(n=>n>50).map(n=>n*n))


const arr=[1,2,3,4]
const addition=arr.reduce((a,b)=>a+b)
console.log("Addition is",addition)

console.log("==============================================")



