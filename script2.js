//uber price 
class uber{
    constructor(driver_name,brand,colour,vehicle_no){
      this.driver_name = driver_name;
      this.brand =brand;
      this.colour = colour;
      this.vehicle_no = vehicle_no;
    }
    
    uber_km_price(km){
      var total_charges = km*12;
      return "total charge for uber ride in Rs"+ total_charges;
      }
  }
  var c1 =new uber("James","TATA_Altroz","white","TN_37_zzxx");
  console.log(c1.uber_km_price(10));