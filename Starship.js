function Starship(model, owner) {
    this.model = model;
    this.owner = owner;
    var topSpeed;
}

Starship.prototype.setTopSpeed = function (top) {
    this.topSpeed = top;
    console.log("Top speed is now " + this.topSpeed);
}

Starship.prototype.accelerateTo = function (current) {
//     console.log("current parameter: " + current + "\n");
//     console.log("this.currentSpeed: " + this.currentSpeed + "\n");
//     console.log("this.top: " + this.topSpeed + "\n");
    if (current > this.topSpeed) {
        this.currentSpeed = this.topSpeed;
    } else {this.currentSpeed = current;}
    //this.currentSpeed = current < this.topspeed ? current : this.topspeed;
    //console.log("Current speed is now " + this.currentSpeed);
}

var ship = new Starship("Viper","Pony's");
ship.setTopSpeed(75);