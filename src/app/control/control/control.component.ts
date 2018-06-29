import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ButtonClick } from '../button/button.component';
import { SliderChange } from '../slider/slider.component';

export class ControlEvent {
  ButtonClick?: ButtonClick;
  SliderChange?: SliderChange;
}
export class EventMessage {
  idx?: number;
  event: ControlEvent;

  constructor(idx: number, event: ControlEvent) {
    this.idx = idx;
    this.event = event;
  }
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() type?: string;
  @Input() properties?: Partial<any>;
  @Input() index?: number;
  @Output() controlEvent = new EventEmitter<EventMessage>();

  constructor() { }

  onControlEvent(payload: ButtonClick | SliderChange): void {
    let controlEvent = new ControlEvent();
    if (payload instanceof ButtonClick) {
      controlEvent.ButtonClick = payload;
    }
    if (payload instanceof SliderChange) {
      controlEvent.SliderChange = payload;
    }
    this.controlEvent.emit(new EventMessage(this.index, controlEvent));
  }

  ngOnInit() {
  }

}
