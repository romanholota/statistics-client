import { StatisticsCompany } from '../interfaces/statistics-response.dto';
import { CardDTO } from '../interfaces/card.dto';

export function transformStatisticsResponseToCard(data: StatisticsCompany): CardDTO {

    const address = data.addresses.pop()

    return {
        name: data.fullNames.pop()?.value ?? '',
        ico: data.identifiers.pop()?.value ?? '',
        address: `${address?.street || address?.municipality.value} ${address?.buildingNumber ? address?.regNumber + '/' + address?.buildingNumber : address?.regNumber}, ${address?.municipality.value}`
    }
}