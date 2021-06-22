const objects = [
    {
      number: 45,
    },
    {
      number: 4,
    },
    {
      number: 9,
    },
    {
      number: 16,
    },
    {
      number: 25,
    },
    {
      number: 16,
    },
    {
      number: 24,
    }
  ];


let formatNumbers = objects.map ((obj) => {
  return obj.number;
});

let greaterThan20 = formatNumbers.filter ((num) => {
  return num > 20;
});
console.log(greaterThan20);

let totalNumbers = formatNumbers.reduce ( (accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(totalNumbers);

