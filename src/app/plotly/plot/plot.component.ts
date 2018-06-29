import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  OnInit,
  DoCheck,
  KeyValueDiffer,
  KeyValueDiffers,
  IterableDiffer,
  IterableDiffers
} from '@angular/core';
import { Plotly, PlotlyService } from '../plotly.service';

@Component({
  selector: 'plotly-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit, DoCheck {


  @ViewChild('plot') plotElement: ElementRef;
  @Input() data?: Plotly.Data[];
  @Input() layout?: Partial<Plotly.Layout>;
  @Input() config?: Partial<Plotly.Config>;

  initialized: boolean;

  layoutDiffer: KeyValueDiffer<string, any>;
  dataDiffer: IterableDiffer<any>;

  constructor(
    private plotly: PlotlyService,
    private iterableDiffers: IterableDiffers,
    private keyValueDiffers: KeyValueDiffers,
  ) { }

  ngOnInit() {
    this.initialized = false;
  }

  ngDoCheck() {
    let doUpdate = false;
    if (this.layoutDiffer) {
       if (this.layoutDiffer.diff(this.layout)) {
         doUpdate = true;
       }
    } else if (this.layout) {
      this.layoutDiffer = this.keyValueDiffers.find(this.layout).create();
    }

    if (this.dataDiffer) {
      if (this.dataDiffer.diff(this.data)) {
        doUpdate = true;
      }
    } else if (Array.isArray(this.data)) {
      // data didn't exist before; draw a new plot
      this.plotly.api.newPlot(this.plotElement.nativeElement, this.data, this.layout,
        this.config);
      this.dataDiffer = this.iterableDiffers.find(this.data).create();
    }

    if (doUpdate) {
      this.plotly.api.react(this.plotElement.nativeElement, this.data, this.layout);
    }

  }
}
