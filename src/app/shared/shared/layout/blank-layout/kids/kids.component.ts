import { DashboardService } from './../../../../services/dashboard.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  page = 1;
  collectionSize = 70;

  kids: seller[] = []

  constructor(
    private productsService: DashboardService
  ) {
    
  }

  ngOnInit(): void {
    this.productsService.getProducts(this.collectionSize, this.page);
    this.productsService.getPostUpdateListener().subscribe((postData: {posts: seller[]}) => {
      postData.posts.filter(post => { 
        if (post['category'] === 'kids') {
          this.kids.push(post);
        }
      })
      console.log("kids", this.kids)
    });
  }

}
