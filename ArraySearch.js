var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];


function numberOfItems(arr, item){
    var res = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] instanceof Array){
            res += numberOfItems(arr[i], item);
        }
        else if (arr[i] == item) {
            res += 1;
        }
    }
    return res;
}
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));