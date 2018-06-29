import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'control-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
