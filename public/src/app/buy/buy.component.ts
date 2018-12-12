import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
    response: any = {};
    currValue: number;
    currAmount: number;

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.resetResponse();
        this.getCoinData();
    }

    resetResponse() {
        this.response = {
            amount: ""
        };
    };

    getCoinData() {
        this.currValue = this._httpService.getCurrentValue();
        this.currAmount = this._httpService.getTotalCoins();
    }

    userPurchase(event: any) {
        event['target'][0]['value'] = "";
        if (this.response.amount == 0) {
            alert("Sorry, you can't buy 0 coins");
        } else {
            this._httpService.buyCoin(this.response.amount);
            alert("You successfully bought "+ this.response.amount +
                " coins, valued at $"+ this.currValue +".00 each!!!");
            this.getCoinData();
        }
    }
}
