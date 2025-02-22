//new Array(12,56,34)

//objects

const student = {
    id: 101,
    firstName: "Nisha"
}
console.log(student["id"], student.id)

const school = {
    schoolId: 101,
    schoolName: "National School",
    details: function () {
        return this.schoolId + " " + this.schoolName
    }
}

console.log(school.details())

const courses = {
    courseId: 101,
    coursetopics: ["WD", "SQL", "Java"]
}

console.log(courses["courseId"])
console.log(courses["coursetopics"].length)

courses["coursetopics"].forEach(topic => console.log(topic))


for (let topic of courses["coursetopics"]) {
    console.log(topic)
}

console.log("===========================================================")
const laptop = { id: 101, model: "DELL INSPIRON", price: 41000 }
const mobile = { id: 102, model: "Nokia", price: 1500 }
const tablet = { id: 103, model: "Samsung", price: 27000 }

const category = {
    id: "C1",
    categoryName: "Electronics",
    products:[laptop,mobile,tablet]
}

console.log(category["products"][0]["id"])
console.log(category["products"][0]["model"])
console.log(category["products"][0]["price"])

console.log("===========================================================")

for(let key in laptop)
{
    console.log(key,laptop[key])
}


category["products"].forEach((product)=>{
    console.log(product.id,product.model,product.price)
    

})