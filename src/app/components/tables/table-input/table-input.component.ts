import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss']
})
export class TableInputComponent {
  @Input() cells: number[];
}
