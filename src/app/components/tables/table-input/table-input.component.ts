import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableInputComponent implements OnInit {
  @Output() changeValues = new EventEmitter<any>();
  @Output() buttonClick = new EventEmitter<any>();
  @Input() cells: number[];
  @Input() inputNumber: number;

  constructor(private cdRef: ChangeDetectorRef) {
    this.cdRef.detach();
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  onKeyUp(value, index, inputNumber) {
    this.changeValues.emit({
      'value': value,
      'index': index,
      'inputNumber': inputNumber
    });
  }

  btnClick() {
    this.buttonClick.emit(['input', this.inputNumber]);
    this.cdRef.detectChanges();
  }
}
