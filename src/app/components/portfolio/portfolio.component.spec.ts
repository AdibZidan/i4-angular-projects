import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('Portfolio Component', () => {

  let portfolioComponent: PortfolioComponent;
  let portfolioFixture: ComponentFixture<PortfolioComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent]
    }).compileComponents()));

  beforeEach(() => {
    portfolioFixture = TestBed.createComponent(PortfolioComponent);
    portfolioComponent = portfolioFixture.componentInstance;

    debugElement = portfolioFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => portfolioFixture.destroy());

  it('Should exist/be defined', () =>
    expect(portfolioComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(portfolioComponent instanceof PortfolioComponent)
      .toBeTruthy());

  it(`Should have a 'main' tag with the class of 'home'`, () => {
    const main: Element = htmlElement.querySelector('main.home');

    expect(main).toBeTruthy();
  });

  it(`Should have an 'h1' tag with the class of 'h1'`, () => {
    const h1: Element = htmlElement.querySelector('h1.h1');

    expect(h1).toBeTruthy();
  });

  it(`Should have an 'h2' tag with the class of 'h2'`, () => {
    const h2: Element = htmlElement.querySelector('h2.h2');

    expect(h2).toBeTruthy();
  });

  it(`Should have a 'section' tag with the class of 'social-media'`, () => {
    const section: Element = htmlElement.querySelector('section.social-media');

    expect(section).toBeTruthy();
  });

  it(`Should have a total of 3 'anchor' tags`, () => {
    const totalNumberOfAnchors: number = htmlElement.querySelectorAll('a').length;

    expect(totalNumberOfAnchors).toBe(2);
  });

  it(`Should have a total of 3 'icon' tags`, () => {
    const totalNumberOfIcons: number = htmlElement.querySelectorAll('i').length;

    expect(totalNumberOfIcons).toBe(2);
  });

});