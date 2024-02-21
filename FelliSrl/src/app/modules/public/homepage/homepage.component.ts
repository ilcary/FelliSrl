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
        textParagraph: 'Scopri di più su di noi! La Felli S.r.l., è il tuo partner affidabile per gli imballaggi terziari e del legno. Con oltre vent\'anni di esperienza, puntiamo a diventare il punto di riferimento per l\'economia circolare degli imballaggi in legno nel centro Italia.',
        callToAction: 'Chi siamo',
        action: () => this.router.navigate(['/chi-siamo'])
      },
      {
        imagePath: '/assets/images/card2.jpg',
        headingParagraph: 'I Nostri Prodotti',
        textParagraph: 'La Felli S.r.l. produce non solo pallet standard ma anche imballaggi industriali in legno su misura per vari settori, fornendo soluzioni personalizzate per spedizioni in Europa e all\'estero, con legname certificato FSC® da fornitori europei ed esteri.',
        callToAction: 'Vai ai prodotti',
        action: () => this.router.navigate(['/gallery'])
      },
      {
        imagePath: '/assets/images/card3.jpg',
        headingParagraph: 'La Nostra Mission',
        textParagraph: 'Il nostro impegno ambientale è primario. Offriamo una vasta selezione di pallet usati, standard (da 600x600 a 1200x1200), con differenti livelli di resistenza. Ripariamo e rigeneriamo i pallet usati per ridurre gli sprechi di legname e assicurare la tracciabilità dei materiali.',
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
