"use client"

import Image, { StaticImageData } from "next/image";
import humidity from "../assets/images/humidity.png";
import windSpeed from "../assets/images/wind.png";
import search from "../assets/images/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import config from "../config/config";
import weatherClear from "../assets/images/clear.png";
import weatherClouds from "../assets/images/clouds.png";
import weatherDrizzle from "../assets/images/drizzle.png";
import weatherMist from "../assets/images/mist.png";
import weatherRain from "../assets/images/rain.png";
import weatherSnow from "../assets/images/snow.png";


const weatherImg: { [key: string]: StaticImageData } = {
	"Clear": weatherClear,
	"Clouds": weatherClouds,
	"Drizzle": weatherDrizzle,
	"Mist": weatherMist,
	"Rain": weatherRain,
	"Snow": weatherSnow
};


function Home(): React.JSX.Element {
	const [searchQuery, setSearchQuery] = useState<string>("Thailand");
	const [placeTemperature, setPlaceTemperature] = useState<string>("0");
	const [placeName, setPlaceName] = useState<string>("Loading...");
	const [placeWindSpeed, setPlaceWindSpeed] = useState<string>("0");
	const [placeHumidity, setPlaceHumidity] = useState<string>("0");
	const [placeWeather, setPlaceWeather] = useState<string>("Clear");


	useEffect(() =>{
		(async() =>{
			await fetchWeatherData();
		})();
	}, []);


	async function fetchWeatherData(){
		try {
			const response: AxiosResponse<any, any> = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${config.api.weatherApiKey}&units=metric`);
			const responseData: any = response.data;
			setPlaceWeather(responseData.weather[0]?.main ?? "");
			setPlaceHumidity(responseData.main?.humidity ?? "");
			setPlaceWindSpeed(responseData.wind?.speed ?? "");
			setPlaceName(responseData.name ?? "");
			setPlaceTemperature(responseData.main?.temp ?? "");
		}
		catch(e){
			console.log(e);
		}
	}

	function onSubmitSearch(){
		(async() =>{
			await fetchWeatherData();
		})();
	}

	return (
		<>
			<div className="min-h-screen flex flex-col justify-center item-center">
				<div className="flex flex-col gap-10 text-white mx-auto w-full max-w-sm bg-gradient-to-br from-[#02fbb9] to-[#5a588a] rounded-3xl p-8">
					<div className="flex flex-row grow gap-3 justify-between items-center">
						<input className="w-full rounded-full p-3 !px-5 text-black border-none" placeholder="Thailand" type="text" onChange={(event) => setSearchQuery(event.target.value)} />
						<div className="bg-white p-3 rounded-full border-none cursor-pointer text-black hover:!text-[#02fbb9] duration-200" onClick={() => onSubmitSearch()}>
							{/* <Image className="rounded-full w-5" src={search} alt="search" /> */}
							<FontAwesomeIcon icon={faMagnifyingGlass} className=" w-6" />
						</div>
					</div>
					{/* Degree */}
					<div className="flex flex-col gap-1 grow justify-center text-center">
						<Image className="w-40 h-40 mx-auto" src={weatherImg[placeWeather]} alt="weather" />
						<div className="flex flex-row gap-1 mx-auto">
							<div className="text-7xl font-light">
								{placeTemperature}
							</div>
							<div className="text-4xl font-normal">
								o
							</div>
							<div className="text-5xl font-medium self-end pb-2">
								C
							</div>
						</div>
						<div className="text-4xl">
							{placeName}
						</div>
					</div>
					{/* Info */}
					<div className="grid grid-cols-2 grow">
						<div className="flex flex-row gap-2 items-center">
							<Image className="w-9 h-9" src={humidity} alt="humidity" />
							<div className="flex flex-col">
								<div className="text-2xl">{placeHumidity} %</div>
								<div className="text-lg font-light">Humidity</div>
							</div>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<Image className="w-9 h-9" src={windSpeed} alt="humidity" />
							<div className="flex flex-col">
								<div className="text-2xl">{placeWindSpeed} km/h</div>
								<div className="text-lg font-light">Wind Speed</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


export default Home;