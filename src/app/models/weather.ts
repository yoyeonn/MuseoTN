export interface Weather {
    latitude: number;
    longitude: number;
    current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
    };
}
