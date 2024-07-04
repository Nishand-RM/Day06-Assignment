//Circle 

class circle {
    constructor(radius,color)
    {
      this.radius = radius;
      this.color = color;
    }
    
    get_radius(){
      return "the radius value" +this.radius;
    }
    
    get_color(){
      return "color of circle is" +this.color;
    }
    
    set_radius(ra){
      this.radius = ra;
      return "the radius value" +this.radius;
  
    }
    
    set_color(col){
      this.color = col;
      return "color of circle is"+this.color;
    }
    
    get_Area(r){
      const pie = 3.14;
      var area = pie*r*r;
      return "area of circle " + area;
    }
    
    get_Circumference(r){
      const pie = 3.14;
      var cir = 2*pie*r;
      return "circumference of circle is" + cir;
    }
  }
  var c1 = new circle(1.0,"red");
  console.log(c1.get_radius,c1.get_color,c1.set_radius(2.0),c1.set_color("blue"));
  console.log(c1.get_Area(2),c1.get_Circumference(4));