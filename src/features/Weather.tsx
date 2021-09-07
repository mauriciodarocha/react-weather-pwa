import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getWeatherData from "../helpers/getWeatherData";
import getDateStr from "../helpers/getDateStr";
import util from '../helpers/utils'
import WEATHER_CODES from "../helpers/weather-data";

type FormData = {
    search?: string
}

type Forecast = {
    location: object,
    current: ForecastData,
    forecast: { forecastday: Array<ForecastDay> }
}

type ForecastData = {
    temp_c: number, condition: { code: number }
}

type ForecastDay = {
    hour: Array<ForecastData>
}

const InitialForecast = {
    location: {},
    current: { temp_c: 0, condition: { code: 0 } },
    forecast: { forecastday: [] }
}

const today = getDateStr();
const Weather = ({ week = false }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            search: 'São Paulo'
        }
    });
    const [weatherData, setWeatherData] = useState<Forecast>(InitialForecast);
    const [search, setSearch] = useState('São Paulo')
    const [slug, setSlug] = useState('default')
    const [condition, setCondition] = useState('')
    const [temperature, setTemperature] = useState(0)

    useEffect(() => {
        getWeatherData(search).then((data: Forecast|any) => {
            setWeatherData(data||InitialForecast);
            setWeatherComp(data);
        }).catch((err) => {
            console.log('Error:', err)
        })
    }, [search])

    const handleFocus = (event: { target: { select: () => any; }; }) => event.target.select();
    
    const setWeatherComp = (weatherData: Forecast) => {
        const weather_code = String(weatherData.current.condition.code || 0)
        let condition = '';
        if(WEATHER_CODES[weather_code]) {
            condition = WEATHER_CODES[weather_code].pt.day;
            setSlug(WEATHER_CODES[weather_code].slug);
        }
        const temperature = weatherData.current?.temp_c || 0;
        setCondition(condition)
        setTemperature(temperature)
    }

    const onFormSubmit = (formData: FormData) => {
        setSearch(formData.search || '')
    }

    return (
        <div className={`weather-app ${slug}`}>
            <div className={'weather-ctn ' + (week ? 'show-week' : '')}>
                <div className='form-ctn'>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className='date'>{today}</div>
                        <div className='field-ctn field-text search-field'>
                            <input {...register('search')} 
                                type='text' name='search' className='search' 
                                placeholder='Cidade'
                                autoComplete='off'
                                onFocus={handleFocus} 
                                aria-label='Digite sua busca e pressione enter' />
                        </div>
                        <div className='weather-icon weather-icon-large'></div>
                        <div className='temperature'>{temperature}&deg;</div>
                        <div className='condition'>{condition}</div>
                    </form>
                </div>
                <div className='forecast-ctn'>
                    {weatherData && weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday.map((item: ForecastDay, index: number) => {
                        return (
                            <div className='f-item' key={['item-',index].join('')}>
                                <div className='f-col f-col-day'>
                                    <div className='f-day'>{util.getDay(index)}</div>
                                </div>
                                <div className='f-col f-col-min-max f-col-min'>
                                    <div className='f-min f-min-max'>{util.getMinMax(item.hour).min}</div>
                                </div>
                                <div className='f-col f-col-min-max f-col-max'>
                                    <div className='f-max f-min-max'>{util.getMinMax(item.hour).max}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Weather;