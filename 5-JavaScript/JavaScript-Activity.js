let score = parseInt(prompt("Enter the score:"));

switch (score) {
    case score >= 90:
        grade = "A";
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
        break;
}

console.log("The grade for the score "  + score + " is " + grade);