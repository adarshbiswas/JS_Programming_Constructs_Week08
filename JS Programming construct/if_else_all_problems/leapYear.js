// Check if a given year is a leap year
const year = parseInt(process.argv[2]); // Read year from command line

if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
} else {
    console.log("Please enter a valid 4-digit year");
}
