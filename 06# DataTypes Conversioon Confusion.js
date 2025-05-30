let score = 100; // score is a variable of type number
console.log(typeof score); // Output: number             1st way to check type
console.log(typeof score); // Output: number            2nd way to check type

let score1 = "100"; // score1 is a variable of type string
console.log(typeof score1); // Output: string

let valueInNumber = Number(score); // Converts score to a number
console.log(typeof valueInNumber); // Output: number

let score2 = "100abc"; // score2 is a variable of type string
let valueInNumber2 = Number(score2); // Converts score2 to a number
console.log(typeof valueInNumber2); // Output: number
console.log(valueInNumber2); // Output: NaN (Not a Number) because "100abc" cannot be converted to a number

let score3 = null; // score3 is a variable of type null
let valueInNumber3 = Number(score3); // Converts score3 to a number
console.log(typeof valueInNumber3); // Output: number
console.log(valueInNumber3); // Output: 0 (null is converted to 0 when converted to a number)

let score4 = undefined; // score4 is a variable of type undefined
let valueInNumber4 = Number(score4); // Converts score4 to a number
console.log(typeof valueInNumber4); // Output: number
console.log(valueInNumber4); // Output: NaN (undefined is converted to NaN when converted to a number)

let score5 = true; // score5 is a variable of type boolean
let valueInNumber5 = Number(score5); // Converts score5 to a number
console.log(typeof valueInNumber5); // Output: number
console.log(valueInNumber5); // Output: 1 (true is converted to 1 when converted to a number)

let score6 = "TALHA"; // score6 is a variable of type string
let valueInNumber6 = Number(score6); // Converts score6 to a number
console.log(typeof valueInNumber6); // Output: number
console.log(valueInNumber6); // Output: NaN (the string "TALHA" cannot be converted to a number)

/*
   "33"  => 33
    "33abc" => NaN
    "33.33" => 33.33
    "33.33abc" => NaN
    "33.33.33" => NaN
    "33.33.33abc" => NaN
    0 => 0
    null => 0
    undefined => NaN
    true => 1
    false => 0
    "true" => NaN
    "false" => NaN  
    "TALHA" => NaN
    "100" => 100
    "100abc" => NaN
    "100.5" => 100.5
    "100.5abc" => NaN
    "100.5.5" => NaN
    "100.5.5abc" => NaN
*/

let isLoggedIn = 1; // isLoggedIn is a variable of type number
let boooleanisloggedin = Boolean(isLoggedIn); // Converts isLoggedIn to a boolean
console.log(typeof boooleanisloggedin); // Output: boolean
console.log(boooleanisloggedin); // Output: true (1 is converted to true when converted to a boolean)


let isLoggedIn1 =  " TALHA "; // isLoggedIn1 is a variable of type string
let boooleanisloggedIn1 = Boolean(isLoggedIn1); // Converts isLoggedIn1 to a boolean
console.log(typeof boooleanisloggedIn1); // Output: boolean
console.log(boooleanisloggedIn1); // Output: true (non-empty string is converted to true when converted to a boolean)


/*  Notes
           1 => True ; 0 => False
              "" => False ; " TALHA " => True
              null => False ; undefined => False
                NaN => False ; "TALHA" => True
*/




