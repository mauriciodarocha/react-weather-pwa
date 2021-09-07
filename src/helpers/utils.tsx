import getDateStr from "./getDateStr";

const getDay = (_day: number): React.ReactFragment => {
    const _date = getDateStr(_day).split(',');
    const day = _date[1].trim().length === 1 ? '0' + _date[1].trim() : _date[1].trim();
    return (
        <>
            <span>{_date[0]}</span>
            <span>{day}</span>
        </>
    )
}
const getMinMax = (_hour: Array<{temp_c: number}>): { min: string, max: string } => {
    let hour = [..._hour];
    hour = hour.sort((a, b)=>{ 
        if (a.temp_c>b.temp_c) return 1;
        else if (a.temp_c<b.temp_c) return -1;
        return 0
    })
    const min = String(hour[0].temp_c).replace('.', ',');
    const max = String(hour[hour.length-1].temp_c).replace('.', ',');
    return { min, max }
}
const util = {
    getDay,
    getMinMax
}
export default util;