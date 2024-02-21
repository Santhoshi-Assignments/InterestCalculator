export function calculateSimpleInterest(principal, time, rate) {
    const simpleInterest = (principal * time * rate) / 100;
    return simpleInterest;
  }
  
  export function calculateCompoundInterest(principal, time, rate) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (principal < 0 || time < 0 || rate < 0) {
          reject("Parameters should not be negative");
        } else {
          const compoundInterest =
            principal * (Math.pow(1 + rate / 100, time) - 1);
          resolve(compoundInterest);
        }
      }, 1000);
    });
  }
  