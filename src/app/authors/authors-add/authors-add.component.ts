import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors-add',
  templateUrl: './authors-add.component.html',
  styleUrls: ['./authors-add.component.scss']
})
export class AuthorsAddComponent implements OnInit {
  authorForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authorService: AuthorsService,
    private router: Router) {
      this.authorForm=this.formBuilder.group({
        firstName:['', Validators.required],
        middleName: [],
        lastName: ['',Validators.required],
        description: []

      })

     }

  ngOnInit(): void {
  }
saveAuthor() {
  // this.authorService.create(this.authorForm.value, (response: any) =>{
  // console.log(this.authorForm.value);
  // this.router.navigate(['/author/list'])
  // });
}
}
