// 轮播图

function Banner() {
  //1.设置基本的属性
  this.cont = document.querySelector(".ban");
  this.l = document.querySelector(".btleft");
  this.r = document.querySelector(".btright");
  this.aI = document.querySelectorAll(".imgbox>a");
  this.box = document.querySelector(".imgbox");
  this.box.style.width = this.aI[0].offsetWidth * this.aI.length + "px";
  this.aSpa = document.querySelectorAll(".spa");

  this.index = 0;
  this.t = null;

  this.flag = 0;
  this.eventProc();
}
//2.事件处理方法
Banner.prototype.eventProc = function() {
  var that = this;

  this.t = setInterval(function() {
    var ls = that;

    if (ls.flag == 0) {
      if (that.index == 0) {
        that.box.style.left = -parseInt(that.box.style.width) + "px";

        that.index = that.aI.length - 1 - 1;
      } else {
        that.index--;
      }
      that.alterElepro();
    }

    that.cont.onmouseover = function() {
      ls.flag = 1;
    };
    that.cont.onmouseout = function() {
      ls.flag = 0;
    };

    that.l.onclick = function() {
      if (ls.index == 0) {
        ls.box.style.left = -parseInt(ls.box.style.width) + "px";

        ls.index = ls.aI.length - 1 - 1;
      } else {
        ls.index--;
      }

      ls.alterElepro();
    };

    that.r.onclick = function() {
      if (ls.index == ls.aI.length - 1) {
        ls.box.style.left = 0;
        ls.index = 1;
      } else {
        ls.index++;
      }
      ls.alterElepro();
    };
    for (let i = 0; i < that.aSpa.length; i++) {
      that.aSpa[i].onclick = function() {
        ls.index = i;

        ls.alterElepro();
      };
    }
  }, 3000);
};
//3.改变一些属性
Banner.prototype.alterElepro = function() {
  // console.log(-this.aI[0].offsetWidth*this.index);
  for (var i = 0; i < this.aSpa.length; i++) {
    this.aSpa[i].style.backgroundColor = "darkslateblue";
  }
  this.aSpa[this.index].style.backgroundColor = "orange";
  move(this.box, {
    left: -this.aI[0].offsetWidth * this.index
  });

  this.setElepro();
};
//4.属性改变后设置给特定元素
Banner.prototype.setElepro = function() {};
new Banner();

class Meau {
  constructor() {
    $.meul = $(".gdshow");

    this.init();
  }
  init() {
    $.meul.hover(
      function() {
        $(this)
          .css({
            backgroundColor: "darkslategray"
          })
          .find(".fcont")
          .css({
            display: "block"
          });
      },
      function() {
        $(this)
          .css({
            backgroundColor: "whitesmoke"
          })
          .find(".fcont")
          .css({
            display: "none"
          });
      }
    );
  }
}
new Meau();

// 选项卡
class Tab {
  constructor() {
    this.li = document.querySelectorAll(".s-rig-b-title>a");
    this.ul = document.querySelectorAll(".s-rig-b-con>ul");

    this.init();
  }
  init() {
    for (var i = 0; i < this.li.length; i++) {
      this.li[i].setAttribute("indx", i);
      var that = this;
      this.li[i].onmouseover = function() {
        for (var j = 0; j < that.li.length; j++) {
          that.li[j].className = "";
          that.li[j].style.color = "";
          that.ul[j].style.display = "none";
        }
        that.className = "active";

        var index = this.getAttribute("indx");
        this.style.color = "red";
        that.ul[index].style.display = "block";
      };
    }
  }
}
new Tab();

// <section id="case-1">的效果
// class Case_goods_1 {
//   constructor() {
//     this.ceGdsImg = document.querySelectorAll(".case-1>div");
//     console.log(this.ceGdsImg.length);
//     this.init();
//   }

//   init() {
//     $(this.ceGdsImg).hover(function(){

//       $(this).find("i").css({
//         display:"block",
//         width:"230px",
//         height:"205px",
//         backgroundColor:"rgba(0,0,0,.4)"
//       });
//     })

//   };
// }
// new Case_goods_1();

class Goods {
  constructor() {
    this.cs3_r_gds = document.querySelector(".csrig>ul");
    this.url = "http://localhost/19online/data/goods.json";
    this.init();
  }
  init() {
    var that = this;
    ajaxGet(this.url, function(res) {
      that.res = JSON.parse(res);
      that.display();
    });
  }
  display() {
    var str = "";
    for(var i=0;i<10;i++){
      str+=`<li>
      <a href=""><img src="${this.res[i].url}" alt=""></a>
      <span>${this.res[i].name}</span>
      <span>零售价：<i>￥${this.res[i].price}</i></span>
      <span>会员价：<b>￥${this.res[i].wprice}</b></span>
      </li>`;
    }
    this.cs3_r_gds.innerHTML=str;
  };
}
new Goods();

class Csleftcont{
  constructor(){
    this.cs=document.querySelectorAll(".csleft-cont>div");
    
    this.init();
  };
  init(){
    this.index=0;
    var t;
    var that=this;
    t = setInterval(function(){that.play(that);}, 2000);
  };
  play(that){
    
    
    this.index++;
    if(this.index>1){
      this.index=0;
    }
    $(this.cs).eq(this.index).fadeIn(230).siblings().fadeOut(230);
  };
}
new Csleftcont;
class Cs3_l{
  constructor(){
    this.cs=document.querySelectorAll(".cs3-l>div");
    
    this.init();
  };
  init(){
    this.index=0;
    var t;
    var that=this;
    t = setInterval(function(){that.play(that);}, 2000);
  };
  play(that){
    
    
    this.index++;
    if(this.index>this.cs.length){
      this.index=0;
    }
    $(this.cs).eq(this.index).fadeIn(230).siblings().fadeOut(230);
  };


}
new Cs3_l;


class Cs3_r{
  constructor() {
    this.cs3_r_gds = document.querySelector(".cs3-r>ul");
    this.url = "http://localhost/19online/data/goods.json";
    this.init();
  }
  init() {
    var that = this;
    ajaxGet(this.url, function(res) {
      that.res = JSON.parse(res);
      that.display();
    });
  }
  display() {
    var str = "";
    for(var i=0;i<4;i++){
      str+=`<li>
      <a href=""><img src="${this.res[i].url}" alt=""></a>
      <span>${this.res[i].name}</span>
      <span>零售价：<i>￥${this.res[i].price}</i></span>
      <span>会员价：<b>￥${this.res[i].wprice}</b></span>
  </li>
     `;
    }
    this.cs3_r_gds.innerHTML=str;
  };
}
new Cs3_r;



class Show_sleft{
  constructor() {
    this.cs3_r_gds = document.querySelector(".sleft>div>ul");
    this.url = "http://localhost/19online/data/goods.json";
    this.init();
  }
  init() {
    var that = this;
    ajaxGet(this.url, function(res) {
      that.res = JSON.parse(res);
      that.display();
    });
  }
  display() {
    var str = "";
    for(var i=0;i<4;i++){
      str+=`<li>
      <a href=""><img src="${this.res[i].url}" alt=""></a>
      <span>${this.res[i].name}</span>
      <span>零售价：<i>￥${this.res[i].price}</i></span>
      <span>会员价：<b>￥${this.res[i].wprice}</b></span>
  </li>
     `;
    }
    this.cs3_r_gds.innerHTML=str;
  };
}
new Show_sleft;
class InfoLog{
  constructor(){
    this.loginfo=document.querySelector("info-spei");
    
  };
  init(){

  };
  
  
}
new InfoLog;
