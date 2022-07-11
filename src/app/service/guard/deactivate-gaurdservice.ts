import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateGaurd{
    canExit:()=> boolean|Promise<boolean>|Observable<boolean>

}

 export class DeactivateGaurdService implements CanDeactivate<IDeactivateGaurd>{
    canDeactivate(component: IDeactivateGaurd, Route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit();
 }
}