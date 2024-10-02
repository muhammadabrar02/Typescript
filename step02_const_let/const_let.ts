const a = 5;
const b: number = 33;
const c = "best";

let z: string; // declare z outside the if block

if (true) {
    z = "inside if"; // assign z inside the if block
    // use z
} else {
    z = "string"; // assign z inside the else block
    // use z
}

console.log("let: " + z); // Now this will work correctly
