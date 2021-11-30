import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) { 
      this.forgotForm = this.formBuilder.group({
        emailaddress: ['',Validators.required]
      });
    }

  ngOnInit(): void {
  }

  forgot(){
    console.log(this.forgotForm.value);
    this.router.navigate(['/auth/forgotconfirm']);
  }

}
