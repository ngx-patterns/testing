import { async, ComponentFixture } from '@angular/core/testing';
import { createComponent, setupComponentTest } from '@ngx-patterns/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    setupComponentTest({
        declarations: [
            AppComponent
        ],
    });

    beforeEach(() => {
        fixture = createComponent(AppComponent);
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(fixture).toBeTruthy();
    }));
    it(`should have as title 'tst'`, async(() => {
        expect(fixture.componentInstance.title).toEqual('tst');
    }));
});
