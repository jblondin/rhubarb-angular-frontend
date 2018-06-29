import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { UiComponent, Panel, Layout, Control, EventMessage } from '../container';


@Component({
  selector: 'ui-component',
  templateUrl: './uicmpnt.component.html',
  styleUrls: ['./uicmpnt.component.css']
})
export class UicmpntComponent implements OnInit {

  @Input() component?: UiComponent;
  @Input() layout?: Layout;
  @Input() index?: number;
  @Output() controlEvent = new EventEmitter<EventMessage>();

  constructor() { }

  ngOnInit() {
  }

  onControlEvent(payload: EventMessage): void {
    this.controlEvent.emit(payload);
  }

}
