import id from '@angular/common/locales/id';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  
  products = [
    { 
      id: 1, 
      name: 'invisibobble ', 
      price: 495, 
      description: 'invisibobble ยางรัดผม รุ่น Kids(extra care) Take Me to Candyland', 
      image: 'https://makemydaygroup.com/storage/product/list/313/product-313-1698810588.jpg' ,
      category: ['kid', 'allproduct'] 
    },
    { 
      id: 2, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Kids(extra care) สี magic rainbow ', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1713952678.jpg' ,
      category: ['kid'] 
    },
    { 
      id: 3, 
      name: 'invisibobble Hair Tie', 
      price: 395, 
      description: 'invisibobble ยางรัดผม รุ่น Kids (extra care) สี magic rainbow ', 
      image: 'https://makemydaygroup.com/storage/product/list/347/product-347-1709097668.jpg' ,
      category: ['kid']
    },
    { 
      id: 4, 
      name: 'invisibobble Hair Tie', 
      price: 399, 
      description: 'invisibobble ยางรัดผม รุ่น Kids (extra care) สี magic rainbow', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683280071.jpg' ,
      category: ['kid'] 
    },
    { 
      id: 5, 
      name: 'invisibobble Hair Tie', 
      price: 465, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี Rainbow Vibes ', 
      image: 'https://cs.sekolahpintar.com/storage/product/list/355/product-355-1714462030.jpg' ,
      category: ['original'] 
    },
    { 
      id: 6, 
      name: 'invisibobble Hair Tie', 
      price: 465, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี Cafe Au Lait ', 
      image: 'https://makemydaygroup.com/storage/product/list/354/product-354-1709097286.jpg' ,
      category: ['original'] 
    },
    { 
      id: 7, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original Easter Bunnyful Surprises ', 
      image: 'https://makemydaygroup.com/storage/product/list/391/product-391-1714462173.jpg' ,
      category: ['original'] 
    },
    { 
      id: 8, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี The Pinks ', 
      image: 'https://makemydaygroup.com/storage/product/list/344/product-344-1709097334.jpg' ,
      category: ['original'] 
    },
    { 
      id: 9, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี crystal clear ', 
      image: 'https://makemydaygroup.com/storage/product/list/320/product-320-1693391494.jpg' ,
      category: ['original'] 
    },
    { 
      id: 10, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี true black', 
      image: 'https://makemydaygroup.com/storage/product/list/319/product-319-1693391041.jpg' ,
      category: ['original'] 
    },
    { 
      id: 11, 
      name: 'invisibobble Hair Tie', 
      price: 275, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี Mother of Chrome ', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683273909.jpg' ,
      category: ['original'] 
    },
    { 
      id: 12, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี Bella Rosa Galaxy', 
      image: 'https://makemydaygroup.com/storage/product/list/17/product-17-1697522096.jpg' ,
      category: ['original'] 
    },
    { 
      id: 13, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Original สี Mattitude Me Myselfie & I', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683271945.jpg' ,
      category: ['original'] 
    },
    { 
      id: 14, 
      name: 'invisibobble ', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie สี True Black', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683282175.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 15, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie สี Prima Ballerina', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683282087.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 16, 
      name: 'invisibobble Hair Tie', 
      price: 495, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim สี True Golden ', 
      image: 'https://makemydaygroup.com/storage/product/list/67/product-67-1697427571.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 17, 
      name: 'invisibobble Hair Tie', 
      price: 325, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie POWER สี Black Panther', 
      image: 'https://makemydaygroup.com/storage/product/list/312/product-312-1698809970.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 18, 
      name: 'invisibobble Hair Tie', 
      price: 325, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie EXTRA HOLD สี Pure White ', 
      image: 'https://makemydaygroup.com/storage/product/list/311/product-311-1698809945.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 19, 
      name: 'invisibobble Hair Tie', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie สี Dusk till Dawn ', 
      image: 'https://makemydaygroup.com/storage/product/list/346/product-346-1709097575.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 20, 
      name: 'invisibobble Hair Tie', 
      price: 495, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim PREMIUM สี La Vie en Rose ', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1721104053.jpg' ,
      category: ['sprunchie'] 
    },
    { 
      id: 21, 
      name: 'invisibobble Hair Tie', 
      price:495, 
      description: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim PREMIUM สี You Make Me Blush ', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1721104318.jpg' ,
      category: ['sprunchie'] 
    },
  ];

  // ฟังก์ชันค้นหาสินค้าตาม id
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
