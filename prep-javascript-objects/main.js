var person = {
  firstName: 'Matthew',
  lastName: 'Lang',
  hobby: 'Hockey',
  job: 'paramedic'
};
console.log('person:', person);
var firstName = 'Matthew ';
var lastName = 'Lang';
var fullName = 'The persons name is ' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);
person.job = 'paramedic';
console.log('this person works as a', person.job);
person.previous = 'Pirate';
console.log('this person formerly worked as', person.previous);
console.log(person);
