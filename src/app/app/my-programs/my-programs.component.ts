import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/common/interfaces/program.interface';

@Component({
  selector: 'app-my-programs',
  templateUrl: './my-programs.component.html',
  styleUrls: ['./my-programs.component.scss'],
})
export class MyProgramsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  programs: Program[] = [
    {
      id: 1,
      title: 'Prueba 1',
      info: [
        {
          hour: "1",
          angle: 15,
        },
        {
          hour: "30",
          angle: 15,
        }]
    }
  ]

}
