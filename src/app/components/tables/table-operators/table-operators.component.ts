import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-operators',
  templateUrl: './table-operators.component.html',
  styleUrls: ['./table-operators.component.scss']
})
export class TableOperatorsComponent {
  @Input() cells: string[];

  operators: string[] = ['+', '-', '*', '/'];
}
