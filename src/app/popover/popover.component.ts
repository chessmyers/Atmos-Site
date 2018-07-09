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
  selector: "app-popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.css"],
  animations: [
    trigger("popoverState", [
      state(
        "closed",
        style({
          opacity: 0,
          "z-index": -1
        })
      ),
      state(
        "open",
        style({
          opacity: 1,
          "z-index": 20
        })
      ),
      transition("closed => open", animate(800)),
      transition("open => closed", animate(400))
    ])
  ]
})
export class PopoverComponent implements OnInit {
  constructor(private contentmanager: ContentmanagerService) {}

  state = "closed";
  innerContent = "<h1>Placeholder content</h1>";
  popwidth = window.innerWidth - 200 + "px";
  popheight = window.innerHeight - 200 + "px";
  closeicon = "../../assets/Close.png";

  closePopup() {
    this.state = "closed";
  }

  ngOnInit() {
    this.contentmanager.popoverOpened.subscribe((contentId: Number) => {
      // Contacts 1, Video 2, Images 3, Location 4, Featured 5
      switch (contentId) {
        case 1: {
          this.innerContent = "<h1>Contacts Info</h1><h2>Sub-Content</h2>";
          break;
        }
        case 2: {
          this.innerContent = "<h1>Video Info</h1><h2>Sub-Content</h2>";
          break;
        }

        case 3: {
          this.innerContent = "<h1>Images Info</h1><h2>Sub-Content</h2>";
          break;
        }

        case 4: {
          this.innerContent = "<h1>Location Info</h1><h2>Sub-Content</h2>";
          break;
        }

        case 5: {
          this.innerContent = "<h1>Featured Info</h1><h2>Sub-Content</h2><img src='http://2.bp.blogspot.com/-eQUGEXPniEo/UbcNuwUy3XI/AAAAAAAABXg/MDTL82kz72c/s1600/cute-puppy-dog-wallpapers2.gif' width=200px height=150px>";
          break;
        }
      }
      this.state = "open";
    });
  }
}
