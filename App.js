const celciusInput = document.querySelector('#celcius > input');
const farenheitInput = document.querySelector('#farenheit > input');
const kelvinInput  = document.querySelector('#kelvin > input');

function roundNum(num) {

    return Math.round(num*100)/100;
}


function celciusToFarenheitAndKelvin (){

    const cTemp= parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) +32;
    const kTemp = cTemp +273.15;
    farenheitInput.value= roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
    
    }

function farenheitToCelciusAndKelvin(){
    
    const fTemp= parseFloat(farenheitInput.value);
    const cTemp= (fTemp -32) * (5/9);
    const kTemp =(fTemp +459.67) * 5/9 ;
    celciusInput.value= roundNum(cTemp);
    kelvinInput.value= roundNum(kTemp);
}

function kelvinToCelciusAndKelvin() {

   const kTemp= parseFloat(kelvinInput.value);
   const cTemp = kTemp - 273.15 ;
   const fTemp = 9/5 * (kTemp -273) + 32;
   celciusInput.value=roundNum(cTemp);
   farenheitInput.value= roundNum(fTemp);  
}


function main() {
celciusInput.addEventListener('input',  celciusToFarenheitAndKelvin );
farenheitInput.addEventListener('input', farenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndKelvin); 

}
main();