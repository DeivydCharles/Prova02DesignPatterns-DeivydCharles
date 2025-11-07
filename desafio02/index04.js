class TextMessage {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

class MessageDecorator {
  constructor(message) {
    this.wrappedMessage = message;
  }

  getText() {
    return this.wrappedMessage.getText();
  }
}

class CensorDecorator extends MessageDecorator {
  constructor(message, wordToCensor) {
    super(message);
    this.wordToCensor = wordToCensor;
    this.censorMark = "*".repeat(wordToCensor.length);
  }

  getText() {

    const originalText = super.getText();
    

    const censoredText = originalText.replace(new RegExp(this.wordToCensor, 'gi'), this.censorMark);
    
    return censoredText;
  }
}

class UpperCaseDecorator extends MessageDecorator {
  constructor(message) {
    super(message);
  }

  getText() {
    return super.getText().toUpperCase();
  }
}

class ExclamationDecorator extends MessageDecorator {
  constructor(message) {
    super(message);
  }

  getText() {

    return super.getText() + "!";
  }
}

console.log("--- Exemplo 1 ---");

let msg = new TextMessage("hoje o dia está horrível");
console.log("Original:", msg.getText());

msg = new CensorDecorator(msg, "horrível");
console.log("Censurado:", msg.getText());

msg = new ExclamationDecorator(msg);
console.log("Censurado + Exclamação:", msg.getText());


console.log("\n--- Exemplo 2 (Encadeamento) ---");

let msg2 = new TextMessage("que dia fantástico");

let decoratedMsg2 = new ExclamationDecorator(
  new UpperCaseDecorator(msg2)
);

console.log("Original:", msg2.getText());
console.log("Decorada (Maiúsculas + Exclamação):", decoratedMsg2.getText());