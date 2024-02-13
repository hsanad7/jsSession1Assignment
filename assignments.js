function runAssignment(assignmentNumber) {
  // Assignment 1

  if (assignmentNumber == 1) {
    let inputNumber = prompt("Enter A number for Assignment 1 please !");

    document.getElementById(
      "assignment1"
    ).innerHTML = ` You have entred:${inputNumber}`;

    // Assignment 2
  } else if (assignmentNumber == 2) {
    // Get user input
    let inputNumber = parseInt(
      prompt("Enter a valid  number for Assignment 2:")
    );

    // Check if the number is divisible by both 3 and 4
    if (inputNumber % 3 === 0 && inputNumber % 4 === 0) {
      // console.log("Yes");
      document.getElementById(
        "assignment2"
      ).innerHTML = ` Input: ${inputNumber} Output Yes`;
    } else {
      // console.log("No");
      document.getElementById(
        "assignment2"
      ).innerHTML = ` Input: ${inputNumber} Output No`;
    }
  }

  // Assignment 3
  else if (assignmentNumber == 3) {
    // Get user input for the first integer
    let num1 = parseInt(prompt("Enter Assignment 3 first integer:"));

    // Get user input for the second integer
    let num2 = parseInt(prompt("Enter Assignment 3 second integer:"));

    // Check and print the maximum
    if (num1 > num2) {
      console.log(num1);
      document.getElementById(
        "assignment3"
      ).innerHTML = ` Input   ${num1}  ${num2} <br> Output ${num1}`;
    } else {
      document.getElementById(
        "assignment3"
      ).innerHTML = ` Input   ${num1}  ${num2} <br> Output ${num2}`;
    }
  }

  //Assignment 4
  else if (assignmentNumber == 4) {
    // Get user input for the first integer
    let num1 = parseInt(prompt("Enter  number for assignment 4:"));

    // Check and print the maximum
    if (num1 < 0) {
      document.getElementById(
        "assignment4"
      ).innerHTML = ` Input   ${num1}   <br> Negative`;
    } else {
      document.getElementById(
        "assignment4"
      ).innerHTML = ` Input   ${num1}   <br> Positive`;
    }
  }

  //Assignment 5
  else if (assignmentNumber == 5) {
    // Get user input for the first integer
    let num1 = parseInt(prompt("Enter first number for assignment 5:"));
    let num2 = parseInt(prompt("Enter second number for assignment 5:"));
    let num3 = parseInt(prompt("Enter third number for assignment 5:"));

    //Find and print the maximum and minimum
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);

    document.getElementById(
      "assignment5"
    ).innerHTML = ` Input   ${num1},${num2},${num3}   <br>Output: <br>
   max element = ${max} <br>
min element = ${min}`;
  }

  //Assignment 6
  else if (assignmentNumber == 6) {
    // Get user input for the first integer
    let num1 = parseInt(prompt("Enter number for assignment 6:"));

    if (num1 % 2 === 0) {
      document.getElementById(
        "assignment6"
      ).innerHTML = ` Input   ${num1}   <br>Output: Even`;
    } else {
      document.getElementById(
        "assignment6"
      ).innerHTML = ` Input   ${num1}   <br>Output: Odd`;
    }
  }

  //Assignment 8
  else if (assignmentNumber == 6) {
    // Get user input for the first integer

    // Get user input for the character
    let userInput = toLowerCase(prompt("Enter a character for assignment 8:"));

    // Check and print if the character is a vowel or consonant
    if (
      userInput === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      document.getElementById(
        "assignment8"
      ).innerHTML = ` Input   ${userInput}   <br>Output: Vowel`;
    } else {
      document.getElementById(
        "assignment8"
      ).innerHTML = ` Input   ${userInput}   <br>Output: Constant`;
    }
  }

  //Assignment 9
  else if (assignmentNumber == 9) {
    // Get user input for the integer
    let userInput = parseInt(prompt("Enter an integer for assignment 9:"));
    let outPutString = "";

    // Print all numbers from 1 to the user input

    for (i = 1; i <= userInput; i++) {
      outPutString += i + " ";
    }

    document.getElementById("assignment9").innerHTML =
      ` Input   ${userInput}   <br> Output:` + outPutString;
  }

  //Assignment 10
  else if (assignmentNumber == 10) {
    // Get user input for the integer
    let userInput = parseInt(prompt("Enter an integer for assignment 10:"));
    let outPutString = "";

    // Print all numbers from 1 to the user input

    for (i = 1; i <= 12; i++) {
      outPutString += userInput * i + " ";
    }

    document.getElementById("assignment10").innerHTML =
      ` Input   ${userInput}   <br> Output:` + outPutString;
  }

  //Assignment 11
  else if (assignmentNumber == 11) {
    // Get user input for the integer
    let userInput = parseInt(prompt("Enter an integer for assignment 11:"));
    let outPutString = "";

    // Print all numbers from 1 to the user input

    for (i = 1; i <= userInput; i++) {
      if (i % 2 === 0) {
        outPutString += i + " ";
      }
    }

    document.getElementById("assignment11").innerHTML =
      ` Input   ${userInput}   <br> Output:` + outPutString;
  }

  //Assignment 12
  else if (assignmentNumber == 12) {
    // Get user input for the base and exponent
    let base = parseInt(prompt("Enter the base for assignment 12 :"));
    let exponent = parseInt(prompt("Enter the exponent for assignment 12:"));

    // Define the result var and set  to 1
    let result = 1;

    for (i = 0; i < exponent; i++) {
      result *= base;
    }
    document.getElementById(
      "assignment12"
    ).innerHTML = ` Input   ${exponent} ${base}  <br> Output: ${result} `;
  }

  //Assignment 13
  else if (assignmentNumber == 13) {
    // Get user input for marks of five subjects
    let marks1 = parseInt(prompt("Enter Marks for subject 1:"));
    let marks2 = parseInt(prompt("Enter Marks for subject 2:"));
    let marks3 = parseInt(prompt("Enter Marks for subject 3:"));
    let marks4 = parseInt(prompt("Enter Marks for subject 4:"));
    let marks5 = parseInt(prompt("Enter Marks for subject 5:"));

    // Calculate
    let totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    let averageMarks = totalMarks / 5;
    let percentage = (totalMarks / 500) * 100; // Assuming each subject has a maximum of 100 marks

    document.getElementById(
      "assignment13"
    ).innerHTML = ` Input <br>  ${marks1} <br> 
  ${marks2}
  <br> 
  ${marks3}
  <br> 
  ${marks4}
  <br> 
  ${marks5}
  Output: <br> Total marks =  ${totalMarks}<br> 
  Average marks =  ${averageMarks}<br>
  Percentage =  ${percentage}<br>`;
  }

  //Assignment 14
  else if (assignmentNumber == 14) {
    // Get user input for the month
    let monthNumber = parseInt(prompt("Enter the Month Number:"));

    // Define an array with the number of days in each month (considering a non-leap year)
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if the entered month number is valid
    if (monthNumber >= 1 && monthNumber <= 12) {
      // set the month days based on array index
      console.log("Days in Month: " + daysInMonth[monthNumber]);

      document.getElementById(
        "assignment14"
      ).innerHTML = ` Input: Month Number    ${monthNumber} <br> 
      
      Output:  Days in Month  ${daysInMonth[monthNumber]}`;
    } else {
      alert("Invalid Month Number. Please enter a number between 1 and 12.");
    }
  }

  //Assignment 15
  else if (assignmentNumber == 15) {
    // Get user input for marks of five subjects
    // Get user input for marks of five subjects
    let physicsMarks = parseInt(prompt("Enter Physics Marks:"));
    let chemistryMarks = parseInt(prompt("Enter Chemistry Marks:"));
    let biologyMarks = parseInt(prompt("Enter Biology Marks:"));
    let mathematicsMarks = parseInt(prompt("Enter Mathematics Marks:"));
    let computerMarks = parseInt(prompt("Enter Computer Marks:"));

    // Calculate total marks and percentage
    let totalMarks =
      physicsMarks +
      chemistryMarks +
      biologyMarks +
      mathematicsMarks +
      computerMarks;
    let percentage = (totalMarks / 500) * 100;

    // set grade based on the percentage
    let grade = "";
    if (percentage >= 90) {
      grade = "Grade A";
    } else if (percentage >= 80) {
      grade = "Grade B";
    } else if (percentage >= 70) {
      grade = "Grade C";
    } else if (percentage >= 60) {
      grade = "Grade D";
    } else if (percentage >= 40) {
      grade = "Grade E";
    } else {
      grade = "Grade F";
    }

    document.getElementById(
      "assignment15"
    ).innerHTML = ` Input <br>  Physics: ${physicsMarks} <br> 
  Chemistry: ${chemistryMarks}
  <br> 
  Biology: ${biologyMarks}
  <br> 
  Mathematics: ${mathematicsMarks}
  <br> 
  Computer: ${computerMarks}
  Output: <br> Total marks =  ${totalMarks}<br> 
  Percentage  =  ${percentage}%<br>
  Grade =  ${grade}<br>`;
  }

  //Assignment 16
  else if (assignmentNumber == 16) {
    // Get user input for the month number
    let monthNumber = parseInt(prompt("Enter the Month Number:"));

    // Define a variable to store the number of days
    let daysInMonth;

    switch (monthNumber) {
      // 31 days months
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
      // 30 days months
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
      case 2: // February
        daysInMonth = 28; //  can be enhanced by adding another prompt for year and check if it is leap or not
        break;
      default:
        alert("Invalid Month Number. Please enter a number between 1 and 12.");
        break;
    }

    // Print the result

    document.getElementById(
      "assignment16"
    ).innerHTML = ` Input Month is  ${monthNumber} <br> 
  
  Output:  Total number of days in Month =  ${daysInMonth}  `;
  }

  //Assignment 17
  else if (assignmentNumber == 17) {
    // Get user input for the month number
    let userInput = prompt("Enter  an alphbet:");

    switch (userInput) {
      // 31 days months
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        outPutString = "Vowel";
        break;

      default:
        outPutString = "Constant";
        break;
    }

    // Print the result

    document.getElementById(
      "assignment17"
    ).innerHTML = ` Input alphbet is  ${userInput} <br> 
  
  Output:   ${outPutString} `;
  }

  //Assignment 18
  else if (assignmentNumber == 18) {
    // Get user input for the two numbers
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));

    // Define a var to stor ethe result
    let outPutString = "";

    // Use a switch statement to determine the maximum between the two numbers
    switch (true) {
      case num1 > num2:
        outPutString = "Max number is :" + num1;
        break;
      case num2 > num1:
        outPutString = "Max number is :" + num2;
        break;
      default:
        outPutString = "Both numbers are equal.";
        break;
    }

    document.getElementById(
      "assignment18"
    ).innerHTML = ` Input ${num1} ${num2} <br> 
      
      Output:   ${outPutString} `;
  }

  //Assignment 19
  else if (assignmentNumber == 19) {
    // Get user input for the two numbers
    let num1 = parseInt(prompt("Enter number:"));
    

    // Define a var to stor ethe result
    let outPutString ;

    // Use a switch statement to determine the maximum between the two numbers
    switch (true) {
      case num1 % 2 === 0:
        outPutString = "Even";
        break;
      
      default:
        outPutString = "Odd";
        break;
    }

    document.getElementById(
      "assignment19"
    ).innerHTML = ` Input ${num1}  <br> 
      
      Output:   ${outPutString} `;
  }


  //Assignment 20
  else if (assignmentNumber == 20) {
    // Get user input for the two numbers
    let num1 = parseInt(prompt("Enter number:"));
    

    // Define a var to stor ethe result
    let outPutString ;

    // Use a switch statement to determine the maximum between the two numbers
    switch (true) {
      case num1 >0:
        outPutString = "Positive";
        break;

        case num1 <0:
        outPutString = "Negative";
        break;
      
      default:
        outPutString = "Zero";
        break;
    }

    document.getElementById(
      "assignment20"
    ).innerHTML = ` Input ${num1}  <br> 
      
      Output:   ${outPutString} `;
  }

  /**************************/
}
