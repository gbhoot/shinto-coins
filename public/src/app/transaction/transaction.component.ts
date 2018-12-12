import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
    ledgerAction: any = {};
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['id']);
            this.getSingleTransactionData(params['id']);
        });
    }

    getSingleTransactionData(id: number) {
        this.ledgerAction = this._httpService.getSingleAction(id);
    }
}
