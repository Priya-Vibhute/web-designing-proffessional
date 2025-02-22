console.log(Math.PI)
console.log(Math.pow(2,3))
console.log(Math.ceil(3.0))
console.log(Math.floor(3.9))
console.log(Math.trunc(445.23))
console.log(Math.floor((Math.random()*59))+1)

console.log("=============================================")

console.log("Hello".toLowerCase())
console.log("Hello".toUpperCase())
console.log("Hello".includes("Hell"))

const products=["Dell Laptop","Dell Mouse","HP laptop","HP mouse","dell keyboard","Mouse"]

console.log(products.filter(p=>p.toLowerCase().includes("dell")))
console.log(products.filter(p=>!p.toLowerCase().includes("dell")))


console.log("Hello".padStart(50,"*"))
console.log("Bye".padEnd(10,"&"))

console.log("Bye".startsWith("B"))
console.log("Bye".endsWith("B"))

console.log("                                Hello                                 ".trim())
console.log("M".repeat(20))

console.log("Hello".replace("l","*"))
console.log("Helloh".toLowerCase().replaceAll("h","*"))













