import moment from 'moment';
const getDateStr = (days?: number): string => {
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const year = moment().year();
    const month = moment().month();
    let weekday = moment().weekday();
    let day = moment().date();
    if ('number' === typeof days) {
        weekday = moment().add(days, 'days').weekday();
        day = moment().add(days, 'days').date();
        return `${weekdays[weekday].substr(0, 3)}, ${day}`;
    }
    return `${weekdays[weekday]}, ${day} de ${months[month].toLowerCase()} de ${year}`;
}
export default getDateStr;