function addToQueue(list, queue) {
  for (let i = 0; i < list.length; i += 1) {
    queue.push(list[i]);
  }
  return queue;
}

function personIsSeller(name) {
  name.slice(-1) === "m";
}

function mangoSeller(searchQueue, graph, startPoint) {
  searchQueue = addToQueue(graph[startPoint], searchQueue);
  let searched = [];

  while (searchQueue.length !== 0) {
    let person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        return person + " is a mango seller";
      } else {
        searchQueue = addToQueue(graph[person], searchQueue);
        searched.push(person);
      }
    }
  }

  return "nobody is a mango seller";
}

let graph = {};
graph["you"] = ["alice"];
graph["alice"] = ["you"];

let searchQueue = [];

// console.log(mangoSeller(searchQueue, graph, "alice"));
