function CardDeck () {
    this.cards = []
        for (i=0;i<52;i++) {
            this.cards.push(i);
        }
}

CardDeck.prototype.deal = function() {
    r = rnd(this.cards.length);
    console.log(r);
    console.log(this.cards.splice(r,1));
}

CardDeck.prototype.isFull = function() {
    return this.cards.length === 52 ? true : false;
}

CardDeck.prototype.cut = function() {

}

CardDeck.prototype.cut = function() {
    key = rnd(this.cards.length);
    arr1 = this.cards.splice(0,key);
    arr2 = this.cards;
    //console.log("key: " + key)
    return [arr1,arr2];
}

CardDeck.prototype.shuffle = function() {
    var tempi;
    for (k=0;k<=8;k++) {
        for (i=this.cards.length - 1;i>0;i--) {
            div = Math.ceil(i / rnd(Math.sqrt(i)));
            rem = (i % div) + (2 * div % 2 === 0) ? + div: -div;
            tempi = this.cards[i];
            this.cards[i] = this.cards[rem];
            this.cards[rem] = tempi;
             //console.log("------\nstart: " +i);
             //console.log("div: " + div );
             //console.log("rem: " + rem);
        }
    }
}

function rnd(max){
     return Math.ceil(Math.random() * max);
}

deck = new CardDeck();