import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm : FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router) { 
      this.bookForm=this.formBuilder.group({
        title: [],
        subtitle:[],
        ISBN10:[],
        ISBN13:[],
        series:[],
        publisher:[],
        Authors:[],
        Genres:[],
        edition:[],
        publishedYear:[],
        pages:[],
        quantity:[],
        price:[],
        language:[],
        description:[],
        notes:[]

      });

  }

  ngOnInit(): void {
  }
  saveBook() {
    console.log(this.bookForm.value);
  }
}
