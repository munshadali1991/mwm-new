import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mwm-cli';
  appcomponentTitle = "I am app component from component.ts";
  eventHandler() {
  		alert("thanks for click on me");
  }
}
