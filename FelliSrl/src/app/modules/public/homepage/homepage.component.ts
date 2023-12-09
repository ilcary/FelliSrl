import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {CardContent} from "../../shared/components/card/card.component";
import {AnimatedCardContent} from "../../shared/components/animated-card/animated-card.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  protected cards: CardContent[] =
    [
      {
        imagePath: '/assets/images/card1.jpg',
        headingParagraph: 'Qualità della lavorazione',
        textParagraph: 'Siamo esperti nella creazione di pallet e imballaggi in legno su misura, progettati per adattarsi perfettamente alle vostre esigenze. Garantiamo soluzioni efficienti e affidabili per le vostre necessità di imballaggio',
        callToAction:'Vai ai prodotti',
      },
      {
        imagePath: '/assets/images/card2.jpg',
        headingParagraph: 'Qualità della lavorazione',
        textParagraph: 'Siamo esperti nella creazione di pallet e imballaggi in legno su misura, progettati per adattarsi perfettamente alle vostre esigenze. Garantiamo soluzioni efficienti e affidabili per le vostre necessità di imballaggio',
        callToAction:'Vai ai prodotti',
      },
      {
        imagePath: '/assets/images/card3.jpg',
        headingParagraph: 'Qualità della lavorazione',
        textParagraph: 'Siamo esperti nella creazione di pallet e imballaggi in legno su misura, progettati per adattarsi perfettamente alle vostre esigenze. Garantiamo soluzioni efficienti e affidabili per le vostre necessità di imballaggio',
        callToAction:'Vai ai prodotti',
      },
    ]
protected animatedCards: AnimatedCardContent[]=
  [
    {
      background: 'blue',
      highlightedText: 'testo in evidenza',
      headingParagraph:'Certificazione bellissima, i giaguari iso042358',
      textParagraph:'I piu suavesiti della savana'
    },
    {
      background: 'red',
      highlightedText: 'testo in evidenza',
      headingParagraph: 'Certificazione bellissima, i giaguari iso042358',
      textParagraph: 'I piu suavesiti della savana'
    },
    {
      background: 'blue',
      highlightedText: 'testo in evidenza',
      headingParagraph:'Certificazione bellissima, i giaguari iso042358',
      textParagraph:'I piu suavesiti della savana'
    },
    {
      background: 'red',
      highlightedText: 'testo in evidenza',
      headingParagraph:'Certificazione bellissima, i giaguari iso042358',
      textParagraph:'I piu suavesiti della savana'
    },
  ]

}
