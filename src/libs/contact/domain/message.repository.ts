import { Message } from "./message";

export interface MessageRepository {
  send: (message: Message) => Promise<void>;
}
