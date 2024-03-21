import {Component, Input} from '@angular/core';

export interface PageGenericHeaderModel {
  imgSrc: string;
  imgSrcSmall: string;
  imgAlt: string;
  title: string;
}

@Component({
  selector: 'app-page-generic-header',
  templateUrl: './page-generic-header.component.html',
  styleUrls: ['./page-generic-header.component.scss']
})
export class PageGenericHeaderComponent {
  @Input() pageModel: PageGenericHeaderModel
  @Input() logoVariant: boolean = false
}
