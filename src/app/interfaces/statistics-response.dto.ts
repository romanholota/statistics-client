export interface StatisticsResponseDTO {
    results: Array<StatisticsCompany>,
    license: string
}

export interface StatisticsCompany {
    id: number,
    identifiers: Array<{
        value: string,
        validFrom: string,
        validTo: string
    }>,
    fullNames: [
        {
            value: string,
            validFrom: string,
            validTo: string
        }
    ],
    addresses: [
        {
            formatedAddress: string,
            validFrom: string,
            validTo: string,
            street: string,
            regNumber: string,
            buildingNumber: string,
            postalCodes: Array<string>,
            municipality: {
                value: string,
                code: string,
                codelistCode: string
            },
            country: {
                value: string,
                code: string,
                codelistCode: string
            },
            district: {
                value: string,
                code: string,
                codelistCode: string
            },
            buildingIndex: string
        }
    ],
    establishment: string,
    termination: string,
    sourceRegister: {
        value: {
            value: string,
            code: string,
            codelistCode: string
        },
        registrationOffices: [
            {
                value: string,
                validFrom: string,
                validTo: string
            }
        ],
        registrationNumbers: [
            {
                value: string,
                validFrom: string,
                validTo: string
            }
        ]
    },
    dbModificationDate: string
}