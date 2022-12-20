// SINGLE RESPONSIBILITY - each module has only 1 reason for changes
//                         or each class is responsible only for 1 thing

// Auto is resp for interactions with auto
// CustomerAuto is resp for customers orders
// AutoDB is resp for manipulations with auto in DB

class Auto {
  constructor(model: string) {}
  getCarModel() {}
  setCarModel() {}
}

class CustomerAuto {
  saveCustomerOrder(o: Auto) {}
  getCustomerOrder(id: string) {}
  removeCustomerOrder(id: string) {}
}

class AutoDB {
  updateCarSet(set: object) {}
}
