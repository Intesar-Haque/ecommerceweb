import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css'
})
export class ProductCardsComponent {
  photoUrls: string[]=[
    '/assets/womenDress/dress1.jpg',
    '/assets/womenDress/dress2.jpg',
    '/assets/womenDress/dress3.jpg',
    '/assets/womenDress/dress4.webp',
    '/assets/womenDress/dress5.jpg',
    '/assets/womenDress/dress6.jpg',
    '/assets/womenDress/dress7.jpg',
  ]
  // randomPhotoUrls:string[]=[];
  // ngOnInit(): void {
  //
  //   const randomIndex1 = Math.floor(Math.random()*this.photoUrls.length);
  //   let randomIndex2 = Math.floor(Math.random()*this.photoUrls.length);
  //   while(randomIndex1=== randomIndex2){
  //     randomIndex2 = Math.floor(Math.random()*this.photoUrls.length);
  //   }
  //   this.randomPhotoUrls = [this.photoUrls[randomIndex1],this.photoUrls[randomIndex2]];
  // }
}
