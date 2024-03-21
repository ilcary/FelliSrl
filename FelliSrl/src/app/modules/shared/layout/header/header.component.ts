import {Component, inject} from '@angular/core';
import {ScreenBreakpointService} from "../../../../core/services/screen-breakpoint.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);

}
