import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})
export class TableResultComponent {
  @Input() cells: number[];
}
