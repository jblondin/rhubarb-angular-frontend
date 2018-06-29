import { Injectable } from '@angular/core';
// import { Pipe, PipeTransform } from '@angular/core';
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
  // effects: Effect[];
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
// @Injectable({ providedIn: 'root' })
// export class LayoutService {
//   getUiComponent(layout: Layout, index: number): UiComponent {
//     return layout.component_store[index];
//   }
// }

// export enum StateValue { Selected }

// export class Effect {
//   attr: string;
//   value?: any;
// }

// @Injectable({ providedIn: 'root' })
// export class EffectGenerate {
//   generate(effect: Effect, override: any): object {
//     if (effect.value) {
//       return { [effect.attr]: effect.value };
//     } else {
//       return { [effect.attr]: override };
//     }
//   }
// }

// @Pipe({name: 'effectParser'})
// export class EffectParserPipe implements PipeTransform {
//   transform(value: any): Effect {
//     if (value.attr) {
//       console.log("has attr");
//     }
//     return { attr: "foo", value: StateValue.Selected };
//   }
// }
