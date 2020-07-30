/*
Hash_tag_generator.

Input: a image URL from input element(id = "urls")
Output: Using chairfai api to classify the tags for the input IMG

*/

alert("js loaded");

// boxes

/*the mainbody of this plugin, the relative postion can be change by this box.*/ 
function add_box() {
    let box = document.createElement("div");
    box.id = "box";
    box.style.position = 'relative';
    box.style.cssFloat = 'left'
    box.style.maxWidth = '460px';
    box.style.height = '650px';
    box.style.color = 'black';
    box.style.background = 'white';
    box.style.borderRadius = '10px 10px';
    box.style.margin = 'auto';
    box.style.boxShadow = "5px 5px 5px grey";
    document.body.appendChild(box);

    box.style.right = box.style.left = "15%"; // change the relative position of the whole plugin
}
add_box();
/*top_box is the child of box*/
function add_top_box() {
    let box = document.createElement("div");
    let currentDiv = document.getElementById("p1");
    box.id = "top_box";
    box.style.borderRadius = '10px 10px 0px 0px';
    box.style.width = '460px';
    box.style.height = '90px';
    box.style.background = 'white';
    box.style.boxShadow = "0px 0px 0px grey";
    box.style.position = 'relative';
    box.style.cssFloat = "left";
    document.getElementById("box").appendChild(box);
}
add_top_box();


// imgs and icons
// 这里的icon是来自influencemarketinghub，我之后可以重新更换成我们数据库里的图标
let url_src = "https://raw.githubusercontent.com/DHX98/plugin/master/catDemo.jpg";

function add_ins_img(url_src) {
    let img1 = new Image();
    img1.src = url_src;
    img1.id = "ins_img";
    document.getElementById("box").appendChild(img1);
    img1.style.width = '460px';
    img1.style.height = '400px'
}
add_ins_img(url_src);

function add_heart_img() {
    let img1 = new Image();
    img1.src = "https://influencermarketinghub.com/wp-content/themes/voice-child/page-templates/hashtag-generator/img/4.svg";
    document.getElementById("box").appendChild(img1);
    img1.style.width = '25px';
    img1.style.height = '25px';
    img1.style.marginLeft = '20px';
    img1.style.marginTop = '10px';
}
add_heart_img();

function add_comment_img() {
    let img1 = new Image();
    img1.src = "https://influencermarketinghub.com/wp-content/themes/voice-child/page-templates/hashtag-generator/img/5.svg";
    document.getElementById("box").appendChild(img1);
    img1.style.width = '25px';
    img1.style.height = '25px';
    img1.style.marginLeft = '20px';
    img1.style.marginTop = '10px';
}
add_comment_img();

function add_share_img() {
    let img1 = new Image();
    img1.src = "https://influencermarketinghub.com/wp-content/themes/voice-child/page-templates/hashtag-generator/img/3.svg";
    document.getElementById("box").appendChild(img1);
    img1.style.width = '25px';
    img1.style.height = '25px';
    img1.style.marginLeft = '20px';
    img1.style.marginTop = '10px';
}
add_share_img();

function add_mark_img() {
    let img1 = new Image();
    img1.src = "https://influencermarketinghub.com/wp-content/themes/voice-child/page-templates/hashtag-generator/img/2.svg";
    document.getElementById("box").appendChild(img1);
    img1.style.width = '25px';
    img1.style.height = '25px'
    img1.style.cssFloat = 'right';
    img1.style.marginRight = '25px';
    img1.style.marginTop = '10px';

}
add_mark_img();

function add_avatar_img() {
    let img1 = new Image();
    img1.src = "https://raw.githubusercontent.com/DHX98/plugin/master/catDemo.jpg";
    document.getElementById("top_box").appendChild(img1);
    img1.style.width = '35px';
    img1.style.height = '35px';
    img1.style.backgroundColor = '#eee';
    img1.style.cssFloat = 'left';
    img1.style.borderRadius = '50%';
    img1.style.marginLeft = '20px';
    img1.style.marginTop = '25px';
}
add_avatar_img();

function add_dots_img() {
    let img1 = new Image();
    img1.src = "https://influencermarketinghub.com/wp-content/themes/voice-child/page-templates/hashtag-generator/img/1.svg";
    document.getElementById("top_box").appendChild(img1);
    img1.style.width = '25px';
    img1.style.height = '25px'
    img1.style.cssFloat = 'right';
    img1.style.marginRight = '25px';
    img1.style.marginTop = '32px';
}
add_dots_img();

//texts

/* this is the name box on top */
function add_name(user_name, user_position) {

    let box = document.createElement("div");
    box.id = "name_box";
    box.style.position = 'relative';
    box.style.top = '23px';
    box.style.left = '14px';
    box.style.width = '250px';
    box.style.height = '20px';
    box.innerText = user_name;
    document.getElementById("top_box").appendChild(box);
    let box1 = document.createElement("div");
    box1.id = "position_box";
    box1.style.position = 'relative';
    box1.style.top = '23px';
    box1.style.left = '14px';
    box1.style.width = '250px';
    box1.style.height = '20px';
    box1.innerText = user_position;
    document.getElementById("top_box").appendChild(box1);

}

add_name('dhx', 'Corvallis, US');

function add_likes() {
    let box = document.createElement("div");
    document.getElementById("box").appendChild(box);
    box.id = "like_box";
    box.style.position = 'relative';
    box.style.top = '8px';
    box.style.left = '20px';
    box.style.width = '250px';
    box.style.height = '20px';
    box.innerText = parseInt(Math.random() * 10000) + ' Likes';
}
add_likes();

function add_tags(tags) {

    let box = document.createElement("div");
    document.getElementById("box").appendChild(box);
    box.id = "tag_box";
    box.style.position = 'relative';
    box.style.top = '14px';
    box.style.left = '20px';
    box.style.width = '250px';
    box.style.height = '20px';
    box.innerText = tags;
    //document.body.insertBefore(box, currentDiv); 
}
tags = '#dog #cat #pets #templete';
add_tags(tags);

function thread() {
    let box = document.createElement("div");
    box.id = "thread1";
    box.style.width = '600px';
    box.style.height = '95px';
    box.style.backgroundColor = "#4272d7";
    document.getElementById("box").appendChild(box);

    /* relative position setting up*/
    let relativeEle = document.getElementById("top_box");
    box.style.position = 'relative';
    box.style.left = box.style.right = "120%";
    box.style.bottom = box.style.top = "-91.28%";
    /* relative position setting up*/
    box.style.borderRadius = '10px 10px 0px 0px';
    // box.style.margin = 'auto';
    box.style.boxShadow = "5px 5px 5px grey";


    let text_thread1 = document.createElement("p");
    text_thread1.innerText = "   Select your keywords to generate real time hashtags";
    text_thread1.style.position = "relative";
    text_thread1.style.padding = "10px";
    text_thread1.style.height = "20px";
    text_thread1.id = "thread1_text1";
    box.appendChild(text_thread1);  
    text_thread1.style.bottom =text_thread1.style.top = "16.5%";

}

thread();

//thread2

function thread2() {
    let box = document.createElement("div");
    box.id = "thread2";
    box.style.width = '460px';
    box.style.height = '60px';
    box.style.backgroundColor = "#4272d7";
    document.getElementById("box").appendChild(box);

    /* relative position setting up*/
    let relativeEle = document.getElementById("top_box");
    box.style.position = 'relative';
    //box.style.left = box.style.right = "120%";
    //box.style.bottom = box.style.top = "-91.28%";
    /* relative position setting up*/
    box.style.borderRadius = '10px 10px 0px 0px';
    // box.style.margin = 'auto';
    box.style.boxShadow = "5px 5px 5px grey";


    let text_thread1 = document.createElement("p");
    text_thread1.innerText = "Hashtags/   ";
    text_thread1.innerText += "Real time explosure/   ";
    text_thread1.innerText += "Total posts in Instagram";


    text_thread1.style.position = "relative";
    text_thread1.style.padding = "10px";
    text_thread1.style.height = "20px";
    text_thread1.id = "thread_text2";
    box.appendChild(text_thread1);  
    text_thread1.style.bottom =text_thread1.style.top = "30.5%";

}

//thread2();
//animation show/hide
function myMove() {
    let elem = document.getElementById("table1");
    let thread1 = document.getElementById("thread1");
    let pos = 0;
    let id = setInterval(frame, 0.5);
    
    function frame() {
            if (pos == 800) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.right = pos + "px";
                thread1.style.right = pos + "px";
            }
        }
        // thread1.style.display = "none";
        //elem.style.display = "block";
}

//myMove();
post_url = "https://raw.githubusercontent.com/DHX98/plugin/master/catDemo.jpg";

window.onload = function(){
    function select(){
        alert("!!");
    };
}

let texts_to_back_end = "";
//table
function create_table(num_keywords, keywords) {
    let tbl = document.createElement('table');
    tbl.style.width = '600px';
    //tbl.style.border = '1px solid black'; 
    tbl.style.position = "relative";
    tbl.style.top = document.getElementById("thread1").style.bottom = "15%";
    //color #4272d7

    tbl.style.borderRadius = '0px 0px 10px 10px';
    tbl.style.margin = 'auto';
    tbl.style.boxShadow = "5px 5px 5px grey";
    tbl.id = "table1";

    tbl.style.left = tbl.right = "-0.475%";
    
    
    for (let i = 0; i < num_keywords; i++) {
        let tr = tbl.insertRow();

        for (let j = 0; j < 1; j++) {
            let t_data = tr.insertCell();
            t_data.appendChild(document.createTextNode("   #" + keywords[i].name));
            // t_data.style.border = '1px solid #4272d7';
            t_data.style.padding = '10px';
            t_data.style.backgroundColor = "white";
            t_data.style.height = 320;
            t_data.style.width = 300;
            t_data.style.borderRadius = '0px 0px 10px 10px';
            t_data.className = "table_elements";
            
            //adding checkboxs 

            let x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            x.className = "checkboxs";
            x.id = "checkbox"+String(i);
            x.value = keywords[i].name;
            x.style.position = "relative";
            x.style.cssFloat = "right";

            t_data.appendChild(x);
            x.onclick = function(event) {
                let checkbox = event.target;
                if(checkbox.checked){
                    //alert(checkbox.value);
                    texts_to_back_end += " ";
                    texts_to_back_end += String(checkbox.value);
                }
            }

          

            
            
     //       t_data.innerHTML += " <input type='checkbox' onclick='console.log(select.toString)' value='Select' />Update";
            
            /*
            for (let k = 0; k < 1; k++){
                let t_data = tr.insertCell();
                t_data.appendChild(x);
                t_data.style.padding = '10px';
                t_data.style.backgroundColor = "white";
               // t_data.style.height = 320;
                //t_data.style.width = 300;
                t_data.style.borderRadius = '0px 0px 10px 10px';
                t_data.className = "table_elements";
            }  
            */
        }
    }
   // console.log(document.getElementById("checkbox0").inner);
    document.getElementById('thread1').appendChild(tbl);
}


function api_clarifai(post_url) {
    //networking part 
    //using xht_http commnuicate with api 
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs', true);
    //发送合适的请求头信息
    xhr.setRequestHeader('Authorization', 'Key 3261754e3bbd40be865164fb9df711d1');
    xhr.setRequestHeader("Content-type", "application/json");
    let jsonobj1 = {
        inputs: [{
            data: {
                image: {
                    url: post_url
                }
            }
        }]
    };
    console.log(jsonobj1.inputs);
    xhr.send(JSON.stringify(jsonobj1));
    xhr.onload = function () {
        // 请求结束后,在这里生成hashtags的表格
        //let concepts = xhr.response;
        //console.log(concepts);
        let obj = JSON.parse(xhr.response); //parse JSON files to JSON obj
        let concepts = obj['outputs'][0]['data']['concepts'];
        console.log(concepts);
        let count = Object.keys(concepts).length;
        //concepts is a json object carring the data we want.
        console.log(concepts[0].name, count);
        /*table create by response*/

        create_table(count, concepts);

    };
}

api_clarifai(post_url);

function button1() {
    let texts = document.createElement("INPUT");
    texts.style.position = 'relative';
    texts.id = 'urls';
    let button = document.createElement("BUTTON");
    button.id = 'url_button';
    button.innerText = "enter the url of image: ";
    button.style.position = 'relative';
    button.style.top = button.style.botton = "5%";
    button.style.cssFloat = 'left'
    button.style.background = 'white';
    button.style.borderRadius = '10px 10px';
    button.style.margin = 'auto';
    button.style.boxShadow = "5px 5px 5px grey";
    texts.style.cssFloat = 'left';
    texts.style.top = texts.style.botton = "5%";

    document.getElementById("box").appendChild(texts);
    document.getElementById("box").appendChild(button);

}
button1();

//


function button2() {

    let button = document.createElement("BUTTON");
    button.id = 'step_2_button';
    button.innerText = "Click here to get hashtags";
    button.style.position = 'relative';
    button.style.top = button.style.botton = "5%";
    button.style.cssFloat = 'left'
    button.style.background = 'white';
    button.style.borderRadius = '10px 10px';
    button.style.margin = 'auto';
    button.style.right = button.style.left = "60%";
    document.getElementById("thread1_text1").insertAdjacentElement( "afterend",button);

}button2();
// if click button, change the pic in id = "ins_img", and then remove the id = "table1", adding a new table by calling api_clarifai()
function change_pic() {
    let img_url = document.getElementById("urls").value;
    //document.getElementById("thread1").innerHTML = img_url; 
    console.log(document.getElementById("ins_img").getAttribute("src"));
    document.getElementById("ins_img").src = img_url;
    document.getElementById("table1").remove(); // style.display ="none";
    api_clarifai(img_url);
}

document.getElementById("url_button").onclick = function () {
    change_pic();
};

//

function click_step2_button(){
    let btn_2 = document.getElementById("step_2_button");
    btn_2.onclick = function(){
       //alert(texts_to_back_end);
        api_2(texts_to_back_end);
    }
}
click_step2_button();


function api_2(texts_to_back_end){
    let xhr = new XMLHttpRequest();
    let url = 'https://socialbook.io/api/tool/hashtag/suggest?q=';
    url += texts_to_back_end;
    alert(url);
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log(json.data[0]);
            console.log(json.data[0].hashtag);
            count = Object.keys(json.data).length;
        //     alert(count);
            thread2();
            create_table2(count,json);
        }
    };
    xhr.send();
}


function create_table2(num_hashtags, json) {
    let tb2 = document.createElement('table');
    tb2.style.width = '460px';
    //tbl.style.border = '1px solid black'; 
    tb2.style.position = "relative";
    tb2.style.top = document.getElementById("p1").style.bottom = "0%";
    //color #4272d7
    tb2.style.borderRadius = '0px 0px 10px 10px';
    tb2.style.margin = 'auto';
    tb2.style.boxShadow = "5px 5px 5px grey";
    tb2.id = "table2";

    for (let i = 0; i < num_hashtags; i++) {
        let tr = tb2.insertRow();
        for (let j = 0; j < 1; j++) {
            let t_data = tr.insertCell();
            t_data.appendChild(document.createTextNode("#" + json.data[i].hashtag));
            // t_data.style.border = '1px solid #4272d7';
            t_data.style.padding = '10px';
            t_data.style.backgroundColor = "white";
            t_data.style.height = 320;
            t_data.style.width = 300;
            t_data.style.borderRadius = '0px 0px 10px 10px';
            t_data.className = "table2_elements";
        }
        for (let k = 0; k < 1; k++) {
            let t_data = tr.insertCell();
            t_data.appendChild(document.createTextNode("#" + json.data[i].exposure));
            // t_data.style.border = '1px solid #4272d7';
            t_data.style.padding = '10px';
            t_data.style.backgroundColor = "white";
            t_data.style.height = 320;
            t_data.style.width = 300;
            t_data.style.borderRadius = '0px 0px 10px 10px';
            t_data.className = "table2_elements";
        }
        for (let h = 0; h < 1; h++) {
            let t_data = tr.insertCell();
            t_data.appendChild(document.createTextNode("#" + json.data[i].mediaCount));
            // t_data.style.border = '1px solid #4272d7';
            t_data.style.padding = '10px';
            t_data.style.backgroundColor = "white";
            t_data.style.height = 320;
            t_data.style.width = 300;
            t_data.style.borderRadius = '0px 0px 10px 10px';
            t_data.className = "table2_elements";
        }

    }
    document.getElementById("thread2").appendChild(tb2);
}
