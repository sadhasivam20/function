// var ele=document.createElement("p");
// ele.innerHTML="lorem dgdg dgdga addsg";
// document.body.append(ele);



// var ele=document.createElement("div");
// ele.setAttribute("class","main");
// ele.innerHTML=`<span class="main1"> this is span </span>`;

// // ele.innerHTML("class","main1")
// document.body.append(ele);

// var div=document.createElement("div");
// div.setAttribute("class","main");

// // 2 nd method
// var span=document.createElement("span");
// span.setAttribute("class","main1");
// span.innerHTML="this is span";
// div.append(span);
// document.body.append(div);

//Assigment 01 using second method convert it into  DOM 
// var div=document.createElement("div");
// div.setAttribute("class","cointainer");


// var se=document.createElement("div");
// se.setAttribute("class","row");

// var d=document.createElement("div");
// d.setAttribute("class","col");
// d.innerHTML="this is col";

// div.append(se);
// se.append(d);
// document.body.append(div);



function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
var label=createlabels("label","for","firstname","firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","name","id","firstname");
var br2=createlinebreak("br");

var label1=createlabels("label","for","middlename","middlename");
var br5=createlinebreak("br");
var input1=createinput("input","type","name","id","middlename");
var br6=createlinebreak("br");

var label2=createlabels("label","for","lastname","lastname");
var br7=createlinebreak("br");
var input2=createinput("input","type","name","id","lastname");
var br8=createlinebreak("br");

var password=createlabels("label","for","number","number");
var br3=createlinebreak("br");
var passinput=createinput("input","type","number","id","number");
var br4=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br5,input1,br6,label2,br7,input2,br8,password,br3,passinput,br4);
