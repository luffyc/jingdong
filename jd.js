$(function(){
     // 楼层
     var bo=$(".box")[0];//获取所需元素
        var floor=$(".floor");
        var lis=$(".lis");
        var cw=document.documentElement.clientWidth;//获得浏览器窗口的高度和宽度
        var ch=document.documentElement.clientHeight;
        var bh=bo.offsetHeight;//获得bo的实际高度
        var sign=true;
        var shuju=["服饰","美妆","手机","家电","数码","运动","家居","母婴","食品","图书","服务"];
        bo.style.top=(ch-bh)/2+"px";//给固定定位的top赋值
        for(var i=0;i<lis.length;i++){
        	lis[i].index=i;
        	lis[i].onclick=function(){//点击楼层时
                var floor=$(".floor");
                sign=false;
        		var top=floor[this.index].offsetTop;//获取该楼层到浏览器的高度
                animate(document.body,{scrollTop:top},300,function(){
                    sign=true;
                });//将这个高度给滚动条
        		animate(document.documentElement,{scrollTop:top},300,function(){
                    sign=true;
                });//将这个高度给滚动条
        		for(var i=0;i<lis.length;i++){
        			lis[i].innerHTML=i+1+"F";
        			lis[i].style.color="#666";
        		}
        		lis[this.index].style.color="#C81623";
                lis[this.index].style.background="#fff";
                lis[this.index].innerHTML=shuju[this.index];

        	}
        }
        var flag=true;
        var flag1=true;
        window.onscroll=function(){//滚动事件
            if(!sign){
                return;
            }
            var floor=$(".floor");
            var shuju=["服饰","美妆","手机","家电","数码","运动","家居","母婴","食品","图书","服务"];
        	var obj=document.documentElement.scrollTop? document.documentElement:document.body;
        	for(var i=0;i<floor.length;i++){
        		if(obj.scrollTop>=floor[i].offsetTop-ch+100){//滚动条值大于等于窗口值加楼层到body的值时 该楼层出现
                    for(var j=0;j<lis.length;j++){
                        lis[j].innerHTML=j+1+"F";
        			    lis[j].style.color="#666";
                    }
                    lis[i].innerHTML=shuju[i];
        		    lis[i].style.color="#C81623";
                    // var imgs=$("img",floor[i]);
                    // for(var j=0;j<imgs.length;j++){
                    //     var aa=imgs[j].getAttribute("aa");
                    //     imgs[j].src=aa;
                    // }
        		}
        	}
        	if(obj.scrollTop>=floor[0].offsetTop-ch+100){//第一楼开始出现
        		if(flag){
        			flag=false;//关掉动画
        			animate(bo,{opacity:1},500,function(){//执行动画 楼层显现
        				flag1=true;//消失的开关开启
        			});
        		}  
            }else{
            	if(flag1){//没有到达一楼时
        			flag1=false;//消失的动画关闭
        			animate(bo,{opacity:0},500,function(){//执行动画 楼层消失
        				flag=true;//显现的开关开启
        			});
        		}  
            }
        }


//右侧
var r=$(".rt");
var z=$(".zchu");
for(var i=0;i<r.length;i++){
    r[i].index=i;
    r[i].onmouseover=function(){
        if( r[this.index].classList.contains('zchub')){
            animate(z[this.index],{left:-35},300);
            z[this.index].style.display="block";
            r[this.index].style.backgroundColor="#C81623"; 
        }else{
            animate(z[this.index],{left:-60},300);
            z[this.index].style.display="block";
            r[this.index].style.backgroundColor="#C81623";
        }      
    }
    r[i].onmouseout=function(){
        z[this.index].style.display="none";
        r[this.index].style.backgroundColor="#7a6e6e";
        animate(z[this.index],{left:0},300);
    }
}




    //下拉地点
    var span=$(".head-span")[0];
    var location=$(".location")[0];
    var bai=$(".bai")[0];
    span.onmouseover=function(){
        location.style.display="block";
        bai.style.display="block";
    }
    span.onmouseout=function(){
        location.style.display="none";
        bai.style.display="none";
    }

    //头部下拉
    var hfont=$(".hfont");
    var xb=$(".xb");
    var pj=$(".phone-jd");
    for(var i=0;i<hfont.length;i++){
        hfont[i].index=i;
        hfont[i].onmouseover=function(){
            xb[this.index].style.display="block";
            pj[this.index].style.display="block";
        }
        hfont[i].onmouseout=function(){
            xb[this.index].style.display="none";
            pj[this.index].style.display="none";
        }
    }

var pj2=$(".phonetu")[0];
var xtb=$(".head-xtb2")[0];
pj2.onmouseover=function(){
    xtb.style.display="block";
    xb[this.index].style.display="block";
    pj[this.index].style.display="block";
}
pj2.onmouseout=function(){
    xtb.style.display="none";
    xb[this.index].style.display="none";
    pj[this.index].style.display="none";
}

    //购物车下拉
    var sc=$(".shopping-car")[0];
    var schidden=$(".sc-hidden")[0];
    var scxb=$(".sc-xbai")[0];
    sc.onmouseover=function(){
        schidden.style.display="block";
        scxb.style.display="block";
    }
    sc.onmouseout=function(){
        schidden.style.display="none";
        scxb.style.display="none";
    }
    

    //banner左边
    var bbox=$(".bl-box");
    var blhidden=$(".bl-hidden");
    var blf=$(".banner-left-font");
    for(var i=0;i<bbox.length;i++){
        bbox[i].index=i;
        bbox[i].onmouseover=function(){
            blhidden[this.index].style.display="block";
            blf[this.index].style.color="#C81623";
        }
        bbox[i].onmouseout=function(){
            blhidden[this.index].style.display="none";
            blf[this.index].style.color="#fff";
        }
    }
    

    //天天特价轮播
    var ddr=$(".day-r")[0];
    var sd=$(".day-right1");
    var sdt=setInterval(moves,2000);
    var j=0;
    function moves(){
        j++;
        if(j>=sd.length-1){
            j=0;
        }
        animate(ddr,{top:-j*141},500);
    }




    //banner轮播
	var box=$(".banner-middle")[0];
	var img=$(".b-img")[0];
	var imgs=getChilds(img);
	var circles=$(".circle");
	var left=$(".left")[0];
	var right=$(".right")[0];
	var n=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(type){
		if(!flag){
			return;
		}
		flag=false;
		if(type=="l"){
			n--;
			if(n<0){
				n=imgs.length-1;
			}
		}else{
			n++;
			if(n>=imgs.length){
				n=0;
			}
		}
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},400);
            circles[i].style.background="#3E3E3E";
		}
        circles[n].style.background="#B61B1F";
        animate(imgs[n],{opacity:1},400,function(){
            flag=true;
        });
	}
	for(var i=0;i<imgs.length;i++){
		circles[i].index=i;
		circles[i].onmouseover=function(){
			if(this.index>n){
                	for(var i=0;i<circles.length;i++){
                		animate(imgs[i],{opacity:0},400);
	        		    circles[i].style.background="#3E3E3E";
	        	}
	        	circles[this.index].style.background="#B61B1F";
                animate(imgs[this.index],{opacity:1},400);
	            n=this.index;
                }else if(this.index<n){
                	for(var i=0;i<circles.length;i++){
                		animate(imgs[i],{opacity:0},400);
	        		    circles[i].style.background="#3E3E3E";
	        	}
	        	circles[this.index].style.background="#B61B1F";
                animate(imgs[this.index],{opacity:1},400);
	            n=this.index;
                }
		}
	}
	box.onmouseover=function(){
		clearInterval(t);
		left.style.display="block";
		right.style.display="block";
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
		left.style.display="none";
		right.style.display="none";
	}
	left.onclick=function(){
		move("l");
	}
	right.onclick=function(){
		move();
	}


        //今日推荐
        var today=$(".today-dk")[0];
		var dk=$(".today-box")[0];
		var xk=$(".today2");
		var today2=$(".today2")[0];
		var left2=$(".left2")[0];
		var right2=$(".right2")[0];
		var w=parseInt(getStyle(today2,"width"));
		var n2=0;
        var flag2=true;
        function move2(){
        	if(!flag2){
        		return;
        	}
        	flag2=false;
            n2++;
            if(n2>=xk.length){
            	n2=0;
            }
            animate(dk,{left:-n2*w},500,function(){
            	flag2=true;
            });
        }
        function move3(){
        	if(!flag2){
        		return;
        	}
        	flag2=false; 
            n2--;
            if(n2<0){
            	n2=xk.length-1;
            }
            animate(dk,{left:-n2*w},500,function(){
            	flag2=true;
            });
        }
        today.onmouseover=function(){
        	left2.style.display="block";
		    right2.style.display="block";
        }
        today.onmouseout=function(){
            left2.style.display="none";
		    right2.style.display="none";
        }
        left2.onclick=function(){
        	move2();
        }
        right2.onclick=function(){
        	move3();
        }

    //选项卡
    var xxkc=$(".xxkchange");
    for(var i=0;i<xxkc.length;i++){
        xxk(xxkc[i]);
    }
    function xxk(obj){
        var xa=$(".change",obj);
        var a=$(".ca",obj);
        var xx=$(".xxk",obj);
        var d=$(".d",obj);
        for(var i=0;i<xa.length;i++){
            xa[i].index=i;
            xa[i].onmouseover=function(){
                for(var i=0;i<xa.length;i++){
                    xx[i].style.display="none";
                    d[i].style.display="none";
                    a[i].style.color="#333";
                }
                xx[this.index].style.display="block";
                d[this.index].style.display="block";
                a[this.index].style.color="#C81623";
            }
        }
    }
    



    //一楼轮播
    var floor=$(".big-box2")[0];
    var tu=$(".img3");
    var dians=$(".circle2");
    var left3=$(".left3")[0];
    var right3=$(".right3")[0];
    var w3=parseInt(getStyle(floor,"width"));
    var n3=0;
    var next3=0;
    var flag3=true;
    var m=setInterval(dong,3000);
    function dong(){
    	if(!flag3){
    		return;
    	}
    	flag3=false;
    	next3=n3+1;
    	if(next3>=tu.length){
    		next3=0
    	}
        for(var i=0;i<dians.length;i++){
        	dians[i].style.background="#3E3E3E";
        }
        dians[next3].style.background="#B61B1F";
        tu[next3].style.zIndex=1;
        tu[next3].style.left=w3+"px";//放右边
        animate(tu[n3],{left:-w3},500);//往左移
        animate(tu[next3],{left:0},500,function(){
        	flag3=true;
        });//下张放中间
    	n3=next3;
    }
    function dong1(){
    	if(!flag3){
    		return;
    	}
    	flag3=false;
    	next3=n3-1;
    	if(next3<0){
    		next3=tu.length-1;
    	}
        for(var i=0;i<dians.length;i++){
        	dians[i].style.background="#3E3E3E";
        }
        dians[next3].style.background="#B61B1F";
        tu[next3].style.zIndex=1;
        tu[next3].style.left=-w3+"px";//放左边
        animate(tu[n3],{left:w3},500);//往右移
        animate(tu[next3],{left:0},500,function(){
        	flag3=true;
        });//下张放中间
    	n3=next3;
    }
    for(var i=0;i<dians.length;i++){
    	dians[i].index=i;
    	dians[i].onmouseover=function(){
    		if(this.index>n){
    			for(var i=0;i<dians.length;i++){
		        	dians[i].style.background="#3E3E3E";
		        }
		        dians[this.index].style.background="#B61B1F";
                tu[this.index].style.zIndex=1;
		        tu[this.index].style.left=w3+"px";//放右边
		        animate(tu[n3],{left:-w3},500);//往左移
		        animate(tu[this.index],{left:0},500);//下张放中间
		    	n3=this.index;
    		}else if(this.index<n){
    			for(var i=0;i<dians.length;i++){
		        	dians[i].style.background="#3E3E3E";
		        }
		        dians[this.index].style.background="#B61B1F";
		        tu[this.index].style.zIndex=1;
		        tu[this.index].style.left=-w3+"px";//放左边
		        animate(tu[n3],{left:w3},500);//往右移
		        animate(tu[this.index],{left:0},500);//下张放中间
		    	n3=this.index;
    		}
    	}
    }
    floor.onmouseover=function(){
		clearInterval(m);
		left3.style.display="block";
		right3.style.display="block";
	}
	floor.onmouseout=function(){
		m=setInterval(dong,3000);
		left3.style.display="none";
		right3.style.display="none";
	}
	left3.onclick=function(){
		dong1();
	}
	right3.onclick=function(){
		dong();
	}
    



    //二楼轮播
    var boss=$(".re-middle")[0];
    var tus=$(".re-middle-box");
    var dians4=$(".circle3");
    var left4=$(".left4")[0];
    var right4=$(".right4")[0];
    var w4=parseInt(getStyle(boss,"width"));
    var t4=setInterval(dong2,3000);
    var n4=0;
    var next4=0;
    var flag4=true;
    function dong2(){
    	if(!flag4){
    		return;
    	}
    	flag4=false;
        next4=n4+1;
        if(next4>=tus.length){
        	next4=0;
        }
        for(var i=0;i<tus.length;i++){
        	dians4[i].style.background="#3E3E3E";
        }
        dians4[next4].style.background="#B61B1F";
        tus[next4].style.left=w4+"px";
        tus[next4].style.zIndex=1;
        animate(tus[n4],{left:-w4},500);
        animate(tus[next4],{left:0},500,function(){
        	flag4=true;
        });
        n4=next4;
    }
    function dong3(){
    	if(!flag4){
    		return;
    	}
    	flag4=false;
        next4=n4-1;
        if(next4<0){
        	next4=tus.length-1;
        }
        for(var i=0;i<tus.length;i++){
        	dians4[i].style.background="#3E3E3E";
        }
        dians4[next4].style.background="#B61B1F";
        tus[next4].style.left=-w4+"px";
        animate(tus[n4],{left:w4},500);
        animate(tus[next4],{left:0},500,function(){
        	flag4=true;
        });
        n4=next4;
    }
    for(var i=0;i<dians.length;i++){
    	dians4[i].index=i;
    	dians4[i].onmouseover=function(){
    		if(this.index>n4){
    			for(var i=0;i<tus.length;i++){
	        	dians4[i].style.background="#3E3E3E";
	        }
	        dians4[this.index].style.background="#B61B1F";
	        tus[this.index].style.left=w4+"px";
	        tus[this.index].style.zIndex=1;
	        animate(tus[n4],{left:-w4},500);
	        animate(tus[this.index],{left:0},500,function(){
	        	flag4=true;
	        });
            n4=this.index;
    		}else if(this.index<n){
    			for(var i=0;i<tus.length;i++){
	        	dians4[i].style.background="#3E3E3E";
	        }
	        dians4[this.index].style.background="#B61B1F";
	        tus[this.index].style.left=-w4+"px";
	        animate(tus[n4],{left:w4},500);
	        animate(tus[this.index],{left:0},500,function(){
	        	flag4=true;
	        });
	        n4=this.index;
    		}
    	}
    }
    boss.onmouseover=function(){
		clearInterval(t4);
		left4.style.display="block";
		right4.style.display="block";
	}
	boss.onmouseout=function(){
		t4=setInterval(dong2,3000);
		left4.style.display="none";
		right4.style.display="none";
	}
	left4.onclick=function(){
		dong3();
	}
	right4.onclick=function(){
		dong2();
	}




//六楼包装函数    六  七  八  九
    var obj6=$(".re6-middle");
        for(var i=0;i<obj6.length;i++){
            lunbo6(obj6[i]);
        }
    function lunbo6(obj){
        var boss6=obj;
        var tus6=$(".re6-middle-box",obj);
        var dians6=$(".circle6",obj);
        var left6=$(".left6",obj)[0];
        var right6=$(".right6",obj)[0];
        var w6=obj.offsetWidth;
        var t6=setInterval(dong6,3000);
        var n6=0;
        var next6=0;
        var flag6=true;
        function dong6(){
            if(!flag6){
                return;
            }
            flag6=false;
            next6=n6+1;
            if(next6>=tus6.length){
                next6=0;
            }
            for(var i=0;i<tus6.length;i++){
                dians6[i].style.background="#3E3E3E";
            }
            dians6[next6].style.background="#B61B1F";
            tus6[next6].style.left=w6+"px";
            tus6[next6].style.zIndex=1;
            animate(tus6[n6],{left:-w6},500);
            animate(tus6[next6],{left:0},500,function(){
                flag6=true;
            });
            n6=next6;
        }
        function dong7(){
            if(!flag6){
                return;
            }
            flag6=false;
            next6=n6-1;
            if(next6<0){
                next6=tus6.length-1;
            }
            for(var i=0;i<tus6.length;i++){
                dians6[i].style.background="#3E3E3E";
            }
            dians6[next6].style.background="#B61B1F";
            tus6[next6].style.left=-w6+"px";
            animate(tus6[n6],{left:w6},500);
            animate(tus6[next6],{left:0},500,function(){
                flag6=true;
            });
            n6=next6;
        }
        for(var i=0;i<dians6.length;i++){
            dians6[i].index=i;
            dians6[i].onmouseover=function(){
                if(this.index>n6){
                    for(var i=0;i<tus6.length;i++){
                    dians6[i].style.background="#3E3E3E";
                }
                dians6[this.index].style.background="#B61B1F";
                tus6[this.index].style.left=w6+"px";
                tus6[this.index].style.zIndex=1;
                animate(tus6[n6],{left:-w6},500);
                animate(tus6[this.index],{left:0},500,function(){
                    flag6=true;
                });
                n6=this.index;
                }else if(this.index<n6){
                    for(var i=0;i<tus6.length;i++){
                    dians6[i].style.background="#3E3E3E";
                }
                dians6[this.index].style.background="#B61B1F";
                tus6[this.index].style.left=-w6+"px";
                animate(tus6[n6],{left:w6},500);
                animate(tus6[this.index],{left:0},500,function(){
                    flag6=true;
                });
                n6=this.index;
                }
            }
        }
        boss6.onmouseover=function(){
            clearInterval(t6);
            left6.style.display="block";
            right6.style.display="block";
        }
        boss6.onmouseout=function(){
            t6=setInterval(dong6,3000);
            left6.style.display="none";
            right6.style.display="none";
        }
        left6.onclick=function(){
            dong7();
        }
        right6.onclick=function(){
            dong6();
        }
    }
    

        //十一楼轮播   包装
        var obj11=$(".re11-left2");
	    for(var i=0;i<obj11.length;i++){
	    	lunbo11(obj11[i]);
	    }
	    function lunbo11(obj){
	    	var box11=obj;
		    var imgs11=$(".re11-img",obj);
		    var dians11=$(".circle11",obj);
		    var left11=$(".left11",obj)[0];
		    var right11=$(".right11",obj)[0];
		    var w11=obj.offsetWidth;
		    var n11=0;
		    var next11=0;
		    var flag11=true;
		    var t11=setInterval(dong11,3000);
		    function dong11(){
		    	if(!flag11){
		    		return;
		    	}
		    	flag11=false;
		    	next11=n11+1;
		    	if(next11>=imgs11.length){
		    		next11=0;
		    	}
		        for(var i=0;i<dians11.length;i++){
		        	dians11[i].style.background="#3E3E3E";
		        }
		        dians11[next11].style.background="#B61B1F";
		        imgs11[next11].style.zIndex=1;
		        imgs11[next11].style.left=w11+"px";//放右边
		        animate(imgs11[n11],{left:-w11},500);//往左移
		        animate(imgs11[next11],{left:0},500,function(){
		        	flag11=true;
		        });//下张放中间
		    	n11=next11;
		    }
		    function dong12(){
		    	if(!flag11){
		    		return;
		    	}
		    	flag11=false;
		    	next11=n11-1;
		    	if(next11<0){
		    		next11=imgs11.length-1;
		    	}
		        for(var i=0;i<dians11.length;i++){
		        	dians11[i].style.background="#3E3E3E";
		        }
		        dians11[next11].style.background="#B61B1F";
		        imgs11[next11].style.zIndex=1;
		        imgs11[next11].style.left=-w11+"px";//放左边
		        animate(imgs11[n11],{left:w11},500);//往右移
		        animate(imgs11[next11],{left:0},500,function(){
		        	flag11=true;
		        });//下张放中间
		    	n11=next11;
		    }
		    for(var i=0;i<dians11.length;i++){
		    	dians11[i].index=i;
		    	dians11[i].onmouseover=function(){
		    		if(this.index>n11){
		    			for(var i=0;i<dians11.length;i++){
				        	dians11[i].style.background="#3E3E3E";
				        }
				        dians11[this.index].style.background="#B61B1F";
		                imgs11[this.index].style.zIndex=1;
				        imgs11[this.index].style.left=w11+"px";//放右边
				        animate(imgs11[n11],{left:-w11},500);//往左移
				        animate(imgs11[this.index],{left:0},500);//下张放中间
				    	n11=this.index;
		    		}else if(this.index<n11){
		    			for(var i=0;i<dians11.length;i++){
				        	dians11[i].style.background="#3E3E3E";
				        }
				        dians11[this.index].style.background="#B61B1F";
				        imgs11[this.index].style.zIndex=1;
				        imgs11[this.index].style.left=-w11+"px";//放左边
				        animate(imgs11[n11],{left:w11},500);//往右移
				        animate(imgs11[this.index],{left:0},500);//下张放中间
				    	n11=this.index;
		    		}
		    	}
		    }
		    box11.onmouseover=function(){
				clearInterval(t11);
				left11.style.display="block";
				right11.style.display="block";
			}
			box11.onmouseout=function(){
				t11=setInterval(dong11,3000);
				left11.style.display="none";
				right11.style.display="none";
			}
			left11.onclick=function(){
				dong12();
			}
			right11.onclick=function(){
				dong11();
			}
		    }
	        
	   
	//三楼包装函数   三  四  五
    var obj3=$(".re3-middle-img1");
    for(var i=0;i<obj3.length;i++){
    	lunbo3(obj3[i]);
    }
    function lunbo3(obj){
    	var box5=obj;
	    var imgs5=$(".re3-img",obj);
	    var dians5=$(".circle4",obj);
	    var left5=$(".left5",obj)[0];
	    var right5=$(".right5",obj)[0];
	    var w5=box5.offsetWidth;
	    var n5=0;
	    var next5=0;
	    var flag5=true;
	    var t5=setInterval(dong5,3000);
	    function dong5(){
	    	if(!flag5){
	    		return;
	    	}
	    	flag5=false;
	    	next5=n5+1;
	    	if(next5>=imgs5.length){
	    		next5=0;
	    	}
	        for(var i=0;i<dians5.length;i++){
	        	dians5[i].style.background="#3E3E3E";
	        }
	        dians5[next5].style.background="#B61B1F";
	        imgs5[next5].style.zIndex=1;
	        imgs5[next5].style.left=w5+"px";//放右边
	        animate(imgs5[n5],{left:-w5},500);//往左移
	        animate(imgs5[next5],{left:0},500,function(){
	        	flag5=true;
	        });//下张放中间
	    	n5=next5;
	    }
	    function dong6(){
	    	if(!flag5){
	    		return;
	    	}
	    	flag5=false;
	    	next5=n5-1;
	    	if(next5<0){
	    		next5=imgs5.length-1;
	    	}
	        for(var i=0;i<dians5.length;i++){
	        	dians5[i].style.background="#3E3E3E";
	        }
	        dians5[next5].style.background="#B61B1F";
	        imgs5[next5].style.zIndex=1;
	        imgs5[next5].style.left=-w5+"px";//放左边
	        animate(imgs5[n5],{left:w5},500);//往右移
	        animate(imgs5[next5],{left:0},500,function(){
	        	flag5=true;
	        });//下张放中间
	    	n5=next5;
	    }
	    for(var i=0;i<dians5.length;i++){
	    	dians5[i].index=i;
	    	dians5[i].onmouseover=function(){
	    		if(this.index>n5){
	    			for(var i=0;i<dians5.length;i++){
			        	dians5[i].style.background="#3E3E3E";
			        }
			        dians5[this.index].style.background="#B61B1F";
	                imgs5[this.index].style.zIndex=1;
			        imgs5[this.index].style.left=w5+"px";//放右边
			        animate(imgs5[n5],{left:-w5},500);//往左移
			        animate(imgs5[this.index],{left:0},500);//下张放中间
			    	n5=this.index;
	    		}else if(this.index<n5){
	    			for(var i=0;i<dians5.length;i++){
			        	dians5[i].style.background="#3E3E3E";
			        }
			        dians5[this.index].style.background="#B61B1F";
			        imgs5[this.index].style.zIndex=1;
			        imgs5[this.index].style.left=-w5+"px";//放左边
			        animate(imgs5[n5],{left:w5},500);//往右移
			        animate(imgs5[this.index],{left:0},500);//下张放中间
			    	n5=this.index;
	    		}
	    	}
	    }
	    box5.onmouseover=function(){
			clearInterval(t5);
			left5.style.display="block";
			right5.style.display="block";
		}
		box5.onmouseout=function(){
			t5=setInterval(dong5,3000);
			left5.style.display="none";
			right5.style.display="none";
		}
		left5.onclick=function(){
			dong6();
		}
		right5.onclick=function(){
			dong5();
		}
	    }



})