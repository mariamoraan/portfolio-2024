import { inject, injectable } from "tsyringe";
import { Message } from "../domain/message";
import type { MessageRepository } from "../domain/message.repository";
import { MESSAGE_REPOSITORY } from "@/core/dependency-injection/injection-tokens";

@injectable()
export class SendMessage {
  constructor(
    @inject(MESSAGE_REPOSITORY)
    private readonly messageRepository: MessageRepository
  ) {}
  execute(message: Message) {
    return this.messageRepository.send(message);
  }
}
