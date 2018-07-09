import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logo = '../assets/logoBig.png';
  topcirc = '../assets/dottedCircle.png';
  bottomcirc = '../assets/smallDottedCircle.png';
  height = 0;
  width = 0;
  
  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.targe.innerHeight;
  }
}
