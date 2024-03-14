import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../core/services/screen-breakpoint.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);
  protected isXlScreen$: Observable<boolean> = this.screenBreakpointService.isXlScreen$

}
