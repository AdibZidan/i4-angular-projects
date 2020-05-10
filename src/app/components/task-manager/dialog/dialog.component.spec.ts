import { DialogComponent } from './dialog.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';

describe('Dialog Component', () => {

  let dialogComponent: DialogComponent;
  let dialogFixture: ComponentFixture<DialogComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [
        { provide: MatDialog },
        {
          provide: MatDialogRef,
          useValue: undefined
        }
      ]
    }).compileComponents()));

  beforeEach(() => {
    dialogFixture = TestBed.createComponent(DialogComponent);
    dialogComponent = dialogFixture.componentInstance;

    debugElement = dialogFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => dialogFixture.destroy());

  it('Should exist', () =>
    expect(dialogComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(dialogComponent instanceof DialogComponent)
      .toBeTruthy());

  it(`Should have an undefined 'task input' before 'ngOnInit'`, () => {
    const taskInput = dialogComponent.task;

    expect(taskInput).toBeUndefined();
  });

  it(`Should have a defined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = dialogComponent.subscription;

    expect(subscription).toBeDefined();
  });

  it(`Should spy & call 'ngOnDestroy method'`, () => {
    dialogFixture.detectChanges();

    spyOn(dialogComponent, 'ngOnDestroy').and.callThrough();

    dialogComponent.ngOnDestroy();

    expect(dialogComponent.ngOnDestroy).toHaveBeenCalled();
  });

  describe('Dialog Component HTML', () => {

    let button: HTMLButtonElement;

    beforeEach(() => {
      button = htmlElement.querySelector('button.button');
    });

    it(`Should have a defined/truthy 'button'`, () => {
      expect(button).toBeDefined();
      expect(button).toBeTruthy();
    });

    it(`Should have edit as its 'innerHtml'`, () => {
      const expectedButtonHTML = 'EDIT';
      const actualButtonHTML = button.innerHTML.trim();

      expect(actualButtonHTML).toEqual(expectedButtonHTML);
    });

  });

});