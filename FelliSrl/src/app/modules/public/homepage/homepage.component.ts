import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {CardContent} from "../../shared/components/card/card.component";
import {AnimatedCardContent} from "../../shared/components/animated-card/animated-card.component";
import {tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Router} from "@angular/router";
import {PageGenericHeaderModel} from "../../shared/components/page-generic-header/page-generic-header.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  private router: Router = inject(Router);
  protected isMobile: boolean = false;
  protected pageModel: PageGenericHeaderModel = {
    imgSrc: './assets/images/homepage-main-section.jpg',
    imgAlt: 'Image indoor preview as background',
    title: this.isMobile ? 'IMBALLAGGI FUORI MISURA A MISURA PER TE' : 'IMBALLAGGI FUORI MISURA <br> A MISURA PER TE'
  };
  protected logoDimensions: { width: string, height: string } = {width: '250', height: '250'};

  constructor() {
    this.screenBreakpointService.isMobile.pipe(takeUntilDestroyed(), tap((isMobile: boolean) => {
      this.logoDimensions = {width: isMobile ? '100' : '250', height: isMobile ? '100' : '250'}
      this.isMobile = isMobile
      this.pageModel = {
        imgSrc: './assets/images/homepage-main-section.jpg',
        imgAlt: 'Image indoor preview as background',
        title: this.isMobile ? 'IMBALLAGGI FUORI MISURA A MISURA PER TE' : 'IMBALLAGGI FUORI MISURA <br> A MISURA PER TE'
      };

    })).subscribe()
  }

  protected cards: CardContent[] =
    [
      {
        imagePath: '/assets/images/card1.jpg',
        headingParagraph: 'La nostra realtà',
        textParagraph: 'Fondata nel 2018 a Cerchio (AQ), la Felli S.r.l. è un\'azienda familiare con oltre 20 anni di esperienza, specializzata in produzione e commercializzazione di pallet in legno.',
        callToAction: 'Chi siamo',
        action: () => this.router.navigate(['/chi-siamo'])
      },
      {
        imagePath: '/assets/images/card2.jpg',
        headingParagraph: 'I Nostri Prodotti',
        textParagraph: ' Esplora la nostra gamma di imballaggi industriali in legno su misura. Soluzioni sostenibili e di qualità progettati per soddisfare le esigenze specifiche di diversi settori.',
        callToAction: 'Vai ai prodotti',
        action: () => this.router.navigate(['/gallery'])
      },
      {
        imagePath: '/assets/images/card3.jpg',
        headingParagraph: 'La Nostra Mission',
        textParagraph: 'Ci impegniamo nella sostenibilità, ripariamo e rigeneriamo bancali usati standard di varie dimensioni. Riduciamo gli sprechi di legname, garantendo tracciabilità e offrendo soluzioni sostenibili per una gestione responsabile dei pallet.',
        callToAction: 'Lavora Con Noi',
        action: () => this.router.navigate(['/lavora-con-noi'])
      },
    ]
  protected certifications: AnimatedCardContent[] =
    [
      {
        background: 'blue',
        highlightedText: 'testo in evidenza',
        headingParagraph: 'Certificazione bellissima, i giaguari iso042358',
        textParagraph: 'I piu suavesiti della savana'
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
        headingParagraph: 'Certificazione bellissima, i giaguari iso042358',
        textParagraph: 'I piu suavesiti della savana'
      },
      {
        background: 'red',
        highlightedText: 'testo in evidenza',
        headingParagraph: 'Certificazione bellissima, i giaguari iso042358',
        textParagraph: 'I piu suavesiti della savana'
      },
    ]

}
