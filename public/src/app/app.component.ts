import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    lastBtnEvent: any;
    navBtnSelected: boolean = false;
    homeSelected: boolean = true;

    ngOnInit() {
        this.resetBtnEvent();
    }

    ngOnChanges() {
        this.resetBtnEvent();
    }

    resetBtnEvent() {
        if (this.lastBtnEvent) {
            this.lastBtnEvent['disabled'] = false;
            this.lastBtnEvent['classList'] = "btn btn-sm btn-secondary"
        }
    }

    navBtnPressed(event: any) {
        let buttonD = event['srcElement'];
        if (this.lastBtnEvent) {
            this.lastBtnEvent['disabled'] = false;
            this.lastBtnEvent['classList'] = "btn btn-sm btn-secondary"
        }

        this.navBtnSelected = true;
        this.homeSelected = false;

        buttonD['disabled'] = true;
        buttonD['classList'] = "btn btn-sm btn-primary"
        this.lastBtnEvent = buttonD;
    }

    updateLastBtn(event: any) {
        this.resetBtnEvent();
    }
}
