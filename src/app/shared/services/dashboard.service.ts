import { seller } from './../interfaces/seller';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {

  woman: seller[] = [];
  men: seller[] = [];
  kids: seller[] = [];
  jewellery: seller[] = [];
  accessories: seller[] = [];
  postUpdate = new Subject<{posts: seller[], postCount: number}>();

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    
  }

  

  myFiles:string [] = [];
  posts: seller[] = [];

  getFileDetails(event) {
    
    if (event.target.files.length > 6) {
      
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(event.target.files[i]);
      }
    }
  }

  addProduct(image: string ,title: string, description: string, rate: string, price: string, quantity: string, color: string, size: string, category: string) {
    const postData = new FormData();
    for (let i = 0; i < this.myFiles.length; i ++) {
      postData.append("image", this.myFiles[i], title[i]);
    }
    postData.append('title', title);
    postData.append("description", description);
    postData.append("rate", rate);
    postData.append("price", price);
    postData.append("quantity", quantity);
    postData.append("color", color);
    postData.append("size", size);
    postData.append("category", category);
    this.http.post<{ message: string, post: seller }>('http://localhost:3003/api/dashboard/add', postData)
      .subscribe((res) => {
        console.log(res)
        console.log(this.posts);
      }, err => {
        console.log(this.posts);
        
      })
  }

  getProducts(postPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postPerPage}&page=${currentPage}`;
    this.http.get<{ message: string, posts: seller[], maxPosts: number }>('http://localhost:3003/api/dashboard/getPosts' + queryParams)
      .subscribe(res => {
        this.posts = res.posts;
        this.postUpdate.next({posts: [...this.posts], postCount: res.maxPosts});
      })
  }
  getPostUpdateListener() {
    return this.postUpdate.asObservable();
  }
  
}

