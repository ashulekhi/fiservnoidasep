import {NgModule} from "@angular/core"
import {CartComponent} from "./cart.component"
import {RouterModule , Routes} from "@angular/router"

const routes :  Routes = [
    {path:'',component:CartComponent}
]

@NgModule({
declarations:[CartComponent],
imports:[RouterModule.forChild(routes)]
})
export class CartModule{

}