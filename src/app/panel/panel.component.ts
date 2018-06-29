import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Layout, EventMessage } from '../container';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() children?: number[];
  @Input() layout?: Layout;
  @Output() controlEvent = new EventEmitter<EventMessage>();

  ngOnInit() {
  }

  onControlEvent(payload: EventMessage): void {
    this.controlEvent.emit(payload);
  }

}
