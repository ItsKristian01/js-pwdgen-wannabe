// alert ("Ciao")  TEST LINK JAVASCRIPT

// Data Collection
// Username
const UserName = prompt("Ciao utente! Scrivi il tuo nome");
console.log(UserName, typeof UserName);
// User Surname
const UserSurname = prompt("Ciao utente! Scrivi il tuo cognome");
console.log(UserSurname, typeof UserSurname);
// User Favorite Color
const UserFavoriteColor = prompt("Ciao utente! Scrivi il tuo colore preferito");
console.log(UserFavoriteColor, typeof UserFavoriteColor);
// Number
const number = 21;
console.log(number, typeof number);

// Program Logic
const messagesum = UserName+UserSurname+UserFavoriteColor+number;

// Output
document.getElementById("output").innerHTML = messagesum;