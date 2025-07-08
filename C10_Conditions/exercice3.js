//^ PYTHON

   /*  int tmp = 15; 

    if (tmp < 0)   
        printf("Freezing weather.");
    else if (tmp < 10)  
        printf("Very cold weather.");
    else if (tmp < 20)  
        printf("Cold weather.");   .
    else if (tmp < 30)  
        printf("Normal in temp."); 
    else if (tmp < 40)   
        printf("Its Hot."); 
    else  
        printf("Its very hot.");
 */


//^ PYTHON ==> JAVASCRIPT

// let temperature = 15;

// if (temperature < 0) {
//     console.log("Freezing weather.")
// } else if (temperature < 10){
//     console.log("Very cold weather")
// } else if (temperature < 20){
//     console.log("Cold weather.")
// } else if (temperature < 30){
//     console.log("Normal in temp.")
// } else if (temperature < 40){
//     console.log("Its Hot.")
// } else {
//     console.log ("Its very hot.")
// }

//^ SWITCH CASE

let temperature = 15;

switch (temperature) {
    case (temperature < 0):
            console.log("Freezing weather.");
            break;
    case (temperature < 10):
            console.log("Very cold weather");
            break;
    case (temperature < 20):
            console.log("Cold weather.");
            break;
    case (temperature < 30):
            console.log("Normal in temp.");
            break;
    case (temperature < 40):
            console.log("Its Hot.");
            break;
        default:
            console.log("Its very hot.")
}
