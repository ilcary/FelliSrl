import {Component, inject} from '@angular/core';
import {PageGenericHeaderModel} from "../../shared/components/page-generic-header/page-generic-header.component";
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {Observable} from "rxjs";
import {CardInfoContent} from "../../../core/models/generic.models";

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent {
  protected pageModel: PageGenericHeaderModel = {
    imgSrc: './assets/images/workWithUs/workWithUs-bg.jpg',
    imgSrcSmall: './assets/images/workWithUs/workWithUs-bg_small.jpg',
    imgAlt: 'Image indoor preview as background',
    title: 'LAVORA CON NOI'
  };
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  protected isDesktop$: Observable<boolean> = this.screenBreakpointService.isDesktop
  protected cardApplications: CardInfoContent[] = [
    {
      imagePath: './assets/images/workWithUs/forkLiftApplicationBg.jpg',
      avatarImgPath: './assets/images/workWithUs/forkLiftAvatar.png',
      headingParagraph: 'Operatore di Carrelli Elevatori',
      textParagraph: 'Stiamo cercando un Operatore di Carrelli Elevatori esperto per unirsi al nostro team. Responsabilità principali: movimentazione sicura delle merci, carico/scarico materiali. Se sei qualificato e motivato, invia il tuo CV ora!',
      cardActions: [{
        textValue: '0863 78227', symbol: 'phone', action: () => {
          window.open('tel:086378227')
        }
      }, {
        textValue: 'amministrazione@fellisrl.com', symbol: 'mail', action: () => {
          window.open('mailto:amministrazione@fellisrl.com')
        }
      }],
      action: () => {
      }
    }
  ]
}
