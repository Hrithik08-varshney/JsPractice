// 599 Minimum Index Sum of Two Lists

var findRestaurant = function (list1, list2) {
  let obj = {};
  for (let i = 0; i < list1.length; i++) {
    if (list1.includes(list1[i]) && list2.includes(list1[i])) {
      obj[list1[i]] = list1.indexOf(list1[i]) + list2.indexOf(list1[i]);
    }
  }
  let valueArr = Object.values(obj).sort((a, b) => a - b);
  let smallest = valueArr[0];
  let arr = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value === smallest) {
      arr.push(key);
    }
  }
  return arr;
};

// console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
