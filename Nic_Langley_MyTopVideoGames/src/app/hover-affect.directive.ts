import { Directive, ElementRef, Input, OnInit, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit{
  @Input () effect?: string;
  constructor(private elm: ElementRef) {

  }
  ngOnInit(): void {
  }

  @HostListener('mouseover') onHover(btn: any){
    if (this.effect == 'underline'){
      this.elm.nativeElement.style.textDecoration = "underline";
    }
    if (this.effect == 'bold'){
      this.elm.nativeElement.style.fontWeight = "bold";
    }
    if (this.effect == 'background'){
      this.elm.nativeElement.style.border = "3px solid black";
    }
  }
  @HostListener('mouseleave') onExit(btn: any){
    this.elm.nativeElement.style.textDecoration = "none";
    this.elm.nativeElement.style.fontWeight = "normal";
    if (this.elm.nativeElement.style.border == '3px solid black'){
    this.elm.nativeElement.style.border = "1px solid black";
    }
  }

}
