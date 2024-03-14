import {Component, inject, OnInit} from '@angular/core';
import {slideInAnimation} from "./slide-text.animation";
import {Gallery, GalleryConfig, GalleryItemData, GalleryItemTypes, ImageItemData} from 'ng-gallery';
import {map, Observable} from "rxjs";
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {GalleryCard} from "../../shared/components/product-card/product-card.component";
import {PageGenericHeaderModel} from "../../shared/components/page-generic-header/page-generic-header.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [slideInAnimation],
})
export class GalleryPageComponent implements OnInit {
  protected pageModel: PageGenericHeaderModel = {
    imgSrc: './assets/images/gallery/gallery-bg.jpg',
    imgAlt: 'Image indoor preview as background',
    title: 'I NOSTRI PRODOTTI'
  };
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  private gallery: Gallery = inject(Gallery);
  private galleryCards: GalleryCard[] = [
    {
      img: `../../../../assets/images/gallery/prodotti/1.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/2.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/3.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/4.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/5.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/6.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/7.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/8.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/9.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/10.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/11.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/12.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/13.jpg`, title: "", description: "", callback: () => {
      }
    },
    {
      img: `../../../../assets/images/gallery/prodotti/14.jpg`, title: "", description: "", callback: () => {
      }
    },
  ];
  readonly media$: Observable<GalleryConfig>;

  get galleryCardSorted() {
    const chunks: any[][] = [];
    for (let i = 0; i < this.galleryCards.length; i += 3) {
      chunks.push(this.galleryCards.slice(i, i + 3));
    }
    return chunks;
  }

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
    const galleryRef = this.gallery.ref('mixed');
    for (let i = 1; i < 23; i++) {
      galleryRef.addImage({
        type: 'image',
        src: `../../../../assets/images/gallery/slider/${i}.jpg`,
        thumb: `../../../../assets/images/gallery/slider/${i}.jpg`,
      } as ImageItemData,)
      /*      if (i < 15) {
              this.galleryCards.push({
                img: `../../../../assets/images/gallery/prodotti/${i}.jpg`,
                title: "",
                description: "",
                callback: () => {
                }
              })
            }*/
    }
  }
}
