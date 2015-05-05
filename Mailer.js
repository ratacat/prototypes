var globalSentMessages = [];

function Mailer(fromAddress) {
    var currentMessage = [];
    this.fromAddress = fromAddress;

    globalSentMessages.push(this);
}

function currentMessage() {
    
}

var bb = new Mailer("bb@aolul.com");