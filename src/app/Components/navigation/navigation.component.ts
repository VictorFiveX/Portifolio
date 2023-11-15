import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  showNav: boolean = false;
  isMenuOpen = false;
  navigation = document.querySelector("#navigation");
  activeSection: HTMLElement | null = null;

  toggleMenu() {
    
    this.isMenuOpen = !this.isMenuOpen;
    
}
  constructor(private el: ElementRef) {}

@HostListener('window:scroll', [])
    onScroll() {
    this.showNavOnScroll();
    this.updateActiveSection();
    this.activateMenuAtCurrentSection(document.querySelector('#about') as HTMLElement);
    this.activateMenuAtCurrentSection(document.querySelector('#projects') as HTMLElement);
    this.activateMenuAtCurrentSection(document.querySelector('#knowledge') as HTMLElement);
    this.activateMenuAtCurrentSection(document.querySelector('#contact') as HTMLElement);

    if (window.scrollY > 0) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }

}
  ngOnInit() {
    
    ScrollReveal().reveal('.scroll-effect');
  }

  activateMenuAtCurrentSection(section: HTMLElement) {
    const targetLine = window.scrollY + window.innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    const sectionBoundaries =
      sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
    if (menuElement) { 
      // Verifica se menuElement não é nulo
      menuElement.classList.remove('active');
    
      if (sectionBoundaries) {
        menuElement.classList.add('active');
      }
    }
  }

  openMenu() {
    console.log("Abriu");
    document.body.classList.add('menu-expanded');
  }
  
  closeMenu() {
    console.log("Fechou");
    document.body.classList.remove('menu-expanded');
  }


updateActiveSection() {
  const sections = this.el.nativeElement.querySelectorAll('section'); 
// Supondo que você tenha elementos 'section'

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
      // A seção está visível na janela
      if (this.activeSection) {
        this.activeSection.classList.remove('active');
      }
      this.activeSection = section;
      if (this.activeSection) { 
        // Verifica se activeSection não é nulo
        this.activeSection.classList.add('active');
        
        const sectionId = this.activeSection.getAttribute('id');
        const menuElement = this.el.nativeElement.querySelector(`.menu a[href*=${sectionId}]`);

        const menuItems = this.el.nativeElement.querySelectorAll('.menu a');
        menuItems.forEach((item: HTMLElement) => item.classList.remove('active'));

        if (menuElement) { 
          // Verifica se menuElement não é nulo
          menuElement.classList.add('active');
        }

        break;
      }
    }
  }
}

showNavOnScroll() {

// Implementação da função showNavOnScroll
  const navigation = document.querySelector('#navigation');
  if(navigation){
  if (window.scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}
}

}

