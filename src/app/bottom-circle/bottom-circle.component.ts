import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-bottom-circle',
  templateUrl: './bottom-circle.component.html',
  styleUrls: ['./bottom-circle.component.css'],
  animations: [
    trigger('bState1', [
        state('normal', style({
            width: '73px',
            height: '73px'
        })),
        state('expanded1', style({
            width: '85px',
            height: '85px'
        })),
        transition('normal => expanded1', animate(200)),
        transition('expanded1 => normal', animate(300))
    ]),
    trigger('bState2', [
        state('normal', style({
            width: '73px',
            height: '73px'
        })),
        state('expanded2', style({
            width: '85px',
            height: '85px'
        })),
        transition('normal => expanded2', animate(200)),
        transition('expanded2 => normal', animate(300))
    ])
  ]
})
export class BottomCircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
      
  state = 'normal';
      
  onAnimate(n) {
      switch (n) {
          case 1: {
            this.state == 'normal' ? this.state = 'expanded1' : this.state = 'normal';
            break;
          }
          case 2: {
            this.state == 'normal' ? this.state = 'expanded2' : this.state = 'normal';
            break;
          }
      }
    }
  
  bottomcirc = '../../assets/smallDottedCircle.png';
  phoneicon = '../../assets/Phone.png';
  emailicon = '../../assets/Email.png';

}
