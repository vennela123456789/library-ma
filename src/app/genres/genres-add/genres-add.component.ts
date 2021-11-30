import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-genres-add',
  templateUrl: './genres-add.component.html',
  styleUrls: ['./genres-add.component.scss']
})
export class GenresAddComponent implements OnInit {
  genreForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.genreForm = this.formBuilder.group({
      title: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }
 savegenre() {
  console.log(this.genreForm.value)
 }
}
