import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) {
    }

    login(email: string, password: string): void {
        if (email === "tila@gmail.com" && password === "agt") {
            localStorage.setItem('email', email);
        }
    }

    logout() {
        //log out user by removing from local storage    
        localStorage.removeItem('email')
        this.router.navigate(['/login']);
    }

    getUser(): any {
        return localStorage.getItem('email');
    }
    isLoggedIn(): boolean {
        // const token = localStorage.getItem("jwt");
        // if(token && !this.jwtHelper.isTokenExpired(token)){
        //     return true
        // }else{
        //     return false;
        // }
        return this.getUser() !== null;
    }   
}
