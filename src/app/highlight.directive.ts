import {Directive , ElementRef ,  Input,HostListener} from "@angular/core"

@Directive({
selector:'[highlight]'
})
export class HighlightDirective{
    @Input('highlight') color
    ngOnChanges(){
        console.log("user is enetering" , this.color);
        this.element.nativeElement.style.color=this.color   
        
    }
    constructor(private element : ElementRef){
     console.log("directive called" , this.element.nativeElement);
     
    }

    @HostListener('mouseover')  demo = ()=>{
    } 

    @HostListener('mouseleave')  demo1(){
        this.element.nativeElement.style.color=null   
    } 
}