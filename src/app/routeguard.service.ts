import {Injectable} from "@angular/core"
import {CanActivate} from "@angular/router"

@Injectable()
export class RouteGuard implements CanActivate {
    canActivate(){
        if(localStorage.email){
            return true
        }
        else{
            return false
        }
    }
}