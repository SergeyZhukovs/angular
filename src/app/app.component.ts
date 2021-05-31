import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tagsControl: FormControl;
  tags: string[] = ['Latvia', 'Hockey', 'Red machine', 'London', 'Riga'];
  constructor() {
    this.tagsControl = new FormControl(this.tags);

    this.tagsControl.valueChanges.subscribe(value => {
      // Here we can detect changes in control
    });
  }

}
