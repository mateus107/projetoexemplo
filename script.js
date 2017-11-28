var imgadr= ['images/1.png','images/2.png','images/3.png','images/4.png'];
var headArray= ['Casa Baratheon','Casa Targaryen', 'Casa Stark', 'Casa Lannister'];
var paraArray= ['First paragraph is awesome!',
        'Second paragraph goes here!', 
        'Third paragraph for you',
         'Last but not least important paragraph!'];
var cnt= 0;
var timer;
//gradient
//var slider= document.getElementById('slider');??  add script at the end of html?
// onload body ----or---- call the function at the beginning of script?-> script must be top or buttom?  
function sliderTimer()
{

}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('sliderImg');
  //slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  slider.setAttribute("src", imgadr[cnt]);
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('sliderImg');
  //slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  slider.setAttribute("src", imgadr[cnt]);
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('sliderImg');
  //slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  slider.setAttribute("src", imgadr[cnt]);
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    
  sliderTimer();
}