import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthConcessionnaireGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token = this.auth.getTokenCons();
        if(token){
            return true;
        }else{
            this.router.navigateByUrl('/');
            return false;
        }
    }
    
}