import {Component, Input} from '@angular/core';

export interface GalleryCard {
  img: string;
  title: string;
  description: string;
  callback?: () => void;
}


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() galleryCard: GalleryCard
}
