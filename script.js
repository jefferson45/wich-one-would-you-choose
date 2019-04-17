$(".work").click(function() {
    var age= $("#age").val();
    var armor = $("#armor").val();
   
    if (age <40 && armor=== "yes" ) {
    alert("spiderman");
     $(".work").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIGaw0o13aXa4rn7VF39yl20BkMzClYDhOlNjpvum0tEjxm1YBA");
}
    else if(age >40 && armor=== "no"){
    alert("Captain America");
      $(".work").attr("src","http://quietroomentertainment.com/wp-content/uploads/2012/12/Captain-America-11.jpg");
}
    
    else if(age <40 && armor=== "no"){
    alert("Black Widow");
 $(".work").attr("src","https://images-na.ssl-images-amazon.com/images/I/41aJ6RgCA5L._SX425_.jpg");


}
     else if(age >40 && armor=== "yes"){
    alert("Ironman");}
    $(".job").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d");








});