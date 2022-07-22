// Naming Difference:
// Construtor : pascal
// Factory : CamelCased

//Constructor use New Keyword

function CheckConstrutor(name, age, city, state) {
    this.name = name,
        this.age = age,
        this.city = city,
        this.state = state;
}
const result = new CheckConstrutor("Afroz", "18", "Pune", "Mah");
const result2 = new CheckConstrutor("Imroz", "35", "Karachi", "Pakistan");
// console.log(result)
// console.log(result2)

//Factory Function used
function person(name, age, title) {
    const personalDetails = {};
    personalDetails.name = name,
        personalDetails.age = age,
        personalDetails.title = title;
    return personalDetails;

}
// console.log(
//     person("Sohel", "35", "Software Engineer"))



