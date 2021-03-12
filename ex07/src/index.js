// Setup example
function main() {
    // Only code below this line
    // Varible declarations
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Varible assigments

    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;
    // Only code above this line
    return {
        studlyCapVar,
        properCamelCase,
        titleCaseOver
    };
}
console.log(main());
module.exports = main;