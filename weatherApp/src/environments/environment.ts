interface ienvironment {
    production:boolean;
    weatherAPIBaseUrl:string;
    XRapidAPIHostHeaderName : string;
    XRapidAPIHostHeaderValue : string;
    XRapidAPIKeyHeaderName: string;
    XRapidAPIKeyHeaderValue : string;
}
export const environment  : ienvironment = {
    production: false,
    weatherAPIBaseUrl: 'https://openweather43.p.rapidapi.com/weather',
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'openweather43.p.rapidapi.com',
    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: 'caf3224cc5msh2d424036bcdd4f8p197c19jsn6baafe53f428'
};

// export default environment
