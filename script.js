$(document).ready(function(){
  /*for(var i = 0; i < 20; i++){

    var card = Card;
    card.init("white", i);
    CAH.addDiscardCard(card);

  }*/
  var card1 = Card;
  card1.init("black", 25);
  CAH.addQuestionCard(card1);
  for(var i = 0; i < 5; i++){

    var card = Card;
    card.init("white", i + 90);
    CAH.addHandCard(card);

  }
  for(var i = 0; i < 5; i++){

    var card = Card;
    card.init("white", i + 150);
    CAH.appendPlayedCard(card);

  }
});
