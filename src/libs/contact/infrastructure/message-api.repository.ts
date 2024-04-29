import { Message } from "../domain/message";
import { MessageRepository } from "../domain/message.repository";
import { sendMessageAcction } from "./actions/send-message.action";

export class MessageApiRepository implements MessageRepository {
  async send(message: Message) {
    await sendMessageAcction({
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: `<p>${message.text}</p>`,
    });
  }
}
