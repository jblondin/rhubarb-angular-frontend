import { Injectable } from '@angular/core';
import { Plotly } from './plotly/plotly.service';
import { ControlEvent } from './control/control/control.component'

export type UiState = any;
export class UpdateContainer {
  chart: Chart;
  components: UiComponent[];
  state: UiState;
}

export class InitialContainer {
  chart: Chart;
  layout: Layout;
  state: UiState;
}
export class Chart {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}


export class Layout {
  component_store: UiComponent[]
  children: number[];
}
export class UiComponent {
  idx: number;
  control?: Control;
  panel?: Panel;
}

export class Panel {
  children: number[];
}
export class Control {
  type: string;
  properties: Properties;
}
export type Properties = any;

export class ClientMessage {
  ui_state: UiState;
  event_message: EventMessage;

  constructor(state: UiState, event_message: EventMessage) {
    this.ui_state = state;
    this.event_message = event_message;
  }
}
export class EventMessage {
  event: ControlEvent;
  idx: number;
}
