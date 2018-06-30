import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class ButtonProps {
  text: string;
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


  ngOnInit() {
  }

  onClick(): void {
    this.clickEvent.emit(new ButtonClick());
  }
}
