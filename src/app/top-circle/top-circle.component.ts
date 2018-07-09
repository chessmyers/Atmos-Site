import { Component} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContentmanagerService } from '../contentmanager.service'


@Component({
  selector: 'app-top-circle',
  templateUrl: './top-circle.component.html',
  styleUrls: ['./top-circle.component.css'],
  animations: [
    trigger('buttonState1', [
        state('normal', style({
            width: '49px',
            height: '49px'
        })),
        state('expanded1', style({
            width: '57px',
            height: '57px'
        })),
        transition('normal => expanded1', animate(200)),
        transition('expanded1 => normal', animate(300))
    ]),
    trigger('buttonState2', [
        state('normal', style({
            width: '49px',
            height: '49px'
        })),
        state('expanded2', style({
            width: '57px',
            height: '57px'
        })),
        transition('normal => expanded2', animate(200)),
        transition('expanded2 => normal', animate(300))
    ]),
    trigger('buttonState3', [
        state('normal', style({
            width: '49px',
            height: '49px'
        })),
        state('expanded3', style({
            width: '57px',
            height: '57px'
        })),
        transition('normal => expanded3', animate(200)),
        transition('expanded3 => normal', animate(300))
    ]),
    trigger('buttonState4', [
        state('normal', style({
            width: '49px',
            height: '49px'
        })),
        state('expanded4', style({
            width: '57px',
            height: '57px'
        })),
        transition('normal => expanded4', animate(200)),
        transition('expanded4 => normal', animate(300))
    ]),
    trigger('buttonState5', [
        state('normal', style({
            width: '49px',
            height: '49px'
        })),
        state('expanded5', style({
            width: '57px',
            height: '57px'
        })),
        transition('normal => expanded5', animate(200)),
        transition('expanded5 => normal', animate(300))
    ])
  ]
})


export class TopCircleComponent {

    constructor(private contentmanager: ContentmanagerService) { }

    state:String='normal';
    circleWidth: Number = (window.innerWidth*0.18) + "px";
    circleHeight: Number = (window.innerHeight*0.37) + "px";
    width = 0;
    height = 0;


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
          case 3: {
            this.state == 'normal' ? this.state = 'expanded3' : this.state = 'normal';
            break;
          }
          case 4: {
            this.state == 'normal' ? this.state = 'expanded4' : this.state = 'normal';
            break;
          }
          case 5: {
            this.state == 'normal' ? this.state = 'expanded5' : this.state = 'normal';
            break;
          }
      }
    }

    onClicked(id) {
        this.contentmanager.buttonPressed.emit(id);
    }
  
    topcirc = '../../assets/dottedCircle.png';
    contactsicon = '../../assets/Contacts.png';
    filmicon = '../../assets/Film.png';
    imagesicon = '../../assets/Images.png';
    locationicon = '../../assets/Location.png';
    staricon = '../../assets/Star.png';

    onResize(event) {
       
    this.circleWidth = (window.innerWidth*0.18) + "px";
    this.circleHeight = (window.innerHeight*0.37) + "px";
    }

}
