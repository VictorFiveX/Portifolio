import { Component, HostListener, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})

export class BackToTopComponent implements AfterViewInit, OnInit {
 
  showButton: boolean = false;
  
  constructor(){
   
  }

  ngOnInit() {
    this.showButton = false; 
  }

  ngAfterViewInit() {
    
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 500) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }

  }
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}