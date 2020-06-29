import { Directive, Input, OnInit, Renderer2, ElementRef, Host, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen : boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen= !this.isOpen;
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
