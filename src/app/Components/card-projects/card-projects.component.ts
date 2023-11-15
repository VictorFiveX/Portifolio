import { Component, OnInit , Input  } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css']
})
export class CardProjectsComponent implements OnInit{

  @Input()
	ProjImg:string = '';
  @Input()
	ProjName:string=""
	@Input()
	ProjTecs:string =""
  @Input()
	ProjRep:string =""
  @Input()
	ProjView:string =""
  @Input()
	ProjDesc:string =""

  constructor() { }

  ngOnInit(): void {
  }
}
