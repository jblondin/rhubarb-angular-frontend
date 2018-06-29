import { Component } from '@angular/core';

import { RhubarbService } from './rhubarb.service';
import { Layout, UiState, ClientMessage, EventMessage } from './container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rhubarb Frontend!';

  public chart = {
    data: undefined,
    layout: undefined,
    config: { displayModeBar: false }
  };
  public layout: Layout = undefined;
  state: UiState = undefined;

  constructor(private rhubarbService: RhubarbService) {}

  ngOnInit() {
    this.getGraphContainer();
  }
  getGraphContainer(): void {
    this.rhubarbService.getGraphContainer()
      .subscribe(container => {
        // console.log(container.controls);
        this.chart.data = container.chart.data;
        this.chart.layout = container.chart.layout;
        this.layout = container.layout;
        this.state = container.state;
      });
  }
  getGraphContainerWithState(state: UiState): void {
    // console.log(state);
    this.rhubarbService.getGraphContainerWithState(state)
      .subscribe(container => {
        // console.log(container);
        if (container.chart) {
          this.chart.data = container.chart.data;
          this.chart.layout = container.chart.layout;
        }
        this.state = container.state;
        //TODO: update components
        for (let ui_component of container.components) {
          if (ui_component.panel) {
            this.layout.component_store[ui_component.idx].panel = ui_component.panel;
          } else if ( ui_component.control) {
            this.layout.component_store[ui_component.idx].control = ui_component.control;
          }
        }
      });
  }

  onControlEvent(payload: EventMessage): void {
    this.getGraphContainerWithState(new ClientMessage(this.state, payload));
  }
}
