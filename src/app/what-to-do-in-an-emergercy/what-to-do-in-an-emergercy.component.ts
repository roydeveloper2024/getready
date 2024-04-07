import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-what-to-do-in-an-emergercy',
  templateUrl: './what-to-do-in-an-emergercy.component.html',
  styleUrls: ['./what-to-do-in-an-emergercy.component.scss']
})
export class WhatToDoInAnEmergercyComponent implements OnInit {


  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    var navbar = document.getElementById("tab");
    var sticky = navbar.offsetTop;

    console.log(window.pageYOffset+" = "+ sticky)
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }

  }


  items: any;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      { label: 'EARTHQUAKE', },
      { label: 'TYPHOON' },
      { label: 'FLOOD' },
      { label: 'FIRE' },
      { label: 'PANDEMIC' }
    ];


  }






  activateMenu(test){
    console.log();

    let el = document.getElementById(test.activeItem.label.toLowerCase());
    el.scrollIntoView({behavior: 'smooth'});
  }

}
