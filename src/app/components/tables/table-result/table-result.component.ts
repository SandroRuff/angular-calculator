import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent {
  @Output() buttonClick = new EventEmitter<any>();
  @Input() cells: number[];

  btnClick() {
    this.buttonClick.emit(['result']);
  }
}
