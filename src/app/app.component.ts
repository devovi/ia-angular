import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'led';
  public show: boolean = false;
  public ledon: any = 'Show';

  ngOnInit() {  }

  toggle() {
    this.show = !this.show;

    if (this.show)  {
      this.ledon = "Hide";
    } else {
      this.ledon = "Show";
    }
  }
}
