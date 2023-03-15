import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default async function fetchCountries(countryname) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryname}?fields=name,capital,population,flags,languages`
  );
  if (!response.ok) {
    Notify.info('Oops, there is no country with that name');
    return;
  }
  return await response.json();
}
