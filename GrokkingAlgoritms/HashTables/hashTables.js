let hashtable = {};
let list_of_names = ["tom", "mike"];

for (let name of list_of_names) {
  if (!hashtable[name]) {
    hashtable[name] = true;
  }
}

// console.log(hashtable["tom"]);      true
// console.log(hashtable["mike"]);     true
// console.log(hashtable["nick"]);     false
