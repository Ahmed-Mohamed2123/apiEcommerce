import { DashboardService } from './../../../../services/dashboard.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  page = 1;
  collectionSize = 70;
  accessories: seller[] = [];

  constructor(
    private productsService: DashboardService
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getProducts(this.collectionSize, this.page);
    this.productsService.getPostUpdateListener().subscribe((postData: {posts: seller[]}) => {
      postData.posts.filter(post => { 
        if (post['category'] === 'accessories') {
          this.accessories.push(post);
        }
      })
      console.log("accessories", this.accessories)
    });
  }

}
