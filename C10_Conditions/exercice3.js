// let temperature = 15 ;

function checkWeather(temperature) {

    if (temperature < 0) {
        console.log("Freezing weather.")
    } else if (temperature < 10) {
        console.log("Very cold weather.")
    } else if (temperature < 20) {
        console.log( "Cold weather.")
    } else if (temperature < 30) {
        console.log("Normal in temp.")
    } else if (temperature < 40) {
        console.log("its Hot.")
    } else {
        console.log("Its very hot.")
    }
}

checkWeather(10)




