var a,b,i,j;
var px=5;
var canvas1=document.getElementById("canvas1");
var ctx1=canvas1.getContext("2d");
var row1=[];
var col1=33;
row1[0]=[1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0];
row1[1]=[1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0];
row1[2]=[1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0];
row1[3]=[1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0];
row1[4]=[1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0];
row1[5]=[1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0];
row1[6]=[1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0];
row1[7]=[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0];
row1[8]=[0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0];
row1[9]=[0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0];
row1[10]=[0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0];
row1[11]=[1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0];
row1[12]=[1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0];
row1[13]=[0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0];
row1[14]=[0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0];
row1[15]=[1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0];
row1[16]=[0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0];
row1[17]=[0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0];
row1[18]=[0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0];
row1[19]=[0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0];
row1[20]=[1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0];
row1[21]=[1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0];
row1[22]=[0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0];
row1[23]=[0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0];
row1[24]=[1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0];
row1[25]=[0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0];
row1[26]=[1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0];
row1[27]=[1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0];
row1[28]=[1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0];
row1[29]=[1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0];
row1[30]=[1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0];
row1[31]=[1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0];
row1[32]=[1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0];
var DrawCode=function(){
    b=col1*px;
    canvas1.setAttribute("height", b.toString());
    canvas1.setAttribute("width", b.toString());
    ctx1.beginPath();
    for (i=0;i<col1;i++){
        for (j=0;j<col1;j++){
            a=row1[i][j].toString();
            if (a=="1"){
                ctx1.fillStyle="#000000";
            }
            if (a=="0"){
                ctx1.fillStyle="#ffffff";
            }
            ctx1.fillRect(i*px,j*px,px,px);
        }
    }
    ctx1.closePath();
}
DrawCode();

var h1=document.getElementsByTagName("h1");
var topnum=h1[1].offsetTop;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > topnum || document.documentElement.scrollTop > topnum) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}