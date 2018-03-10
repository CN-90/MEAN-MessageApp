import { Message } from "./message.model";
// import { HttpClient } from '@angular/common/http'
// import { Injectable } from "@angular/core";
// import { Subject } from "rxjs/Subject";

// @Injectable()

export class MessageService {
  // messagesChanged = new Subject<any>();
  messages: Message[] = []

  constructor(){
  }

  addMessage(message: Message){
    this.messages.push(message);
    // this.messagesChanged.next(this.messages.slice());
  }

  getMessages(){
    return this.messages;
  }

  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message), 1);
    // this.messagesChanged.next(this.messages.slice());
  }

  editMessage(){

  }
}