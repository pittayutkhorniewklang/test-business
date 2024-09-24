import id from '@angular/common/locales/id';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  
  products = [
    { 
      id: 1, 
      name: 'invisibobble ยางรัดผม รุ่น Kids(extra care) Take Me to Candyland ', 
      price: 495, 
      description: 'ยางรัดผม invisibobble รุ่น extra care Take Me to Candyland บรรจุ 6 เส้น 6 สี', 
      image: 'https://makemydaygroup.com/storage/product/list/313/product-313-1698810588.jpg' ,
      category: ['kid', 'allproduct'] 
    },
    { 
      id: 2, 
      name: 'invisibobble ยางรัดผม รุ่น Kids(extra care) สี magic rainbow ', 
      price: 255, 
      description: 'ยางรัดผม invisibobble รุ่น kids/extra care เส้นเล็ก สีสันสดใส เหมาะสำหรับคนผมบาง', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1713952678.jpg' ,
      category: ['kid', 'allproduct'] 
    },
    { 
      id: 3, 
      name: 'invisibobble ยางรัดผม รุ่น Kids (extra care) สี magic rainbow', 
      price: 395, 
      description: 'invisibobble ยางรัดผม รุ่น KIDS Set I HAVE FILLINGS FOR YOU (1 กล่องบรรจุ 4 ชิ้น)', 
      image: 'https://makemydaygroup.com/storage/product/list/347/product-347-1709097668.jpg' ,
      category: ['kid', 'allproduct', 'new']
    },
    { 
      id: 4, 
      name: 'invisibobble ยางรัดผม รุ่น Kids (extra care) สี magic rainbow', 
      price: 399, 
      description: 'ยางรัดผม invisibobble รุ่น kids/extra care เส้นเล็ก สีสันสดใส เหมาะสำหรับคนผมบาง', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683280071.jpg' ,
      category: ['kid', 'allproduct'] 
    },
    { 
      id: 5, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี Rainbow Vibes', 
      price: 465, 
      description: 'invisibobble ยางรัดผม รุ่น original สี Rainbow Vibes 8pc', 
      image: 'https://cs.sekolahpintar.com/storage/product/list/355/product-355-1714462030.jpg' ,
      category: ['original', 'allproduct', 'new'] 
    },
    { 
      id: 6, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี Cafe Au Lait', 
      price: 465, 
      description: 'invisibobble ยางรัดผม รุ่น original สี Cafe Au Lait 8pc', 
      image: 'https://makemydaygroup.com/storage/product/list/354/product-354-1709097286.jpg' ,
      category: ['original', 'allproduct', 'new'] 
    },
    { 
      id: 7, 
      name: 'invisibobble ยางรัดผม รุ่น Original Easter Bunnyful Surprises', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น original Easter Bunnyful Surprises (1 กล่องมี 3 เส้น)', 
      image: 'https://makemydaygroup.com/storage/product/list/391/product-391-1714462173.jpg' ,
      category: ['original', 'allproduct', 'new'] 
    },
    { 
      id: 8, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี The Pinks', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น original สี The Pinks', 
      image: 'https://makemydaygroup.com/storage/product/list/344/product-344-1709097334.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 9, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี crystal clear', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น original สี crystal clear (NEW PACKAGE)', 
      image: 'https://makemydaygroup.com/storage/product/list/320/product-320-1693391494.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 10, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี true black', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น original สี true black (NEW PACKAGE)', 
      image: 'https://makemydaygroup.com/storage/product/list/319/product-319-1693391041.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 11, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี Mother of Chrome', 
      price: 275, 
      description: 'ยางรัดผม invisibobble รุ่น Original เหมาะกับคนผมหนาปานกลางเวลามัดผมให้ความรู้สึกแน่นปานกลางสบายศีรษะ เหมาะกับใช้ในชีวิตประจำวัน', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683273909.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 12, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี Bella Rosa Galaxy', 
      price: 255, 
      description: 'เหมาะกับคนผมหนาปานกลางเวลามัดผมให้ความรู้สึกแน่น ปานกลางสบายศีรษะ เหมาะกับใช้ในชีวิตประจำวัน', 
      image: 'https://makemydaygroup.com/storage/product/list/17/product-17-1697522096.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 13, 
      name: 'invisibobble ยางรัดผม รุ่น Original สี Mattitude Me Myselfie & I', 
      price: 255, 
      description: 'ยางรัดผม invisibobble รุ่น Original เหมาะกับคนผมหนาปานกลางเวลามัดผมให้ความรู้สึกแน่นปานกลางสบายศีรษะ เหมาะกับใช้ในชีวิตประจำวัน', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683271945.jpg' ,
      category: ['original', 'allproduct'] 
    },
    { 
      id: 14, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie สี True Black ', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น sprunchie สี Dusk till Dawn', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683282175.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 15, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie สี Prima Ballerina', 
      price: 255, 
      description: 'Sprunchie ยางรัดผมเนื้อผ้ากำมะหยี่พร้อมกับยาง invisibobble รุ่น original ภายในตัว donut', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1683282087.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 16, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim สี True Golden', 
      price: 495, 
      description: 'sprunchie slim ที่มาในรูปแบบผ้าซาตินสุดหรู ทันสมัย พร้อมกับยาง invisibobble รุ่น slim ภายในตัวผ้า', 
      image: 'https://makemydaygroup.com/storage/product/list/67/product-67-1697427571.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 17, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie POWER สี Black Panther', 
      price: 325, 
      description: 'invisibobble SPRUNCHIE POWER Black Panther', 
      image: 'https://makemydaygroup.com/storage/product/list/312/product-312-1698809970.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 18, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie EXTRA HOLD สี Pure White', 
      price: 325, 
      description: 'invisibobble SPRUNCHIE EXTRA HOLD Pure White มัดแน่นกว่าเดิม เนื่องจากประกอบด้วยยางรุ่น power ถึง 2 เส้นรวมกัน ภายในผ้าสีขาวลุคเรียบหรู', 
      image: 'https://makemydaygroup.com/storage/product/list/311/product-311-1698809945.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 19, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie สี Dusk till Dawn', 
      price: 255, 
      description: 'invisibobble ยางรัดผม รุ่น sprunchie สี Dusk till Dawn', 
      image: 'https://makemydaygroup.com/storage/product/list/346/product-346-1709097575.jpg' ,
      category: ['sprunchie', 'allproduct'] 
    },
    { 
      id: 20, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim PREMIUM สี La Vie en Rose', 
      price: 495, 
      description: 'sprunchie slim ในแพคเกจสุด Premium สวยหรู ที่มา ในรูปแบบผ้ากำมะหยี่+ซาติน สีสันสวยงาม ทันสมัย พร้อมกับยาง invisibobble รุ่น slim ภายในตัวผ้า', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1721104053.jpg' ,
      category: ['sprunchie', 'allproduct', 'new'] 
    },
    { 
      id: 21, 
      name: 'invisibobble ยางรัดผม รุ่น Sprunchie Slim PREMIUM สี You Make Me Blush', 
      price:495, 
      description: 'sprunchie slim ในแพคเกจสุด Premium สวยหรู ที่มา ในรูปแบบผ้ากำมะหยี่+ซาติน สีสันสวยงาม ทันสมัย พร้อมกับยาง invisibobble รุ่น slim ภายในตัวผ้า', 
      image: 'https://makemydaygroup.com/storage/product/list/0/product-0-1721104318.jpg' ,
      category: ['sprunchie', 'allproduct', 'new'] 
    },
  ];

  // ฟังก์ชันค้นหาสินค้าตาม id
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
