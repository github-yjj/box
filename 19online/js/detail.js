class DetGds{
    constructor(){
        this.det=document.querySelector(".dlcasesh");
        this.url="http://localhost/19online/data/goods.json";
        // console.log(this.det);
        this.str;
        this.tempdate=localStorage.getItem("temp");
        this.init();
       
        
    };
    init(){
        var that=this;
        
        ajaxGet(this.url,function(res){
            that.res=JSON.parse(res);
            var tep=0;
            for(var i=0;i<that.res.length;i++){
                if(that.res[i].udid==that.tempdate){
                    that.str=`<div class="dlcasesh-l">
                    <img src="${that.res[i].url}" alt="" srcset="">
                    <span></span>
                        
                    <p></p>
                </div>
                <div class="dlcasesh-box">
                    <img src="${that.res[i].url}"/>
                </div>
                <div class="dlcasesh-r">
                    <h1>${that.res[i].name}</h1>
                    <p>
                        <span>会员价：</span>
                        <span>￥${that.res[i].wprice}
                        </span>
                        <span>/ 瓶 </span>
                        <span>零售价：￥${that.res[i].price}</span>
                    </p>
                    <p>赠送积分：1375积分的用途登录 后可查看等级奖励积分</p>
                    <div class="dlcaseshr-b">
                        <p><span>数量：</span><input type="number" name="" id=""></p>
                        <div><img src="images/buy.jpg" alt="" id="buy"></div>
                    </div>
                </div>`;
                    tep=i;
                   that.det.innerHTML=that.str;
                }
                
            }
            that.buy=document.querySelector("#buy");
           
            new Magnifier();
            that.addEvt();
            that.id=that.res[tep].udid;            
        });
        
    };
    addEvt(){
        var that=this;
        this.buy.addEventListener("click",addShop);
        function addShop(e){
            that.sCook();
        }
        
    };
    sCook(){
        this.goods=getCookie("goods")?JSON.parse(getCookie("goods")):[];
        if(this.goods.length==0){
            this.goods.push({
                id:this.id,
                num:1
            });
        }else{
            console.log(this.goods.length);
            var i=0;
            var onoff=this.goods.some((val,index)=>{
                i=index;
                return val.id==this.id
            });
            if(onoff){
                this.goods[i].num++;
            }else{
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));

    };



}

var dg=new DetGds();



function Magnifier(){
                    // this.fath=document.querySelector(".dlcasesh");
                    // this.chdn=this.fath.children;
                    // console.log(this.fath,this.chdn);
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
                    // console.log(this.sBox);
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
                    // new Magnifier();
                }          
