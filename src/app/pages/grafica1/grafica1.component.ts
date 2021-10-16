import { Component, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {



  public labels1: string[] = ['Pan', 'Resfrescos', 'Tacos'];
  public data1 = [
    [10, 15, 40],
  ];

}
