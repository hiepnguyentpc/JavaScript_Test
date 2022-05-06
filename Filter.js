let array = [1, 'a', 'b', 2]

array = array.filter(
    item => typeof item === "number"
);
console.log(array)