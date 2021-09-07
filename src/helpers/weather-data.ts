type WEATHER_CODES_TYPE = {
    [key:string]: {
        slug: string,
        icon: number,
        en: {
            day: string,
            night: string
        },
        pt: {
            day: string,
            night: string
        }
    }
}
const WEATHER_CODES: WEATHER_CODES_TYPE = {
    "1000": {
        "slug": "sunny",
        "icon": 113,
        "en": {
            "day": "Sunny",
            "night": "Clear"
        },
        "pt": {
            "day": "Sol",
            "night": "Céu limpo"
        }
    },
    "1003": {
        "slug": "partly-cloudy",
        "icon": 116,
        "en": {
            "day": "Partly Cloudy",
            "night": "Partly Cloudy"
        },
        "pt": {
            "day": "Parcialmente nublado",
            "night": "Parcialmente nublado"
        }
    },
    "1006": {
        "slug": "cloudy",
        "icon": 119,
        "en": {
            "day": "Cloudy",
            "night": "Cloudy"
        },
        "pt": {
            "day": "Nublado",
            "night": "Nublado"
        }
    },
    "1009": {
        "slug": "overcast",
        "icon": 122,
        "en": {
            "day": "Overcast",
            "night": "Overcast"
        },
        "pt": {
            "day": "Encoberto",
            "night": "Encoberto"
        }
    },
    "1030": {
        "slug": "mist",
        "icon": 143,
        "en": {
            "day": "Mist",
            "night": "Mist"
        },
        "pt": {
            "day": "Neblina",
            "night": "Neblina"
        }
    },
    "1063": {
        "slug": "patchy-rain-possible",
        "icon": 176,
        "en": {
            "day": "Patchy rain nearby",
            "night": "Patchy rain nearby"
        },
        "pt": {
            "day": "Possibilidade de chuva irregular",
            "night": "Possibilidade de chuva irregular"
        }
    },
    "1066": {
        "slug": "patchy-snow-possible",
        "icon": 179,
        "en": {
            "day": "Patchy snow nearby",
            "night": "Patchy snow nearby"
        },
        "pt": {
            "day": "Possibilidade de neve irregular",
            "night": "Possibilidade de neve irregular"
        }
    },
    "1069": {
        "slug": "patchy-sleet-possible",
        "icon": 182,
        "en": {
            "day": "Patchy sleet nearby",
            "night": "Patchy sleet nearby"
        },
        "pt": {
            "day": "Possibilidade de neve molhada irregular",
            "night": "Possibilidade de neve molhada irregular"
        }
    },
    "1072": {
        "slug": "patchy-freezing-drizzle-possible",
        "icon": 185,
        "en": {
            "day": "Patchy freezing drizzle nearby",
            "night": "Patchy freezing drizzle nearby"
        },
        "pt": {
            "day": "Possibilidade de chuvisco gelado irregular",
            "night": "Possibilidade de chuvisco gelado irregular"
        }
    },
    "1087": {
        "slug": "thundery-outbreaks-possible",
        "icon": 200,
        "en": {
            "day": "Thundery outbreaks in nearby",
            "night": "Thundery outbreaks in nearby"
        },
        "pt": {
            "day": "Possibilidade de trovoada",
            "night": "Possibilidade de trovoada"
        }
    },
    "1114": {
        "slug": "blowing-snow",
        "icon": 227,
        "en": {
            "day": "Blowing snow",
            "night": "Blowing snow"
        },
        "pt": {
            "day": "Rajadas de vento com neve",
            "night": "Rajadas de vento com neve"
        }
    },
    "1117": {
        "slug": "blizzard",
        "icon": 230,
        "en": {
            "day": "Blizzard",
            "night": "Blizzard"
        },
        "pt": {
            "day": "Nevasca",
            "night": "Nevasca"
        }
    },
    "1135": {
        "slug": "fog",
        "icon": 248,
        "en": {
            "day": "Fog",
            "night": "Fog"
        },
        "pt": {
            "day": "Nevoeiro",
            "night": "Nevoeiro"
        }
    },
    "1147": {
        "slug": "freezing-fog",
        "icon": 260,
        "en": {
            "day": "Freezing fog",
            "night": "Freezing fog"
        },
        "pt": {
            "day": "Nevoeiro gelado",
            "night": "Nevoeiro gelado"
        }
    },
    "1150": {
        "slug": "patchy-light-drizzle",
        "icon": 263,
        "en": {
            "day": "Patchy light drizzle",
            "night": "Patchy light drizzle"
        },
        "pt": {
            "day": "Chuvisco irregular",
            "night": "Chuvisco irregular"
        }
    },
    "1153": {
        "slug": "light-drizzle",
        "icon": 266,
        "en": {
            "day": "Light drizzle",
            "night": "Light drizzle"
        },
        "pt": {
            "day": "Chuvisco",
            "night": "Chuvisco"
        }
    },
    "1168": {
        "slug": "freezing-drizzle",
        "icon": 281,
        "en": {
            "day": "Freezing drizzle",
            "night": "Freezing drizzle"
        },
        "pt": {
            "day": "Chuvisco gelado",
            "night": "Chuvisco gelado"
        }
    },
    "1171": {
        "slug": "heavy-freezing-drizzle",
        "icon": 284,
        "en": {
            "day": "Heavy freezing drizzle",
            "night": "Heavy freezing drizzle"
        },
        "pt": {
            "day": "Chuvisco forte gelado",
            "night": "Chuvisco forte gelado"
        }
    },
    "1180": {
        "slug": "patchy-light-rain",
        "icon": 293,
        "en": {
            "day": "Patchy light rain",
            "night": "Patchy light rain"
        },
        "pt": {
            "day": "Chuva fraca irregular",
            "night": "Chuva fraca irregular"
        }
    },
    "1183": {
        "slug": "light-rain",
        "icon": 296,
        "en": {
            "day": "Light rain",
            "night": "Light rain"
        },
        "pt": {
            "day": "Chuva fraca",
            "night": "Chuva fraca"
        }
    },
    "1186": {
        "slug": "moderate-rain-at-times",
        "icon": 299,
        "en": {
            "day": "Moderate rain at times",
            "night": "Moderate rain at times"
        },
        "pt": {
            "day": "Períodos de chuva moderada",
            "night": "Períodos de chuva moderada"
        }
    },
    "1189": {
        "slug": "moderate-rain",
        "icon": 302,
        "en": {
            "day": "Moderate rain",
            "night": "Moderate rain"
        },
        "pt": {
            "day": "Chuva moderada",
            "night": "Chuva moderada"
        }
    },
    "1192": {
        "slug": "heavy-rain-at-times",
        "icon": 305,
        "en": {
            "day": "Heavy rain at times",
            "night": "Heavy rain at times"
        },
        "pt": {
            "day": "Períodos de chuva forte",
            "night": "Períodos de chuva forte"
        }
    },
    "1195": {
        "slug": "heavy-rain",
        "icon": 308,
        "en": {
            "day": "Heavy rain",
            "night": "Heavy rain"
        },
        "pt": {
            "day": "Chuva forte",
            "night": "Chuva forte"
        }
    },
    "1198": {
        "slug": "light-freezing-rain",
        "icon": 311,
        "en": {
            "day": "Light freezing rain",
            "night": "Light freezing rain"
        },
        "pt": {
            "day": "Chuva fraca e gelada",
            "night": "Chuva fraca e gelada"
        }
    },
    "1201": {
        "slug": "moderate-or-heavy-freezing-rain",
        "icon": 314,
        "en": {
            "day": "Moderate or heavy freezing rain",
            "night": "Moderate or heavy freezing rain"
        },
        "pt": {
            "day": "Chuva gelada moderada ou forte",
            "night": "Chuva gelada moderada ou forte"
        }
    },
    "1204": {
        "slug": "light-sleet",
        "icon": 317,
        "en": {
            "day": "Light sleet",
            "night": "Light sleet"
        },
        "pt": {
            "day": "Chuva fraca com neve",
            "night": "Chuva fraca com neve"
        }
    },
    "1207": {
        "slug": "moderate-or-heavy-sleet",
        "icon": 320,
        "en": {
            "day": "Moderate or heavy sleet",
            "night": "Moderate or heavy sleet"
        },
        "pt": {
            "day": "Chuva forte ou moderada com neve",
            "night": "Chuva forte ou moderada com neve"
        }
    },
    "1210": {
        "slug": "patchy-light-snow",
        "icon": 323,
        "en": {
            "day": "Patchy light snow",
            "night": "Patchy light snow"
        },
        "pt": {
            "day": "Queda de neve irregular e fraca",
            "night": "Queda de neve irregular e fraca"
        }
    },
    "1213": {
        "slug": "light-snow",
        "icon": 326,
        "en": {
            "day": "Light snow",
            "night": "Light snow"
        },
        "pt": {
            "day": "Queda de neve fraca",
            "night": "Queda de neve fraca"
        }
    },
    "1216": {
        "slug": "patchy-moderate-snow",
        "icon": 329,
        "en": {
            "day": "Patchy moderate snow",
            "night": "Patchy moderate snow"
        },
        "pt": {
            "day": "Queda de neve moderada e irregular",
            "night": "Queda de neve moderada e irregular"
        }
    },
    "1219": {
        "slug": "moderate-snow",
        "icon": 332,
        "en": {
            "day": "Moderate snow",
            "night": "Moderate snow"
        },
        "pt": {
            "day": "Queda de neve moderada",
            "night": "Queda de neve moderada"
        }
    },
    "1222": {
        "slug": "patchy-heavy-snow",
        "icon": 335,
        "en": {
            "day": "Patchy heavy snow",
            "night": "Patchy heavy snow"
        },
        "pt": {
            "day": "Queda de neve forte e irregular",
            "night": "Queda de neve forte e irregular"
        }
    },
    "1225": {
        "slug": "heavy-snow",
        "icon": 338,
        "en": {
            "day": "Heavy snow",
            "night": "Heavy snow"
        },
        "pt": {
            "day": "Neve intensa",
            "night": "Neve intensa"
        }
    },
    "1237": {
        "slug": "ice-pellets",
        "icon": 350,
        "en": {
            "day": "Ice pellets",
            "night": "Ice pellets"
        },
        "pt": {
            "day": "Granizo",
            "night": "Granizo"
        }
    },
    "1240": {
        "slug": "light-rain-shower",
        "icon": 353,
        "en": {
            "day": "Light rain shower",
            "night": "Light rain shower"
        },
        "pt": {
            "day": "Aguaceiros fracos",
            "night": "Aguaceiros fracos"
        }
    },
    "1243": {
        "slug": "moderate-or-heavy-rain-shower",
        "icon": 356,
        "en": {
            "day": "Moderate or heavy rain shower",
            "night": "Moderate or heavy rain shower"
        },
        "pt": {
            "day": "Aguaceiros moderados ou fortes",
            "night": "Aguaceiros moderados ou fortes"
        }
    },
    "1246": {
        "slug": "torrential-rain-shower",
        "icon": 359,
        "en": {
            "day": "Torrential rain shower",
            "night": "Torrential rain shower"
        },
        "pt": {
            "day": "Chuva torrencial",
            "night": "Chuva torrencial"
        }
    },
    "1249": {
        "slug": "light-sleet-showers",
        "icon": 362,
        "en": {
            "day": "Light sleet showers",
            "night": "Light sleet showers"
        },
        "pt": {
            "day": "Aguaceiros fracos com neve",
            "night": "Aguaceiros fracos com neve"
        }
    },
    "1252": {
        "slug": "moderate-or-heavy-sleet-showers",
        "icon": 365,
        "en": {
            "day": "Moderate or heavy sleet showers",
            "night": "Moderate or heavy sleet showers"
        },
        "pt": {
            "day": "Aguaceiros moderados ou fortes com neve",
            "night": "Aguaceiros moderados ou fortes com neve"
        }
    },
    "1255": {
        "slug": "light-snow-showers",
        "icon": 368,
        "en": {
            "day": "Light snow showers",
            "night": "Light snow showers"
        },
        "pt": {
            "day": "Chuva fraca com neve",
            "night": "Chuva fraca com neve"
        }
    },
    "1258": {
        "slug": "moderate-or-heavy-snow-showers",
        "icon": 371,
        "en": {
            "day": "Moderate or heavy snow showers",
            "night": "Moderate or heavy snow showers"
        },
        "pt": {
            "day": "Chuva moderada ou forte com neve",
            "night": "Chuva moderada ou forte com neve"
        }
    },
    "1261": {
        "slug": "light-showers-of-ice-pellets",
        "icon": 374,
        "en": {
            "day": "Light showers of ice pellets",
            "night": "Light showers of ice pellets"
        },
        "pt": {
            "day": "Aguaceiros fracos com granizo",
            "night": "Aguaceiros fracos com granizo"
        }
    },
    "1264": {
        "slug": "moderate-or-heavy-showers-of-ice-pellets",
        "icon": 377,
        "en": {
            "day": "Moderate or heavy showers of ice pellets",
            "night": "Moderate or heavy showers of ice pellets"
        },
        "pt": {
            "day": "Aguaceiros moderados ou fortes com granizo",
            "night": "Aguaceiros moderados ou fortes com granizo"
        }
    },
    "1273": {
        "slug": "patchy-light-rain-with-thunder",
        "icon": 386,
        "en": {
            "day": "Patchy light rain in area with thunder",
            "night": "Patchy light rain in area with thunder"
        },
        "pt": {
            "day": "Chuva fraca irregular com trovoada",
            "night": "Chuva fraca irregular com trovoada"
        }
    },
    "1276": {
        "slug": "moderate-or-heavy-rain-with-thunder",
        "icon": 389,
        "en": {
            "day": "Moderate or heavy rain in area with thunder",
            "night": "Moderate or heavy rain in area with thunder"
        },
        "pt": {
            "day": "Chuva moderada ou forte com trovoada",
            "night": "Chuva moderada ou forte com trovoada"
        }
    },
    "1279": {
        "slug": "patchy-light-snow-with-thunder",
        "icon": 392,
        "en": {
            "day": "Patchy light snow in area with thunder",
            "night": "Patchy light snow in area with thunder"
        },
        "pt": {
            "day": "Neve fraca irregular com trovoada",
            "night": "Neve fraca irregular com trovoada"
        }
    },
    "1282": {
        "slug": "moderate-or-heavy-snow-with-thunder",
        "icon": 395,
        "en": {
            "day": "Moderate or heavy snow in area with thunder",
            "night": "Moderate or heavy snow in area with thunder"
        },
        "pt": {
            "day": "Neve moderada ou forte com trovoada",
            "night": "Neve moderada ou forte com trovoada"
        }
    }
};
export default WEATHER_CODES;