//!if
// let movieReview = true;
// if(movieReview){
//     console.log("LETS GO TO MOVIE")
// }
//!if-else
// let loveProposal = false;
// if(loveProposal){
//     console.log("LOVE STARTED FROM TODAY")
// }else{
//     console.log("NO WORRIES SO MANY OTHER GIRLS ARE THERE")
// }
//!else-if
// let amount = 100
// if(amount>300){
//     console.log("EAT CHICKEN BIRIYANI")
// }else if(amount>200 && amount<=300){
//     console.log("EAT CHICKEN FRIED RICE")
// }else if(amount>100 && amount<=200){
//     console.log("EAT CURD RICE")
// }else{
//     console.log("NEELU TAGI PADUKO")
// }
//!switch-case
//*EXAMPLE1
let pet = "Lion"
switch(pet){
    case "Fish":
        console.log("HE OWNS A FISH")
        break;
    case "Cat":
        console.log("HE OWNS A CAT")
        break;
    case "Rabbit":
        console.log("HE OWNS A RABBIT")
        break;
    case "Dog":
        console.log("HE OWNS A DOG")
        break;
    default:
        console.log("HE DOESNT HAVE ANY PET")
}
//*EXAMPLE2
let amount=200;
switch(true){
    case (amount>300):
        console.log("EAT CHICKEN BIRIYANI");
        break;
    case (amount>200 && amount<=300):
        console.log("EAT CHICKEN FRIED RICE")
        break;
    case (amount>100 && amount<=200):
        console.log("EAT CURD RICE");
        break;
    default:
        console.log("NEELU TAGI PADUKO")

}