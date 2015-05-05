function XDice (numberOfSides) {
   // this.last = '';
    this.roll = function () {
        l = Math.ceil(Math.random() * numberOfSides);
        this.last = l;
        return l
    }
}

var dice = new XDice(8);