import { HttpClient } from '@angular/common/http';
import { DashboardService } from './../../../shared/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  formCreate: FormGroup;
  

  constructor(
    public postService: DashboardService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required]}),
      title: new FormControl(null, {validators: [Validators.required]}),
      description: new FormControl(null, { validators: [Validators.required]}),
      rate: new FormControl(null, { validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      quantity: new FormControl(null, {validators: [Validators.required]}),
      color: new FormControl(null, {validators: [Validators.required]}),
      size: new FormControl(null, {validators: [Validators.required]}),
      category: new FormControl(null, { validators: [Validators.required] })
    });


    
  }
  images: string[] = [];
  onImagePicked(event) {
    this.postService.getFileDetails(event);   
    if (event.target.files.length > 6) {
        alert("please select max 6 files")
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        let reader = new FileReader();  
        reader.onload = (event:any) => {
          this.images.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }             
  }

  onSavePost() {
    this.postService.addProduct(
      this.formCreate.value.image,
      this.formCreate.value.title,
      this.formCreate.value.description,
      this.formCreate.value.rate,
      this.formCreate.value.price,
      this.formCreate.value.quantity,
      this.formCreate.value.color,
      this.formCreate.value.size,
      this.formCreate.value.category,
    );
  }

}
