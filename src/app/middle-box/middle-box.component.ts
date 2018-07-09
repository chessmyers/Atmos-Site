import { Component, OnInit } from "@angular/core";
import { ContentmanagerService } from "../contentmanager.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-middle-box",
  templateUrl: "./middle-box.component.html",
  styleUrls: ["./middle-box.component.css"],
  animations: [
    trigger("contentState", [
      state(
        "normal",
        style({
          //     display: 'none',
          opacity: 0
        })
      ),
      state(
        "show",
        style({
          // display:'block',
          opacity: 1
        })
      ),
      transition("normal => show", animate(400)),
      transition("show => normal", animate(50))
    ])
  ]
})

export class MiddleBoxComponent implements OnInit {
  constructor(private contentmanager: ContentmanagerService) {}

  innerContent: String = `
    <h1>Welcome to Atmos</h1>
<h2>All your problems will be solved here</h2>
`;

  innerContentTemp: String = "";

  contentId: Number = 0;

  state: String = "show";

  expandicon = "../../assets/Expand.png";

  changeState() {
    this.innerContent = this.innerContentTemp;
    this.state = "show";
  }

  ngOnInit() {
    this.contentmanager.buttonPressed.subscribe((contentid: Number) => {
      // Contacts 1, Video 2, Images 3, Location 4, Featured 5
      switch (contentid) {
        case 1: {
          this.innerContentTemp = `
            <h2>Hello There!</h2>
            <hr>
            <p>This is the contacts page.  This is where we put sum content!</p>`;

          if (this.contentId != 1) {
            this.state = "normal";
            this.contentId = 1;
          }

          break;
        }
        case 2: {
          this.innerContentTemp =
            "<h2>Hello this is the videos page!</h2><p>Thanks for coming</p>";

          if (this.contentId != 2) {
            this.state = "normal";
            this.contentId = 2;
          }

          break;
        }
        case 3: {
          this.innerContentTemp =
            "<h2>Here will be some images!</h2><h3>Cool, right?</h3>";

          if (this.contentId != 3) {
            this.state = "normal";
            this.contentId = 3;
          }

          break;
        }
        case 4: {
          this.innerContentTemp =
            "<h2>Location information will <br />be located here</h2><p>Very handy</p>";

          if (this.contentId != 4) {
            this.state = "normal";
            this.contentId = 4;
          }

          break;
        }
        case 5: {
          this.innerContentTemp =
            "<h2>This here is all the feauted <br />content of the site</h2><h3>Theres not too much to show just yet</h3>";

          if (this.contentId != 5) {
            this.state = "normal";
            this.contentId = 5;
          }

          break;
        }
      }
    });
  }

  openPopup() {
    // Contacts 1, Video 2, Images 3, Location 4, Featured 5
    this.contentmanager.popoverOpened.emit(this.contentId);

  }
    
    
}
