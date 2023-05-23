console.log("Address Book");

class Contact{
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let contact1 = new Contact("vinit","kulkarni","street1","banglore","KA","90344","8902498032","vinit@gmail.com");
console.log(contact1);