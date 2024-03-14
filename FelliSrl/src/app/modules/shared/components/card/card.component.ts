import {Component, Input} from '@angular/core';
import {CardContent} from "../../../../core/models/generic.models";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardContent: CardContent;
  @Input() reverse: boolean = true;

}
