function Magnifier(){
   
    this.sBox = document.querySelector(".dlcasesh-l");
    this.bBox = document.querySelector(".dlcasesh-box");
    this.span = document.querySelector(".dlcasesh-l span");
    this.bImg = document.querySelector(".dlcasesh-box img");
    // console.log(this.sBox,this.bBox);
    this.addEvent()
}
Magnifier.prototype.init = function(){

    var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
    var h = this.bImg.offsetHeight / this.bBox.offsetHeight;
    this.span.style.width = this.sBox.offsetWidth / w + "px";
    this.span.style.height = this.sBox.offsetHeight / h + "px";
}
Magnifier.prototype.addEvent = function(){
    var that = this;
    console.log(this.sBox);
    this.sBox.addEventListener("mouseover",function(){
        that.over()
        that.init()
    })
    this.sBox.addEventListener("mouseout",function(){
        that.out()
    })
    this.sBox.addEventListener("mousemove",function(eve){
        var e = eve || window.event;
        that.move(e);
    })
}
Magnifier.prototype.over = function(){
    this.span.style.display = "block";
    this.bBox.style.display = "block";
}
Magnifier.prototype.out = function(){
    this.span.style.display = "none";
    this.bBox.style.display = "none";
}
Magnifier.prototype.move = function(e){
    var l = e.offsetX - this.span.offsetWidth/2;
    var t = e.offsetY - this.span.offsetHeight/2;
    if(l < 0) l=0;
    if(t < 0) t=0;
    if(l>this.sBox.offsetWidth - this.span.offsetWidth)l=this.sBox.offsetWidth-this.span.offsetWidth;
    if(t>this.sBox.offsetHeight - this.span.offsetHeight)t=this.sBox.offsetHeight - this.span.offsetHeight;
    var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
    var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
    
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    
    this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
    this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
}
onload = function(){
    new Magnifier();
}          
