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
  protected pageModel: PageGenericHeaderModel = {imgSrc:'./assets/images/gallery/gallery-bg.jpg', imgAlt: 'Image indoor preview as background', title: 'I NOSTRI PRODOTTI'};
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  private gallery: Gallery = inject(Gallery);
  readonly arr = data;
  readonly media$: Observable<GalleryConfig>;

  get galleryCardSorted(){
    let galleryResult:GalleryCard[][];
    const chunks: any[][] = [];
    for (let i = 0; i < galleryCards.length; i += 3) {
      chunks.push(galleryCards.slice(i, i + 3));
    }
    return chunks;
  }

  constructor() {
    console.log(this.galleryCardSorted)
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

const galleryCards: GalleryCard[] = [
  {
    img: "../../../../assets/images/gallery/1.jpg",
    title: "Special title treatment 1",
    description: "With supporting text below as a natural lead-in to additional content 1.",
    callback: () => {
      // Add your callback logic for card 1 here
      console.log("Callback for card 1 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/2.jpg",
    title: "Special title treatment 2",
    description: "With supporting text below as a natural lead-in to additional content 2.",
    callback: () => {
      // Add your callback logic for card 2 here
      console.log("Callback for card 2 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/3.jpg",
    title: "Special title treatment 3",
    description: "With supporting text below as a natural lead-in to additional content 3.",
    callback: () => {
      // Add your callback logic for card 3 here
      console.log("Callback for card 3 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/4.jpg",
    title: "Special title treatment 4",
    description: "With supporting text below as a natural lead-in to additional content 4.",
    callback: () => {
      // Add your callback logic for card 4 here
      console.log("Callback for card 4 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/5.jpg",
    title: "Special title treatment 5",
    description: "With supporting text below as a natural lead-in to additional content 5.",
    callback: () => {
      // Add your callback logic for card 5 here
      console.log("Callback for card 5 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/6.jpg",
    title: "Special title treatment 6",
    description: "With supporting text below as a natural lead-in to additional content 6.",
    callback: () => {
      // Add your callback logic for card 6 here
      console.log("Callback for card 6 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/7.jpg",
    title: "Special title treatment 7",
    description: "With supporting text below as a natural lead-in to additional content 7.",
    callback: () => {
      // Add your callback logic for card 7 here
      console.log("Callback for card 7 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/8.jpg",
    title: "Special title treatment 8",
    description: "With supporting text below as a natural lead-in to additional content 8.",
    callback: () => {
      // Add your callback logic for card 8 here
      console.log("Callback for card 8 clicked");
    }
  },
  {
    img: "../../../../assets/images/gallery/9.jpg",
    title: "Special title treatment 9",
    description: "With supporting text below as a natural lead-in to additional content 9.",
    callback: () => {
      // Add your callback logic for card 9 here
      console.log("Callback for card 9 clicked");
    }
  }
];


