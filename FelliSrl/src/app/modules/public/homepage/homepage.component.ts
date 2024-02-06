import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {CardContent} from "../../shared/components/card/card.component";
import {AnimatedCardContent} from "../../shared/components/animated-card/animated-card.component";
import {Observable, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  protected isMobile: boolean = false;
  protected logoDimensions: { width: string, height: string } = {width: '250', height: '250'};

  constructor() {
    this.screenBreakpointService.isMobile.pipe(takeUntilDestroyed(), tap((isMobile: boolean) => {
      this.logoDimensions = {width: isMobile ? '100' : '250', height: isMobile ? '100' : '250'}
      this.isMobile = isMobile
    })).subscribe()
  }

  protected cards: CardContent[] =
    [
      {
        imagePath: '/assets/images/card1.jpg',
        headingParagraph: 'La nostra realtà',
        textParagraph: 'La Felli S.r.l. è un\'industria a conduzione familiare operante nel settore degli imballaggi terziari e delle trasformazioni in legno nata nel 2018 e con sede operativa a Cerchio (AQ). Grazie anche a un\'esperienza ventennale nel settore, la Felli S.r.l. ha come ambizione diventare una grande realtà del settore nel centro Italia e sfruttare appieno le potenzialità dell’economia circolare degli imballaggi in legno. Offriamo servizi a 360 gradi per la produzione di imballaggi in legno standard e fuori misura, gestione e riparazione di pallet usati. Il tutto con l’obiettivo finale di soddisfare appieno le esigenze di ogni cliente.',
        callToAction: 'Chi siamo',
      },
      {
        imagePath: '/assets/images/card2.jpg',
        headingParagraph: 'La soluzione giusta per voi',
        textParagraph: ' Oltre alla realizzazione di pallet standard, la Felli S.r.l. si è specializzata nella progettazione e nello sviluppo degli imballaggi in legno industriali fuori misura (gabbie, ceste, contenitori, cassette, ecc..) rivolto a ogni settore. Dall’agroalimentare all’edile, dal settore dell’alluminio all’arredamento, fornendo imballaggi su misura per spedizioni in Europa e all’estero. Il legname di cui ci avvaliamo è acquistato solo da fornitori europei ed esteri iscritti al Forest Stewardship Council (FSC®).',
        callToAction: 'Vai ai prodotti',
      },
      {
        imagePath: '/assets/images/card3.jpg',
        headingParagraph: 'Sostenibilità e Disponibilità',
        textParagraph: 'Il nostro obiettivo, oggi più che mai, è lavorare con un occhio di riguardo all’ambiente. Abbiamo predisposto quindi, un ampio parco pallet usato per le misure standard, (dal 600x600 al 1200x1200) di robustezza differente per ogni diversa esigenza. Ripariamo e rigeneriamo pallet usati per allungarne e fornirne una nuova vita, evitando gli sprechi del legname e garantendo la tracciabilità del materiale utilizzato',
        callToAction: 'Vai ai prodotti',
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
