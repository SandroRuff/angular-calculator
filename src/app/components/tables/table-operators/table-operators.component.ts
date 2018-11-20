import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-operators',
  templateUrl: './table-operators.component.html',
  styleUrls: ['./table-operators.component.scss']
})
export class TableOperatorsComponent implements OnChanges {
  @Output() changeOperator = new EventEmitter<any>();
  @Output() buttonClick = new EventEmitter<any>();
  @Input() cells: string[];

  operators: string[] = ['+', '-', '*', '/'];

  ngOnChanges() {
  }

  itemSelected(operator, index) {
    this.changeOperator.emit({
      'operator': operator,
      'index': index
    });
  }

  btnClick() {
    this.buttonClick.emit(['operators']);
  }
}
