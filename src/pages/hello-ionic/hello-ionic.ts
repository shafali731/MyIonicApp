import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public tap: number = 0;


  constructor() {

  }
  tapEvent(e) {
  this.tap++
}

}
