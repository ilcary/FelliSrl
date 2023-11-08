import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../../core/services/screen-breakpoint.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  isDesktop$: Observable<boolean> = this.screenBreakpointService.isDesktop;

}
