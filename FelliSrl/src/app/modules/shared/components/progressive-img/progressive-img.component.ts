import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-progressive-img',
  templateUrl: './progressive-img.component.html',
  styleUrls: ['./progressive-img.component.scss'],
})
export class ProgressiveImgComponent {
  @Input() imageUrl: string;
  @Input() imageUrlSmall: string;
  @Input() imageAlt: string;

  isLoaded = false;

  onImageLoad() {
    console.log(this.imageUrl)
    this.isLoaded = true;
  }
}
