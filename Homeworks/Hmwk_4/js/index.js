$(document).ready(function() {    
    var apiKey = "e6e7c6202bac6b224d2011e05e92b973"; // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url

    Object.keys(state_info).map(function(key,index){

        url = `https://api.darksky.net/forecast/${apiKey}/${state_info[key].lat},${state_info[key].lng}`;
        console.log(url);
    
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                    
                    console.log(data)
                    var temperature = null;

                    var temperature = data.currently.apparentTemperature;

                    var color = "#808080";

                    if(temperature <= 10){
                        color = "#6495ED";
                    }
                    else if(temperature > 10 && temperature <= 20){
                        color = "#7FFFD4";
                    }
                    else if(temperature > 20 && temperature <= 30){
                        color = '#0000FF';
                    }
                    else if(temperature > 30 && temperature <= 40){ 
                        color = "#008B8B";
                    }
                    else if(temperature > 40 && temperature <= 50){ 
                        color = "#00BFFF";
                    }
                    else if(temperature > 50 && temperature <= 60){
                        color = "#F08080";
                    }
                    else if(temperature > 60 && temperature <= 70){ 
                        color = "#CD5C5C";
                    }
                    else if(temperature > 70 && temperature <= 80){ 
                        color = "#8B0000";
                    }
                    else if(temperature > 80 && temperature <= 90){ 
                        color = "#B22222";
                    }
                    else if(temperature > 90){
                        color = "#FF0000";
                    }

                    $(`#${key}`).css('fill', color);
                    
        });
    })

    // function changeStateColor(event){
    //     var target = $(event.target);
    //     if(target.is("path") && target.attr('id')!="frames"){
    //         target.css('fill',"black");
    //     }
    // }

    // function resetColor(event){
    //     var target = $(event.target);
    //     if(target.is("path") && target.attr('id')!="frames"){
    //         target.css('fill',"#D3D3D3");
    //     }
    // }

    // $("path").mouseenter(changeStateColor);
    // $("path").mouseleave(resetColor);

});