let total: string | number = 200;
total = "500";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  }
  return false;
}

console.log(isNumber(20));
console.log(isNumber("20"));

const button = document.querySelector("button");

button?.click();
