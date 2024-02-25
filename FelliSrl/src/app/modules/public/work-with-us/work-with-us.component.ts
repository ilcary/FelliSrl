import { Component } from '@angular/core';
import {PageGenericHeaderModel} from "../../shared/components/page-generic-header/page-generic-header.component";

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent {
  protected pageModel: PageGenericHeaderModel = {imgSrc:'./assets/images/workWithUs/workWithUs-bg.jpg', imgAlt: 'Image indoor preview as background', title: 'LAVORA CON NOI'};

}
