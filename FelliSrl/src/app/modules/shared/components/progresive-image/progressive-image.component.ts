import {Component, Input} from '@angular/core';
import {absoluteFrom} from "@angular/compiler-cli";

@Component({
  selector: 'app-progressive-image',
  templateUrl: './progressive-image.component.html',
  styleUrls: ['./progressive-image.component.scss']
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;
  @Input({ required: true }) imageAlt!: string;

  isLoaded = false;

  onImageLoad() {
    this.isLoaded = true;
  }

  protected readonly absoluteFrom = absoluteFrom;
}
