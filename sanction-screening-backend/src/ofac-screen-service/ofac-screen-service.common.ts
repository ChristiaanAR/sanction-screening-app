export const OFAC_API_KEY = 'cab1cba2-dd7f-4944-9606-d173b5497980'; // this would be in a secret
export const OFAC_SCREEN_URL = 'https://api.ofac-api.com/v4/screen';
export const OFAC_SOURCES = ['SDN'];

export class SanctionScreenBody {
    name: string;
    dateOfBirth: string;
    country: string;
}

export class SanctionScreenResult {
    nameMatch: boolean;
    dateOfBirthMatch: boolean;
    countryMatch: boolean;
}

export class ofacApiBody {
    apiKey: string;
    sources: string[];
    cases: Case[];
}

export class Case {
    name: string;
    dob: string;
    citizenship: string;
    nationality: string;
}
