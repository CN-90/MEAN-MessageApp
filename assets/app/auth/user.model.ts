import { Message } from "../messages/message.model";

export class User {
  constructor(
    private firstName: String,
    private lastName: String,
    private password: String,
    private email: String,
    private messages: Message[]
  ){}
}