import {calculateSimpleInterest, calculateCompoundInterest} from "./interestCalculator.js";
  
  let principal = 5000;
  let time = 2;
  const rate = 6; 

  const simpleInterest = calculateSimpleInterest(principal, time, rate);
  console.log("Simple Interest: " + simpleInterest);

  let calculateCompound = async function () {
    try {
      const compoundInterest = await calculateCompoundInterest( principal, time, rate);
      console.log("Compound Interest: " + compoundInterest);
    }
    catch (error) {
      console.error("Error calculating compound interest:", error);
    }
  };
  
  calculateCompound();
  