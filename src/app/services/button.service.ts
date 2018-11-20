import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  @Output() buttonClick = new EventEmitter<any>();

  constructor() { }

  btnClick() {
    this.buttonClick.emit();
  }
}
