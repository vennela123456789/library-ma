import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
authors: any[] = [];
  constructor( 
    private authorService:AuthorsService) {
    // this.authorService.get((response:any){
    //   this.authors = response;
    //  });
   }

  ngOnInit(): void {
  }

}
