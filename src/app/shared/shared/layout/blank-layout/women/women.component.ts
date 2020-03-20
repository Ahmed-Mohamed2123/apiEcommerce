import { DashboardService } from './../../../../services/dashboard.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  
  womens: seller[] = [];

  public maxSize:number = 5;
  bigTotalItems:number = 20;
  bigCurrentPage:number = 2;
  numPages:number = 0;
  itemsPerPage = 1;
  myVar:Boolean=false;
  

  getListGroups(){

    this.productsService.getProducts(this.itemsPerPage, this.bigCurrentPage+1)

  }

  max: number = 5;
  isReadonly: boolean = true;

  constructor(
    
    private productsService: DashboardService
  ) {
    
  }

  ngOnInit(): void {
    this.getListGroups();
    this.productsService.getProducts(this.itemsPerPage, this.bigCurrentPage+1);
    this.productsService.getPostUpdateListener().subscribe((postData: {posts: seller[],  postCount: number}) => {
      postData.posts.filter(post => { 
        if (post['category'] === 'woman') {
          this.womens.push(post);
        }
        this.numPages = postData.postCount;
      })
      // console.log("womens", this.womens)
    });
    
    
  
    
    
  }

  
}