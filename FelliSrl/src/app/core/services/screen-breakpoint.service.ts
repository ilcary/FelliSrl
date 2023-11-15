import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { takeUntil } from "rxjs/operators";

export enum Breakpoints {
  "XS" = "XS",
  "SM" = "SM",
  "MD" = "MD",
  "LG" = "LG",
  "XL" = "XL",
  "XXL" = "XXL",
}

@Injectable({
  providedIn: "root",
})
export class ScreenBreakpointService implements OnInit, OnDestroy {
  xsBreakpoint = "(0px <= width <= 320px)";
  smBreakpoint = "(321px <= width <= 420px)";
  mdBreakpoint = "(421px <= width <= 768px)";
  lgBreakpoint = "(769px <= width <= 1024px)";
  xlBreakpoint = "(1025px <= width <= 1440px)";
  xxlBreakpoint = "(min-width: 1441px)";

  private stopListening = new Subject();

  private xsScreenSize = new BehaviorSubject<boolean>(false);
  private smScreenSize = new BehaviorSubject<boolean>(false);
  private mdScreenSize = new BehaviorSubject<boolean>(false);
  private lgScreenSize = new BehaviorSubject<boolean>(false);
  private xlScreenSize = new BehaviorSubject<boolean>(false);
  private xxlScreenSize = new BehaviorSubject<boolean>(false);

  //isLarge ci darà informazioni sugli schermi maggiori di 900px
  private isDesktop$ = new BehaviorSubject<boolean>(true);

  //isMobile ci darà informazioni sugli schermi minori di 500px
  private isMobile$ = new BehaviorSubject<boolean>(false);

  private mobileScreenSize = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initObservers();
  }

  ngOnInit(): void {}

  private initObservers() {
    this.breakpointObserver
      .observe([
        this.xxlBreakpoint,
        this.xlBreakpoint,
        this.lgBreakpoint,
        this.mdBreakpoint,
        this.smBreakpoint,
        this.xsBreakpoint,
      ])
      .pipe(distinctUntilChanged(), takeUntil(this.stopListening))
      .subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(this.xxlBreakpoint)) {
      this.emitScreenSize(Breakpoints.XXL);
    } else if (this.breakpointObserver.isMatched(this.xlBreakpoint)) {
      this.emitScreenSize(Breakpoints.XL);
    } else if (this.breakpointObserver.isMatched(this.lgBreakpoint)) {
      this.emitScreenSize(Breakpoints.LG);
    } else if (this.breakpointObserver.isMatched(this.mdBreakpoint)) {
      this.emitScreenSize(Breakpoints.MD);
    } else if (this.breakpointObserver.isMatched(this.smBreakpoint)) {
      this.emitScreenSize(Breakpoints.SM);
    } else if (this.breakpointObserver.isMatched(this.xsBreakpoint)) {
      this.emitScreenSize(Breakpoints.XS);
    }
  }

  emitScreenSize(breakpoint: Breakpoints) {
    this.xsScreenSize.next(false);
    this.smScreenSize.next(false);
    this.mdScreenSize.next(false);
    this.lgScreenSize.next(false);
    this.xlScreenSize.next(false);
    this.mobileScreenSize.next(false);

    switch (breakpoint) {
      case Breakpoints.XS:
        this.xsScreenSize.next(true);
        this.mobileScreenSize.next(true);
        break;
      case Breakpoints.SM:
        this.smScreenSize.next(true);
        this.mobileScreenSize.next(true);
        break;
      case Breakpoints.MD:
        this.mdScreenSize.next(true);
        this.mobileScreenSize.next(true);
        break;
      case Breakpoints.LG:
        this.lgScreenSize.next(true);
        break;
      case Breakpoints.XL:
        this.xlScreenSize.next(true);
        break;
      case Breakpoints.XXL:
        this.xxlScreenSize.next(true);
        break;
    }
  }

  get isXsScreen$(): Observable<boolean> {
    return this.xsScreenSize.asObservable();
  }

  get isSmScreen$(): Observable<boolean> {
    return this.smScreenSize.asObservable();
  }

  get isMdScreen$(): Observable<boolean> {
    return this.mdScreenSize.asObservable();
  }

  get isLgScreen$(): Observable<boolean> {
    return this.lgScreenSize.asObservable();
  }

  get isXlScreen$(): Observable<boolean> {
    return this.xlScreenSize.asObservable();
  }

  get isXXlScreen$(): Observable<boolean> {
    return this.xxlScreenSize.asObservable();
  }

  get isMobileScreen$(): Observable<boolean> {
    return this.mobileScreenSize.asObservable();
  }

  setDesktop(isDesktop: boolean) {
    this.isDesktop$.next(isDesktop);
  }

  get isDesktop(): Observable<boolean> {
    return this.isDesktop$.asObservable();
  }

  setMobile(isMobile: boolean) {
    this.isMobile$.next(isMobile);
  }

  get isMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }

  ngOnDestroy() {
    this.stopListening.next(true);
    this.stopListening.complete();
  }
}
