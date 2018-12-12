import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
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
        if (this.response.amount > this.currAmount) {
            alert("Sorry you don't have enough coins to sell");
        } else if (Number(this.response.amount) == 0) {
            alert("Sorry, you can't sell 0 coins");
        } else {
            this._httpService.sellCoin(this.response.amount);
            alert("You successfully sold "+ this.response.amount +
                " coins, valued at $"+ this.currValue +".00 each!!!");
            this.getCoinData();
        }
    }
}
