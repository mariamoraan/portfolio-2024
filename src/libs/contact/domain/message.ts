export interface MessagePrimitives {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export class Message {
  from: string;
  to: string;
  subject: string;
  text: string;

  constructor(messagePrimitives: MessagePrimitives) {
    this.from = messagePrimitives.from;
    this.to = messagePrimitives.to;
    this.subject = messagePrimitives.subject;
    this.text = messagePrimitives.text;
  }

  static fromPrimitives(primitives: MessagePrimitives): Message {
    return new Message({
      from: primitives.from,
      to: primitives.to,
      subject: primitives.subject,
      text: primitives.text,
    });
  }

  toPrimitives(): MessagePrimitives {
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
    };
  }
}
