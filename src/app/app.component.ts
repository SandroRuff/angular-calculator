import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Cells } from './interfaces/cells';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  cells: Cells = {
    'input1': [null, null],
    'operators': ['+', '*'],
    'input2': [null, null],
    'result': [null, null]
  };

  changeValues(obj: { value: string; index: number; inputNumber: number; }) {
    this.cells[`input${obj.inputNumber}`][obj.index] = obj.value;
    this.getResult(obj.index);
  }

  changeOperator(obj: { operator: string; index: number; }) {
    this.cells.operators[obj.index] = obj.operator;
    this.getResult(obj.index);
  }

  getResult(index) {
    const key = this.cells.operators[index];
    if (this.cells.input1[index] && this.cells.input2[index]) {
      switch (key) {
        case '+': this.cells.result[index] = +this.cells.input1[index] + +this.cells.input2[index]; break;
        case '-': this.cells.result[index] = +this.cells.input1[index] - +this.cells.input2[index]; break;
        case '*': this.cells.result[index] = +this.cells.input1[index] * +this.cells.input2[index]; break;
        case '/': this.cells.result[index] = +this.cells.input1[index] / +this.cells.input2[index]; break;
      }
    } else if (this.cells.result[index] !== null) {
      this.cells.result[index] = null;
    }
  }

  buttonClick(arr) {
    switch (arr[0]) {
      case 'input': this.cells[`input${arr[1]}`].push(null); break;
      case 'operators': this.cells.operators.push('+'); this.getResult(this.cells.operators.length - 1); break;
      case 'result': this.cells.result.push(null); break;
    }
  }
}
