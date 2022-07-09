
export class WeatherLocation { //用export对外部暴露该类
    constructor(private weather: string, private city:string) {}
    get weatherMessage() {
      return `It is ${this.weather} in ${this.city}`;
    }
  }                      