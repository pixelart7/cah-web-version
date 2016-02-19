/**
 * CAH Main Driver Class
 */
var CAH = CAH || {

  "DISCARDPILE": ".pile--discard",
  "QUESTIONPILE": ".pile--question",
  "HAND": ".hand-area",
  "PLAYEDCARD": ".played-cards",

  "addDiscardCard": function(card){
    $(this.DISCARDPILE).append('<div class="card card--stack card--' + card.getType() + '" style="transform: rotate(' + (Math.floor(Math.random() * 10) - 10)  + 'deg);">' + card.getIdContent() + '</div>');
  },
  "addQuestionCard": function(card){
    $(this.QUESTIONPILE).append('<div class="card card--stack card--' + card.getType() + '" style="transform: rotate(' + (Math.floor(Math.random() * 10) - 10)  + 'deg);">' + card.getIdContent() + '</div>');
  },
  "addHandCard": function(card){
    $(this.HAND).append('<div class="card card--' + card.getType() + '">' + card.getIdContent() + '</div>');
  },
  "appendPlayedCard": function(card){
    $(this.PLAYEDCARD).append('<div class="card card--' + card.getType() + '">' + card.getIdContent() + '</div>');
  },

};
