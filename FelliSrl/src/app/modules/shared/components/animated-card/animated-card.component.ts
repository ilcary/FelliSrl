import {Component, Input} from '@angular/core';

export interface AnimatedCardContent{
  background: 'blue' | 'red';
  highlightedText: string;
  linkReference: string;
  headingParagraph:string;
  textParagraph:string;
  logoSrc?:string;
}

@Component({
  selector: 'app-animated-card',
  templateUrl: './animated-card.component.html',
  styleUrls: ['./animated-card.component.scss']
})
export class AnimatedCardComponent {
@Input() animatedCardContent:AnimatedCardContent;
}
