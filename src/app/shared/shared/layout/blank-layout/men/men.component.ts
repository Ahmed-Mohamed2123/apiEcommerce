import { DashboardService } from './../../../../services/dashboard.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  page = 1;
  collectionSize = 70;

  mens: seller[] = [];

  constructor(
    private productsService: DashboardService
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getProducts(this.collectionSize, this.page);
    this.productsService.getPostUpdateListener().subscribe((postData: {posts: seller[]}) => {
      postData.posts.filter(post => { 
        if (post['category'] === 'men') {
          this.mens.push(post);
        }
      })
      console.log("kids", this.mens)
    });
  }

}
