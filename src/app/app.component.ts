import { Component } from '@angular/core';

@Component({
  selector: 'app-evelyn',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'My Angular App'
  };

  onLogoClicked() {
    alert('Hello there!');
  }

  changeText(newtext: string) {
    this.data.title = newtext;
  }
}
