import { countries as countriesList } from "countries-list";
import { Country, State } from "country-state-city";

const countries = Country.getAllCountries().map(({ isoCode, name }) => ({
    label: name,
    value: isoCode,
}));

const getStates = (countryIsoCode) => {
    return State.getStatesOfCountry(countryIsoCode).map(
        ({ isoCode, name }) => ({
            label: name,
            value: isoCode,
        })
    );
};

const countiesCode = Object.keys(countriesList).map((code) => {
    const countieCode = countriesList[code];
    return {
        label: `${countieCode.name} (+${countieCode.phone})`,
        value: `+${countieCode.phone}`,
    };
});

export { countries, countiesCode, getStates };
