import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecupContrPage } from './recup-contr.page';

describe('RecupContrPage', () => {
  let component: RecupContrPage;
  let fixture: ComponentFixture<RecupContrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecupContrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
