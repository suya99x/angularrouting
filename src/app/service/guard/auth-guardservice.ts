import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Authservice } from "./authservice";


@Injectable()
export class AuthGaurdService implements CanActivate,CanActivateChild{

    constructor(private authservice:Authservice,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let isLoggedin= this.authservice.isAuthenticated();
        if(isLoggedin)
        {
            return true;
        }
        else{
              this.router.navigate(['/']);
              return false
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return this.canActivate(childRoute,state); 
    }
}