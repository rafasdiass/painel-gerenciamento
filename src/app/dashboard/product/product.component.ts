import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});

  products: IProduct[] = [];
  activeProduct: IProduct = {
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: { id: '', name: '', description: '' }
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      imageUrl: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.invalid) {
      return;
    }

    this.products.push(this.activeProduct);
    this.resetForm();
  }

  resetForm() {
    this.productForm.reset();
    this.productForm.markAsUntouched();
    this.productForm.markAsPristine();
    this.activeProduct = {
      id: '',
      imageUrl: '',
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      category: { id: '', name: '', description: '' }
    };
  }

  editProduct(product: IProduct) {
    this.activeProduct = { ...product };
    this.productForm.patchValue(this.activeProduct);
  }

  removeProduct(id: string | undefined) {
    if (id === undefined) {
      return;
    }

    const index = this.products.findIndex(p => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
