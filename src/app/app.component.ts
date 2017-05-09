/**
 * Created by xiaoyunhuan on 2017/5/8.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }