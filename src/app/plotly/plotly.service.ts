import * as Plotlyjs from 'plotly.js/dist/plotly.min.js';

import { Injectable } from '@angular/core';

export namespace Plotly {
  export type Layout = any;
  export type Data = any;
  export type Config = any;
}

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
  public api = Plotlyjs;

  constructor() { }
}
