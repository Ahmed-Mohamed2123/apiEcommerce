import { DashboardService } from './../../../../services/dashboard.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent implements OnInit {

  page = 1;
  collectionSize = 70;

  jewellery: seller[] = []

  constructor(
    private productsService: DashboardService
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getProducts(this.collectionSize, this.page);
    this.productsService.getPostUpdateListener().subscribe((postData: {posts: seller[]}) => {
      postData.posts.filter(post => { 
        if (post['category'] === 'jewellery') {
          this.jewellery.push(post);
        }
      })
      console.log("jewellery", this.jewellery)
    });
  }

}
