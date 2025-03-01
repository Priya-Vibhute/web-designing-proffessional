console.log(Math.PI)
console.log(Math.pow(2, 3))
console.log(Math.ceil(3.0))
console.log(Math.floor(3.9))
console.log(Math.trunc(445.23))
console.log(Math.floor((Math.random() * 59)) + 1)

console.log("=============================================")

console.log("Hello".toLowerCase())
console.log("Hello".toUpperCase())
console.log("Hello".includes("Hell"))

const products = ["Dell Laptop", "Dell Mouse", "HP laptop", "HP mouse", "dell keyboard", "Mouse"]

console.log(products.filter(p => p.toLowerCase().includes("dell")))
console.log(products.filter(p => !p.toLowerCase().includes("dell")))


console.log("Hello".padStart(50, "*"))
console.log("Bye".padEnd(10, "&"))

console.log("Bye".startsWith("B"))
console.log("Bye".endsWith("B"))

console.log("                                Hello                                 ".trim())
console.log("M".repeat(20))

console.log("Hello".replace("l", "*"))
console.log("Helloh".toLowerCase().replaceAll("h", "*"))

console.log("We are learning javascript".split(" ").length)
const words = "We are learning javascript".split(" ")
console.log(words)
console.log(words.filter(word => word.toLowerCase().startsWith("j")).length)
const word = "hello"
console.log(word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())
console.log(words.map(word => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()))


console.log(words.map(word=>word.padEnd(20,"*")))









