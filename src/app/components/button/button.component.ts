import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter();
  @Input() text45: string = "click";
  @Input() color: string = "";
  

  constructor(){}

  ngOnInit(): void {}

  onClick(): void{
    console.log("button was clicked");
  }

}
