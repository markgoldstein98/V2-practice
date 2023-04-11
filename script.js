console.log("loaded");

let carBrand="Opel";
console.log( "carBrand", carBrand);
carBrand= "BMW";
console.log(carBrand);

let doorNumber= 5;
let isDiesel = true;
let fuel = null;

// ez egy comment 

  let firstNames= [ "Dorka", "Márió", "Bence", "Edit" ];
  console.log(firstNames[2]);
    console.log([firstNames.length-1]) // visszaadja az utlsó elemét a firstNmames elemét

    firstNames[1]= "Ivett";
    console.log(firstNames)
    firstNames.push("Mario"); // a push-al hozzádok egy elemet a meglévő array-hez (tombhoz)
    console.log(firstNames) 

    // függvények

    function myFirstFunction(firstName, lastName){
      console.log("My First Function");
      return firstName + lastName;
    }
    console.log(myFirstFunction("Mark ","AG"));
    
    