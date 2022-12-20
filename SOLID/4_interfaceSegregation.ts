// INTERFACE SEGREGATION -  clients should not be forced to depend on
//                          methods that they do not use

interface TeslaSet {
  getTeslaSet(): any;
}

interface AudiSet {
  getAudiSet(): any;
}

interface BMWSet {
  getBMWSet(): any;
}

class TeslaCar implements TeslaSet {
  getTeslaSet() {}
}

class AudiCar implements AudiSet {
  getAudiSet() {}
}

class BMWCar implements BMWSet {
  getBMWSet() {}
}
