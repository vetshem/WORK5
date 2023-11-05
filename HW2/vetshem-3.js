function groupAnagrams(arr){
  let arr_anagrams = [];
  let map_anagrams = new Map();
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const sortedWord = word.split("").sort().join("");

    if (!map_anagrams.has(sortedWord)) {
      map_anagrams.set(sortedWord, [word]);
    } else {
      map_anagrams.get(sortedWord).push(word);
    }
  }

  for (let i = 0; i<map_anagrams.size; i++){
    arr_anagrams.push(Array.from(map_anagrams.values())[i]);
  }
  return arr_anagrams;
};

let a = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
console.log(a);
