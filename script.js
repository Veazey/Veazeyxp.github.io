var str_cardIds = "#oitava_01, #oitava_02, #oitava_03, #oitava_04, #oitava_05, #oitava_06, #oitava_07, #oitava_08, #oitava_09, #oitava_10, #oitava_11, #oitava_12, #oitava_13, #oitava_14, #oitava_15, #oitava_16, #quarta_01, #quarta_02, #quarta_03, #quarta_04, #quarta_05, #quarta_06, #quarta_07, #quarta_08, #semi_01, #semi_02, #semi_03, #semi_04, #final_01, #final_02, #vencedor";
$(document).ready(function(){

  /**    A             B            C
  *1    [filme1]            
  *2    [filme2]      [filme2] 
  *3                              [filme2]
  *4    [filme3]      [filme4] 
  *5    [filme4]
  * 
  * Se o [filme1] for escolhido fazemos duas coisas: 
  * 
  * - verificar se o C3 é igual ao B2                  | isso é feito recursivamente por limpaBracket()
  *       se sim, substituimos C3 por default          |
  * 
  * - substituir B2[filme2] por [filme1]
  *  
  * 
  * 
  * o resultado será:
  *    A             B            C
  *1    [filme1]            
  *2    [filme2]      [filme1] 
  *3                              [default]
  *4    [filme3]      [filme4] 
  *5    [filme4]
  */


  $(document).ready(function(){
    $( document ).on( "click touchend",str_cardIds, function() {
      //atributo do filme são as classes css .movie_01, .movie_02 etc. Nelas é definida a imagem do fime que será mostrada

          var proximaFase = $(this).parent().get(0).getAttribute("class"); //obtém o nome da classe a qual o card clicado pertence
                                                                          //o nome dessa classe é o id do card da próxima fase

          if($(this).get(0).getAttribute("class")!="default" && $(this).get(0).getAttribute("id") != proximaFase ){//se o clicado não for default nem for o ultimo card

          limpaBracket(proximaFase);//atualiza os galhos do bracket

          $("#"+proximaFase).removeClass();     //remove do próximo card o atributo de filme
          $("#"+proximaFase).slideUp(300);
          $("#"+proximaFase).addClass( $(this).get(0).getAttribute("class") );   //adiciona ao card da próxima fase o atributo do filme que foi clicado
          $("#"+proximaFase).slideDown(300);
        }
      });
      
    });

    var limpaBracket=function(faseAtual){
      var proximaFase = $("#"+faseAtual).parent().get(0).getAttribute("class");
      if(proximaFase!=faseAtual){//se não for o ultimo card
        if($("#"+faseAtual).get(0).getAttribute("class")!="default"  &&  $("#"+faseAtual).get(0).getAttribute("class")==$("#"+proximaFase).get(0).getAttribute("class")){ //
          
          limpaBracket(proximaFase);
          
          $("#"+proximaFase).removeClass();
          $("#"+proximaFase).addClass("default");
        }
      }
    }


});