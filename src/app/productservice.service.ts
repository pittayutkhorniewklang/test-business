import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { 
      id: 1, 
      name: 'invisibobble Sprunchie Slim PREMIUM', 
      price: 495, 
      description: 'Sprunchie slim premium collection.', 
      image: 'link_to_image_1' 
    },
    { 
      id: 2, 
      name: 'invisibobble ORIGINAL', 
      price: 299, 
      description: 'The Original invisibobble hair tie.', 
      image: 'link_to_image_2' 
    },
    { 
      id: 3, 
      name: 'invisibobble KIDS', 
      price: 199, 
      description: 'Perfect hair tie for kids.', 
      image: 'link_to_image_3' 
    },
    { 
      id: 4, 
      name: 'invisibobble Power', 
      price: 399, 
      description: 'Strong hold invisibobble for thick hair.', 
      image: 'link_to_image_4' 
    }
  ];

  // ฟังก์ชันค้นหาสินค้าตาม id
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}