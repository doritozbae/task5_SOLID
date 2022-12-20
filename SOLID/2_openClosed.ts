// OPEN-CLOSED - module has to be opened for extension but closed for
//               changing

abstract class CarPrice {
   abstract getPrice(): string;
 }
 
 class Tesla extends CarPrice {
   getPrice(): string {
     return "80 000$";
   }
 }
 
 class Audi extends CarPrice {
   getPrice(): string {
     return "50 000$";
   }
 }
 
 class BMW extends CarPrice {
   getPrice(): string {
     return "70 000$";
   }
 }
 
 const shop: Array<CarPrice> = [new Tesla(), new Audi(), new BMW()];
 
 const getPrice = (auto: Array<CarPrice>): string | void => {
   for (let i = 0; i < auto.length; i++) {
     return auto[i].getPrice();
   }
 };