import {Pipe , PipeTransform} from "@angular/core"

@Pipe({
    name:'discount'
})
export class DiscountPipe implements PipeTransform {
transform(value , p){

    if(p)
    return value = value*p/100
    else{
       return value
    }
}
}