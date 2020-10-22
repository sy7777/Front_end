import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  @Input() appMystyle;
  constructor(public ref:ElementRef) { }


  ngOnChanges(){
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("指令的change函数when changes happen");
    console.log(this.appMystyle);

    console.log(this.ref);

  }
}
