import {Component, inject, OnInit} from '@angular/core';
import {slideInAnimation} from "./slide-text.animation";
import {
  Gallery,
  GalleryConfig,
  GalleryItemData,
  GalleryItemTypes,
  IframeItemData,
  ImageItemData,
  VideoItemData,
  YoutubeItemData,
  GalleryModule
} from 'ng-gallery';
import {map, Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [slideInAnimation],
})
export class GalleryPageComponent implements OnInit {
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  private _gallery: Gallery = inject(Gallery);
  readonly arr = data;
  readonly media$: Observable<GalleryConfig>;

  constructor() {
      this.media$ = this.screenBreakpointService.isMobile.pipe(
        map((isMobile: boolean) => {
          if (isMobile) {
            return {
              thumbWidth: 80,
              thumbHeight: 80
            };
          }
          return {
            thumbWidth: 120,
            thumbHeight: 90
          };
        })
      );
  }

  ngOnInit() {
    const galleryRef = this._gallery.ref('mixed');

    this.arr.map((item: GalleryItemData) => {
      switch (item.type) {
        case GalleryItemTypes.Image:
          galleryRef.addImage(item);
          break;
        case GalleryItemTypes.Video:
          galleryRef.addVideo(item);
          break;
        case GalleryItemTypes.Youtube:
          galleryRef.addYoutube(item);
          break;
        default:
          galleryRef.addIframe(item);
      }
    });
  }
}

const data: GalleryItemData[] = [
  {
    type: 'image',
    src: '../../../../assets/images/gallery/1.jpg',
    thumb: '../../../../assets/images/gallery/1.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/2.jpg',
    thumb: '../../../../assets/images/gallery/2.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/3.jpg',
    thumb: '../../../../assets/images/gallery/3.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/4.jpg',
    thumb: '../../../../assets/images/gallery/4.jpg',
    //alt: '🐅Morbi etiam interdum velit lacinia platea magna libero curae auctor'
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/5.jpg',
    thumb: '../../../../assets/images/gallery/5.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/6.jpg',
    thumb: '../../../../assets/images/gallery/6.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/7.jpg',
    thumb: '../../../../assets/images/gallery/7.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/8.jpg',
    thumb: '../../../../assets/images/gallery/8.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/9.jpg',
    thumb: '../../../../assets/images/gallery/9.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/10.jpg',
    thumb: '../../../../assets/images/gallery/10.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/11.jpg',
    thumb: '../../../../assets/images/gallery/11.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/12.jpg',
    thumb: '../../../../assets/images/gallery/12.jpg',
  } as ImageItemData,
  {
    type: 'image',
    src: '../../../../assets/images/gallery/13.jpg',
    thumb: '../../../../assets/images/gallery/13.jpg',
  } as ImageItemData
];

