import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit  {
  publisherForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    this.publisherForm = this.formBuilder.group({
      title: ['',Validators.required]
   });
  }
  ngOnInit(): void {
  } 

   savePublisher() {
    console.log(this.publisherForm.value);
    this.router.navigate(['/publisher/add'])
  }
}
