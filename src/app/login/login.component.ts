import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user;
  public isLoggedIn: Boolean;
  public userName: String;
  public profilePic: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.profilePic= user.photoURL || 
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwippJWGlr_eAhUqjFQKHeTaD0IQjRx6BAgBEAU&url=http%3A%2F%2Ffairlyoddfanon.wikia.com%2Fwiki%2FFile%3AAdult_Poof_image.png&psig=AOvVaw2a7bj1o3uV6hfOOQ6jCFlz&ust=1541573245547117';
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}