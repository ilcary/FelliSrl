import {Component, Input} from '@angular/core';

export interface CardContent{
  imagePath:string;
  headingParagraph:string;
  textParagraph:string;
  callToAction?:string;
  action?: ()=>void;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()cardContent:CardContent;

}
