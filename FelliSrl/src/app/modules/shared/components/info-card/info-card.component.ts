import {Component, Input} from '@angular/core';
import {CardInfoContent} from "../../../../core/models/generic.models";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() cardContent: CardInfoContent;

}
