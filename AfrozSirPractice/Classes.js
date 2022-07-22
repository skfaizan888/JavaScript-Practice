class person {                           //
    constructor(fname, lname) {         //
        this.firstname = fname,        //firstname = fname
            this.lastname = lname;    // lastname = lname
    }                                //
    greeting() {                    //
        return `Welcome ${this.firstname}${this.lastname}`
        //
    }                            //
}                               //
const details = new person("jhon", "Wick");
const details2 = new person("Salman", "Boi");
// console.log(details)
// console.log(details.greeting())
// console.log(details2)
// console.log(details2.greeting())

//classes are Template

class Contact extends person { //Inherting properties , methods and behaviour from its parents
    constructor(fname, lname, Contact, city) {
        super(fname, lname) //Inherithing properties from its parent class
        this.Contact = Contact;
        this.City = city;
    }
    getContact() {
        return `Contact Details : Phone : ${this.Contact} ${this.City}`
    }
}
const data = new Contact("Jhon", "Weak", 986545553, " Peerburhan")
console.log(data)
console.log(data.getContact())
