import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ledger',
    templateUrl: './ledger.component.html',
    styleUrls: ['./ledger.component.css']
})

export class LedgerComponent implements OnInit {
    ledger: any = [];
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.getLedgerData();
    }

    getLedgerData() {
        this.ledger = this._httpService.getLedger();
    }

    detailsBtnPressed(id: number) {
        this._router.navigate(['/transaction/'+id])
    }
}
