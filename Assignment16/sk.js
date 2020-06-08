var p1=document.querySelector("#player1");
var p2=document.querySelector("#player2");
var r=document.querySelector("#reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var num=document.querySelector("input");
var winscoredisplay = document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameover=false;
var winscore=5;
p1.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(p1score===winscore){
			
			p1display.classList.add("winner");
			gameover=true;

		}
		p1display.textContent = p1score;
	}
});
p2.addEventListener("click",function(){
	if(!gameover){
        p2score++;
		if(p2score===winscore){
			
			p2display.classList.add("winner");
			gameover=true;
		}
	}
	p2display.textContent = p2score;
});
r.addEventListener("click",function(){
	reset();
});
function reset(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
}
num.addEventListener("click",function(){
winscoredisplay.textContent=this.value;
winscore=Number(this.value);
reset();
});