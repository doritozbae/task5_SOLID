// Adapter pattern translates one interface to another.
// Adapters allows programming components to work together
//   that otherwise wouldn't because of mismatched interfaces.
// The Adapter pattern is also referred to as the Wrapper Pattern.

class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0 - tr-tr-tr");
  }
}

class EngineV8 {
  complicatedInterface() {
    console.log("Engine V8! - wroom wroom!");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}
