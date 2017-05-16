import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    //click事件
    <button (click)="onClickMe()">Click me!</button>
    <p>{{clickMessage}}<p>
    //$event
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    //模板引用變量
    <input #box (keyup)="onKey1(box.value)">
    <p>{{values1}}</p>
    //按鍵事件過濾
    <input #box1 (keyup.enter)="update(box1.value)" (blur)="update(box1.value)">
    <p>{{values2}}</p>
    `
})
export class AppComponent {
  title:string = 'Tour of Heroes';
  heroes:Hero[] = [
   new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
  ];
  myHero:Hero = this.heroes[0];
  //click
  clickMessage = '';
  onClickMe(){
    this.clickMessage = 'You are my hero!';
  }
  //$event
  values = '';
  onKey(event: KeyboardEvent){
    // this.values += event.target.value + ' | ';
    // this.values += event.key + ' | ';
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  //模板變量
   values1 = '';
   onKey1(value: string){
      this.values1 += value + ' | ';
  }
  //按鍵事件過濾
  values2 = '';
  update(value:string){
    this.values2 = value;
  }
}
