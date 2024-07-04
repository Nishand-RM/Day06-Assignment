// movie list

var PG_movie=[];
class movie{
  constructor(title,studio,rating){
  //  var str = "PG";
    if(rating == undefined){
      this.rating = rating || 'PG';
    }
  }
  
 static movie_type(){ return[
    { rating: 'PG', title: 'THUPPAKI' },
    { rating: 'PG13', title: 'MANKATHA' }
  ];}
    
    
  getPG(mv){
  for(var i=0; i<mv.length;i++){
    if(mv[i] == 'PG')
    {
      PG_movie.push(mv[i].title);
    }
  }
  return "PG movie list: " + PG_movie.join(', ');    
}
}
var c1 = new movie("Casino Royale","Eon Production");
console.log(c1.getPG(movie.movie_type()));