function Radio (ownerName,signalType) {
    this.ownerName = ownerName;
    this.signalType = signalType;
    if (signalType === "AM") {
        this.station = 535;
    } else if (signalType === "PM") {
        this.station = 88;
    } else {
        this.station = null;
    }
}

Radio.prototype.setStation = function (station) {
    if (this.signalType === "AM") {
        if (535 <= station && station <= 1705 ) {
            this.station = station;
            console.log("station set to " + this.station);
        } else {console.log("AM station must be between 535 and 1705");}
    } else if (this.signalType === "AM") {
        if (88 <= station && station <= 108) {
            this.station = station;
            console.log("station set to " + this.station);
        } else {console.log("FM station must be between 88 and 108");}
    }
}

Radio.prototype.listen = function() {
    return this.signalType === "AM" ? "distorted music" : "clear music";
}

Radio.prototype.toggleSignal = function() {
    this.signalType = this.signalType === "AM" ? "PM" : "AM";
    this.station = this.signalType === "AM" ? "535" : "88";
}

b = new Radio("Charlie", "AM");