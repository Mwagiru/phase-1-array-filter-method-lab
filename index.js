// Code your solution here
function findMatching(array, String){
  return array.filter((array)=> array.toUpperCase()=== String.toUpperCase());
}
let drivers = ["Andrew", "Ken", "Raymond","Robert","Ramon"]
function fuzzyMatch(array, String) {
  return array.filter((driver)=> driver.toUpperCase().indexOf(String.toUpperCase()) === 0
  );
}
function matchName(array, String){
  return array.filter((record) => record.name === String);
}