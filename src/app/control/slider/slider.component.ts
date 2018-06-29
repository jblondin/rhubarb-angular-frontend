import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
// import { Effect, EffectGenerate } from '../../container';

export class SliderProps {
  values: string[];
  curr_value: number;
  // on_change: Effect;
}

export class SliderChange {
  idx: number;

  constructor(idx: number) {
    this.idx = idx;
  }
}

@Component({
  selector: 'control-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() properties?: Partial<SliderProps>;
  @Output() updateEvent = new EventEmitter<SliderChange>();

  // constructor(private effectGen: EffectGenerate) { }

  ngOnInit() {
    // console.log(this.properties);
  }

  formatThumbLabel(value: number | null): string {
    if (this.properties) {
      return this.properties.values[value];
    } else {
      console.log("properties not yet set");
    }
  }

  onSliderChange(change: MatSliderChange): void {
    this.updateEvent.emit(new SliderChange(change.value));
    // this.updateEvent.emit(this.effectGen.generate(this.properties.on_change, change.value));
  }
}
