import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatisticsResponseDTO } from './interfaces/statistics-response.dto';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private readonly apiUrl = '/rpo/v1/search';

    constructor(
        private http: HttpClient
    ) { }

    search(input: string, isIco: boolean) {
        return this.http.get<StatisticsResponseDTO>(
            this.apiUrl,
            {
                params: {
                    [isIco ? 'identifier' : 'fullName']: input
                }
            }
        )
    }

}
