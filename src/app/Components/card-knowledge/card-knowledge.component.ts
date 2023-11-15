import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-knowledge',
  templateUrl: './card-knowledge.component.html',
  styleUrls: ['./card-knowledge.component.css']
})
export class CardKnowledgeComponent implements OnInit {

  @Input()
	ImagemTEC:string = '';
  @Input()
	TecName:string=""
	@Input()
	TecDesc:string =""
  
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
