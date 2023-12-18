import {Component, HostListener, inject, OnInit} from '@angular/core';
import {ScreenBreakpointService} from "./core/services/screen-breakpoint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLgScreen: boolean = true;
  isMobile: boolean = false;

  private screenBreakpointService: ScreenBreakpointService = inject(ScreenBreakpointService);

  ngOnInit(): void {
    this.isLgScreen = window.innerWidth >= 900;
    this.screenBreakpointService.setDesktop(this.isLgScreen);
    if (window.innerWidth < 500) {
      this.isMobile = true;
      this.screenBreakpointService.setMobile(this.isMobile);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any): void {
    this.isLgScreen = event.target.innerWidth >= 900;
    this.screenBreakpointService.setDesktop(this.isLgScreen);
    if (event.target.innerWidth < 500) {
      this.isMobile = true;
      this.screenBreakpointService.setMobile(this.isMobile);
    }
  }


}
