import { Component } from '@angular/core';
import { Cells } from './interfaces/cells';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cells: Cells = {
    'input1': [null],
    'operators': ['+'],
    'input2': [null],
    'result': [null]
  };
}
