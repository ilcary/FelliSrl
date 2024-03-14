import { Component } from '@angular/core';
import {PageGenericHeaderModel} from "../../shared/components/page-generic-header/page-generic-header.component";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  protected pageModel: PageGenericHeaderModel = {imgSrc:'./assets/images/contacts/contacts-bg.png', imgAlt: 'Image indoor preview as background', title: 'CONTATTI'};

}
