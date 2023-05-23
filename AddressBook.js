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

//contacts array
let contactArray = [
    new Contact("vinit","kulkarni","street1","banglore","KA","90344","8902498032","vinit@gmail.com"),
    new Contact("mihir","ambli","street2","delhi","HR","989344","9992498032","mihir@gmail.com"),
    new Contact("manju","reddy","street3","hubli","KA","90554","8902888032","manju@gmail.com"),
    new Contact("pavan","kulkarni","street4","mumbai","MH","55344","8907778032","pavan@gmail.com"),
    new Contact("sandeep","patil","street5","banglore","KA","90355","7772498032","sandeep@gmail.com"),
];

//display all contacts
contactArray.forEach(contact => console.log(contact));


console.log("-------------------------------");


//search & edit
function updateContact( FirstNameValue, changeLastName ) {
    for (var i in contactArray) {
      if (contactArray[i].firstName == FirstNameValue) {
         contactArray[i].lastName = changeLastName;
         break;
      }
    }
 }
updateContact("manju","gowda");
//display all contacts
console.log("After data update");
contactArray.forEach(contact => console.log(contact));


console.log("-------------------------------");


//search the firstname & delete
var searchName = "mihir";
for (var n = 0 ; n < contactArray.length ; n++) {
    if (contactArray[n].firstName == searchName) {
      var removedObject = contactArray.splice(n,1);
      removedObject = null;
      break;
    }
}
//display all contacts
console.log("After delete");
contactArray.forEach(contact => console.log(contact));

console.log("-------------------------------");

//count contacts
var totalContacts = contactArray.reduce((count) => count + 1, 0);
console.log("total contacts:",totalContacts);

console.log("-------------------------------");

//search by city
var getContactsByCity = (cityName) => {
    return contactArray
      .filter((contact) => contact.city == cityName)
      .map((contact) => {
        return {
          name: contact.firstName
        };
    });
};
//search by city method call
var cityName = "banglore";
var contactsInCity = getContactsByCity(cityName);
console.log(`Contacts in ${cityName}:`, JSON.stringify(contactsInCity));

console.log("-------------------------------");

//search by state
var getContactsByState = (stateName) => {
    return contactArray
      .filter((contact) => contact.state == stateName)
      .map((contact) => {
        return {
          name: contact.firstName
        };
    });
};
//search by city method call
var stateName = "MH";
var contactsInState = getContactsByState(stateName);
console.log(`Contacts in ${stateName}:`, JSON.stringify(contactsInState));

console.log("-------------------------------");

var byName = contactArray.slice(0);
byName.sort(function(a,b) {
    var x = a.firstName.toLowerCase();
    var y = b.firstName.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
console.log('by name:');
console.log(byName);