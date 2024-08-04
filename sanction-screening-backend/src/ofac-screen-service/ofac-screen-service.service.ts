import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as _ from 'lodash';
import {
    OFAC_API_KEY,
    OFAC_SCREEN_URL,
    OFAC_SOURCES,
    ofacApiBody,
    SanctionScreenBody,
    SanctionScreenResult
} from './ofac-screen-service.common';

@Injectable()
export class OfacScreenServiceService {
    constructor () {}

    async ofacSearch(sanctionScreenBody: SanctionScreenBody) {
        const searchBody: ofacApiBody = {
            apiKey: OFAC_API_KEY,
            sources: OFAC_SOURCES,
            cases: [{
                name: sanctionScreenBody.name,
                dob: sanctionScreenBody.dateOfBirth,
                citizenship: sanctionScreenBody.country,
                nationality: sanctionScreenBody.country,
            }]
        };

        const res = await axios.post(
            OFAC_SCREEN_URL,
            searchBody,
        );

        return this.parseResults(_.get(res, 'data.results', []));
    }

    parseResults(ofacResults) {
        const screenResults: SanctionScreenResult = {
            nameMatch: false,
            dateOfBirthMatch: false,
            countryMatch: false,
        };

        ofacResults.forEach(result => {
            const matches = _.get(result, 'matches', []);
            matches.forEach(match => {
                const matchFields = _.get(match, 'matchSummary.matchFields');
                matchFields.forEach(field => {
                    switch (field.fieldName) {
                        case "Name": {
                            screenResults.nameMatch = true;
                            break;
                        }
                        case "DOB": {
                            screenResults.dateOfBirthMatch = true;
                            break;
                        }
                        case "Citizenship": {
                            screenResults.countryMatch = true;
                            break;
                        }
                        case "Nationality": {
                            screenResults.countryMatch = true;
                            break;
                        }
                    }
                    if (screenResults.nameMatch && screenResults.countryMatch && screenResults.countryMatch) {
                        return screenResults;
                    }
                });
            });
        });

        return screenResults;
    }
}
