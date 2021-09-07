const getWeatherData = async (city: string) => {
    if (!city) {
        return new Promise((_, reject) => {
            reject({ 'error': 'City name is required.' })
        })
    }
    const key = '7dd7bc1503844662960213013210409';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&lang=pt&days=5`;
    const response = await fetch(url);
    return response.json();
}
export default getWeatherData;