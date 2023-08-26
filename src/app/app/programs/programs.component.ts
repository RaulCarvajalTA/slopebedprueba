import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/common/interfaces/program.interface';
import { programs } from "./../../common/data/programs.data";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent  implements OnInit {

  constructor() { }

  programs: Program[] = programs;

  ngOnInit() {}

}
