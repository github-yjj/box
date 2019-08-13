// class Gdlistright {
//     constructor() {
//       this.cs3_r_gds = document.querySelector(".gdlistright>ul");
//       this.url = "http://localhost/19online/data/goods.json";
//       this.init();
//     }
//     init() {
//       var that = this;
//       ajaxGet(this.url, function(res) {
//         that.res = JSON.parse(res);
//         that.display();
//       });
//     }
//     display() {
//       var str = "";
//       for (var i = 0; i < 24; i++) {
//         str += `<li>
//             <a href=""><img src="${this.res[i].url}" alt=""></a>
//             <span>${this.res[i].name}</span>
//             <span>零售价：<i>￥${this.res[i].price}</i></span>
//             <span>会员价：<b>￥${this.res[i].wprice}</b></span>
//             <input type="button" value="加入购物车" class="bt">
//         </li>
//            `;
//       }
//       this.cs3_r_gds.innerHTML = str;
//     }
//   }
//   new Gdlistright;
class Gdbanner {
  constructor() {
    this.cs = document.querySelectorAll(".gd-banner>a");

    this.init();
  }
  init() {
    this.index = 0;
    var t;
    var that = this;
    t = setInterval(function() {
      that.play(that);
    }, 2000);
  }
  play(that) {
    this.index++;
    if (this.index > this.cs.length) {
      this.index = 0;
    }
    $(this.cs)
      .eq(this.index)
      .fadeIn(230)
      .siblings()
      .fadeOut(230);
  }
}
new Gdbanner();

class Gdlistleft {
  constructor() {
    this.cs3_r_gds = document.querySelector(".gdlistleft>ul");
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
    for (var i = 0; i < 5; i++) {
      str += `<li>
          <a href=""><img src="${this.res[i].url}" alt=""></a>
          <span>${this.res[i].name}</span>
          <span>零售价：<i>￥${this.res[i].price}</i></span>
          <span>会员价：<b>￥${this.res[i].wprice}</b></span>
          
      </li>
         `;
    }
    this.cs3_r_gds.innerHTML = str;
  }
}
new Gdlistleft();
class Gdlistright_ul {
  constructor() {
    this.con = document.querySelector(".gdlistright>ul");
    this.url = "http://localhost/19online/data/goods.json";
    this.init();
    this.load();
  }
  init() {
    var that = this;
    this.con.addEventListener("click", gdTip);
    function gdTip(e) {
      if (e.target.className == "bt") {
        that.id = e.target.parentNode.getAttribute("idenf");
        that.setCook();
      }
      // console.log(e.target);
      if(e.target.className=="nwli"){
        var tgt=[];
        tgt=e.target.getAttribute("idenf")||e.target.parentNode.getAttribute("idenf")||e.target.parentNode.parentNode.getAttribute("idenf");
        localStorage.setItem("temp",tgt);
        // console.log(tgt);
        location.href="http://localhost/19online/detail.html";
        
      }
    }
  }
  setCook() {
    this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
    if (this.goods.length == 0) {
      this.goods.push({
        id: this.id,
        num: 1
      });
    } else {
      var i = 0;
      var onoff = this.goods.some((val, index) => {
        i = index;
        return val.id == this.id;
      });
      if (onoff) {
        this.goods[i].num++;
      } else {
        this.goods.push({
          id: this.id,
          num: 1
        });
      }
    }
    setCookie("goods", JSON.stringify(this.goods));
    // this.gds=getCookie("gds")?JSON.parse(getCookie("gds")):[];
    // console.log(this.gds);
    // if(this.gds.length==0){
    //   this.gds.push({
    //     sku:this.id,
    //     num:1
    //   });
    // }else{
    //   console.log(this.gds.length);
    //   var i=0;
    // }

    // console.log(this.goods[0].num);
  }
  load() {
    var that = this;
    ajaxGet(this.url, function(res) {
      that.res = JSON.parse(res);
      that.display();
    });
  }
  display() {
    var str = "";
    this.res.forEach(ikey => {
      str += `<li idenf="${ikey.udid}" class="nwli">
            <a class="nwli"><img src="${ikey.url}" alt="" class="nwli"></a>
            <span class="nwli">${ikey.name}</span>
            <span class="nwli">零售价：<i class="nwli">￥${ikey.price}</i></span>
            <span class="nwli">会员价：<b class="nwli">￥${ikey.wprice}</b></span>
            <input type="button" value="加入购物车" class="bt">
        </li>
           `;
    });
    this.con.innerHTML = str;
  }
}
new Gdlistright_ul();
