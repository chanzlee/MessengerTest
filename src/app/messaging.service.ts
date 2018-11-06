import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './models/message.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  messages: AngularFireList<any>;
  messages$: Observable<any[]>;
  messageSnapshot;
  room = null;

  constructor(
    private database: AngularFireDatabase,
    public authService: AuthenticationService) {
    this.messages = database.list('messages');
    this.messages$ = this.messages.valueChanges();
    this.messageSnapshot = this.messages.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    }));
  }

  getmessages() {
    return this.messages;
  }

  getroom(roomKey) {
    return this.database.list('messages/' + roomKey);
    
  }

  getmessageSnapshot () {
    return this.messageSnapshot;
  }

  addMessage(roomKey: string, message: string) {
    console.log(roomKey);
    console.log(message);
    console.log(this.authService.getCurrentUser());
    this.database.list('messages/' + roomKey).push({"text": message, "user": this.authService.getCurrentUser().displayName});
  }

  // addMessage(key: string, course: string) { 
  //   this.courses.update(key, { name: course });
  // }
}