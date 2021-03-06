import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'dl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: UntypedFormGroup;
    loading: boolean = false;
    submitted: boolean = false;
    returnUrl!: string;
    errorMessage: string = '';

    constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute,
        private router: Router, private authService: AuthService) {
        if (this.authService.isLoggedIn()) {
            //if the user authenticated go to homepage
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        //set return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            this.errorMessage = "Incorrect Credential";
            setTimeout(() => {
                this.errorMessage = '';
            }, 2500);
            return;
        }
        this.submitted = true;
        this.loading = true;
        this.authService.login(this.email?.value, this.password?.value);
        this.router.navigate([this.returnUrl]);
    }
}
