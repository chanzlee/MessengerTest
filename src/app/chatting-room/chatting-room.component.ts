import { AuthenticationService} from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { MessagingService } from '../messaging.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatting-room',
  templateUrl: './chatting-room.component.html',
  styleUrls: ['./chatting-room.component.css']
})
export class ChattingRoomComponent implements OnInit {

  user;
  messages;
  messages$: Observable<any[]>;
  messageSnapshot;
  roomKey=null;
  room=null;
  room$;
  
  constructor(private messagingService: MessagingService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
    this.messages = this.messagingService.getmessages();
    this.messageSnapshot = this.messagingService.getmessageSnapshot();
  }

  getRoom(roomKey) {
    this.roomKey = roomKey;
    this.room = this.messagingService.getroom(roomKey);
    this.room$ = this.messagingService.getroom(roomKey).valueChanges();
    // this.database.list('/messages/' + roomKey);
  }

  addMessage(message: string) {
    this.messagingService.addMessage(this.roomKey, message);
  }

}
