import {Component, Input} from '@angular/core';
import {CardContent} from "../card/card.component";

export interface AnimatedCardContent{
  background: 'blue' | 'red';
  highlightedText: string;
  action?: ()=>void;
  headingParagraph:string;
  textParagraph:string;
}

@Component({
  selector: 'app-animated-card',
  templateUrl: './animated-card.component.html',
  styleUrls: ['./animated-card.component.scss']
})
export class AnimatedCardComponent {
@Input() animatedCardContent:AnimatedCardContent;
}
