// DEPENDENCY INVERSION - High-level modules should not import
//                        anything from low-level modules.
//                        They should both depend on abstractions.

class xmlHttpRequestService {
  open() {}
  send() {}
}

interface Connection {
  request(url: string, options: any): any;
}

class xmlHttpService implements Connection {
  xhr = new xmlHttpRequestService();

  request(url: string, options: any) {
    this.xhr.open();
    this.xhr.send();
  }
}

// class Http {
//   constructor(private httpConnection: Connection) {}

//   get(url: string, options: any) {
//     this.httpConnection.request(url, "GET");
//   }

//   post(url: string) {
//     this.httpConnection.request(url, "POST");
//   }
// }
