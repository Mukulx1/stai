let go= document.getElementById("calc");
var data=[]
var data2=[]
var score=0;
var scores=0;

var bb =()=>{
 for(x = 1;x<21;x++){
        var input_tags = document.getElementsByName('one'+x);
        
    for(i=0;i<input_tags.length;i++){
        if (input_tags[i].checked) {
            data.push(input_tags[i].value);
        }
    }
  
}
var dataint = data.map(Number);
console.log(dataint);

dataint.forEach(k=>{
    score+=k;
})
console.log(score)
let adding = document.getElementById("result");
adding.innerHTML+= "<br>"+score;




for(f = 1;f<21;f++){
    var input_tagss = document.getElementsByName('onee'+f);
    
for(w=0;w<input_tagss.length;w++){
    if (input_tagss[w].checked) {
        data2.push(input_tagss[w].value);
    }
}

}
var dataint2 = data2.map(Number);
console.log(dataint2);

dataint2.forEach(l=>{
    scores+=l;
})
console.log(scores)
let addingg = document.getElementById("results");
addingg.innerHTML+= "<br>"+scores;;








}
go.addEventListener("click", bb );



























































// var sec = document.getElementsByName('one');
// var third = document.getElementsByName('one');
// var fourth = document.getElementsByName('one');
// var fifth = document.getElementsByName('one');
// var sixth = document.getElementsByName('one');
// var seventh = document.getElementsByName('one');
// var eight = document.getElementsByName('one');
// var nine = document.getElementsByName('one');
// var ten = document.getElementsByName('one');
// var elev = document.getElementsByName('one');
// var twelev = document.getElementsByName('one');
// var thirteen = document.getElementsByName('one');
// var fourteen = document.getElementsByName('one');
// var fifteen = document.getElementsByName('one');
// var sixteen = document.getElementsByName('one');
// var seventeen = document.getElementsByName('one');
// var eightteen = document.getElementsByName('one');
// var nineteen = document.getElementsByName('one');
// var twenty = document.getElementsByName('one');