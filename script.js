$(document).ready(function(){

  var domande = ["Che budget hai a disposizione?", "Harry potter è Pippo Baudo?"];
  var opzioni = [["€20","€30","€50","Personalizza"],["Certo","Che cosa dici","Non penso","Non saprei"]];
  var i=0;

  $(".buttonMain").click(function(){
    $(this).toggleClass("buttonMainToggled")
  });

    $(".buttonMain").click(function(){
      $(".mainApp").fadeOut("slow",function(){
        $("#testoDomanda").text(domande[i]);
        $(".buttonMain").removeClass("buttonMainToggled");
        for(var j=0;j<4;j++)
        {
          $("#opzione"+(j+1)).text(opzioni[i][j]);
        }
        i=i+1; 
        
      });
      
      $(".mainApp").fadeIn("slow");
      
    });


});
  