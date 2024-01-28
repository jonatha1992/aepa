import { countries as countriesList } from "countries-list";

const countryCode = "+54";
const countryName = "Argentina";

const countries = Object.keys(countriesList).map((code) => {
    const country = countriesList[code];
    return {
        label: `${country.name}`,
        value: country.name,
    };
});

const countiesCode = Object.keys(countriesList).map((code) => {
    const countieCode = countriesList[code];
    return {
        label: `${countieCode.name} (+${countieCode.phone})`,
        value: `+${countieCode.phone}`,
    };
});

const defaultCountry =
    countries.find(
        (country) =>
            country.codeValue === countryCode ||
            country.nameValue === countryName
    ) || countries[0];

const defaultCodigo = defaultCountry.codeValue;
const defaultPais = defaultCountry.nameValue;

export { countries, countiesCode, defaultCodigo, defaultPais };
