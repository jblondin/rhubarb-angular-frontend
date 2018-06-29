import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Effect, EffectGenerate } from '../../container';

export class ButtonProps {
  text: string;
  // on_click: Effect;
}

export class ButtonClick {}

@Component({
  selector: 'control-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() properties?: Partial<ButtonProps>;
  @Output() clickEvent = new EventEmitter<ButtonClick>();

  // constructor(private effectGen: EffectGenerate) { }

  ngOnInit() {
  }

  onClick(): void {
    // console.log(`sending click ${id}`);
    // console.log(`sending click with payload ${this.properties.on_click}`);
    // this.clickEvent.emit(this.effectGen.generate(this.properties.on_click, this.properties.text));
    this.clickEvent.emit(new ButtonClick());
  }
}
