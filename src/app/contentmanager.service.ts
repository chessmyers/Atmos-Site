import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentmanagerService {
    buttonPressed = new EventEmitter<Number>();
    popoverOpened = new EventEmitter<Number>();

  constructor() { }
    
    // Contacts 1, Video 2, Images 3, Location 4, Featured 5


}
