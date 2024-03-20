import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progressive-img',
  templateUrl: './progressive-img.component.html',
  styleUrls: ['./progressive-img.component.scss']
})
export class ProgressiveImgComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;
  @Input({ required: true }) imageAlt!: string;

  isLoaded = false;

  onImageLoad() {
    this.isLoaded = true;
  }
}
