// Proxy pattern provides a surrogate or placeholder object
// for another object and controls access to this other object.

class CarAccess {
  open() {
    console.log("Opening car door");
  }

  close() {
    console.log("Closing the car door");
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Access denied!");
    }
  }

  authenticate(password) {
    return password === "Ilon";
  }

  close() {
    this.door.close();
  }
}
