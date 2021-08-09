var input = document.querySelector("#input");
var output = document.querySelector("#output");
var btn_translate = document.querySelector('#btn-translate');

btn_translate.addEventListener('click', clickEventHandler);

function clickEventHandler(){
    console.log(input.value);
    
    fetch(getUrl(input.value)).then(response => response.json()).then(json => {

        console.log(json);
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler);


};

/* var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; */
var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function getUrl(text){

    return url+"?"+"text="+text;
}

function errorHandler(error){
console.log("An error has occured "+error);
console.log("Please try again later after sometime as something went wrong with the server ");

}
