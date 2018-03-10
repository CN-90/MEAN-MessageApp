import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message-service';

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
    <app-message 
      (editClicked)="editMessage($event)" 
      *ngFor="let message of messages; let i = index" 
       [message]="message">
    </app-message>
    </div>
  `,
  
})

export class MessageListComponent implements OnInit {
  messages: Message[] = []
  constructor(private messageService: MessageService){}
  
  ngOnInit(){
    this.messages = this.messageService.getMessages();
    // this.messageService.messagesChanged.subscribe((messages) => this.messages = messages)
  }

}