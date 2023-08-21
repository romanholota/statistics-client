import { Component } from '@angular/core';
import { AppService } from './app.service';
import { transformStatisticsResponseToCard } from './lib/transform';
import { CardDTO } from './interfaces/card.dto';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    search = '';
    results: Array<CardDTO> = [];
    loading: boolean = false;

    constructor(
        private appService: AppService
    ) {
    }

    submit() {

        this.results = [];
        this.loading = true;

        const isIco = !!this.search.match(/^([0-9]{6}|[0-9]{8})$/);

        this.appService.search(this.search, isIco).subscribe(data => {
            this.loading = false;
            const {results} = data;
            this.results = [...this.results, ...results.map(transformStatisticsResponseToCard)];
        });

    }


}
