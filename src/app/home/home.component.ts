import { Component, OnInit, Optional, animate } from '@angular/core';
import {trigger,style,transition,keyframes,query,stagger} from '@angular/animations';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true})

    ])
  ])]
})

export class HomeComponent implements OnInit {

  itemCount: number;
  goalText: string = "My first life goal";

  btnText: string = "Add An Item";

  goals=[];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {

    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {

    this.goals.splice(i,1);
    this.itemCount=this.goals.length
    this._data.changeGoal(this.goals);
    
  }

}
