//1、 翻转控制
function turn(elem){
	var cls=elem.className;
	var  n=elem.id.split('_')[1];//此时需要用的按钮n与elem的是一样的。
	if(!/photo_center/.test(cls)){
		//console.log(n);
		return rsort(n);

	}
	if(/photo_front/.test(cls)){
		cls=cls.replace(/photo_front/,'photo_back');
		g('#nav_'+n).className+=' i_back ';
	}else{
		cls=cls.replace(/photo_back/,'photo_front');
		g('#nav_'+n).className=g('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
	}
	return elem.className=cls;
}
//3、通用函数；
function g(seletor){
	var method=seletor.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
	return document[method](seletor.substr(1));
}
//随机生成一个range[min,max]中的一个数。
function random(range){
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1]);
	var diff=max-min;
	var number=Math.floor(Math.random()*diff+min);
	//console.log(number);
	return number;
}
//4、输出所有图片
var data=data;
function addPhotos(){
	var templete=g('#wrap').innerHTML;
	var html=[];
	var nav=[];
	for(var s in data){
		var _html=templete.replace('{{index}}',s)
		.replace('{{img}}.jpg',data[s].img)
		.replace('{{caption}}',data[s].caption)
		.replace('{{desc}}',data[s].desc);
		html.push(_html);
		nav.push('<span onclick="turn(g(\'#photo_'+s+'\'))" id="nav_'+s+'" class="i">&nbsp</span>');
	}
	html.push('<div class="nav">'+nav.join('')+'</div')
	g('#wrap').innerHTML=html.join('');
	rsort(random([0,23]));
}

//5、排序海报
function rsort(n){
	//清除所有元素的居中样式
	var _photo=g('.photo');//js中的一个约定，如果一个变量不常用，那么就是用_
	var photos=[];
	for(var i=0;i<_photo.length;i++){
		_photo[i].className=_photo[i].className.replace(/\s*photo_center\s*/,' ');//正则表达式，不需要引号，\s表示去掉空格。
		//排序之前去掉不是居中那个海报的样式。
		_photo[i].className=_photo[i].className.replace(/\s*photo_front\s*/,' ');
		_photo[i].className=_photo[i].className.replace(/\s*photo_back\s*/,' ');//保持所有的海报在正面.
		_photo[i].className+=' photo_front ';

		_photo[i].style.left='';
		_photo[i].style.top='';
		_photo[i].style['-webkit-transform']='';//这三个值必须为空，空格也不行，会随机产生值...纠结了好久..

		photos.push(_photo[i]);	
	}
// 清除所有的绑定事件
	for(var i=0;i<_photo.length;i++){
		_photo[i].removeEventListener('mouseover',toScaleBig,false);
		_photo[i].removeEventListener('mouseout',toScaleSmall,false);
	}

	var photoCenter=g('#photo_'+n);
	photoCenter.className+= ' photo_center ';
	photoCenter=photos.splice(n,1)[0];
	//console.log(photoCenter.className);
	
	var photos_left=photos.splice(0,Math.ceil(photos.length/2));
	//console.log(photos_left);

	var photos_right=photos;
	//console.log(photos_right);

	var ranges=calRange();
	
	for(var i in photos_left){
		var photo=photos_left[i];
		photo.style.left=random(ranges.left.x)+'px';
		photo.style.top=random(ranges.left.y)+'px';
		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(0.8)'
	}
	for(var i in photos_right){
		var photo=photos_right[i];
		photo.style.left=random(ranges.right.x)+'px';
		photo.style.top=random(ranges.right.y)+'px';
		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(0.8)'
	}

	//控制按钮处理
	var navs=g('.i');
	for(var i=0;i<navs.length;i++){
		navs[i].className=navs[i].className.replace(/\s*i_current\s*/,' ');
		navs[i].className=navs[i].className.replace(/\s*i_back\s*/,' ');
	}
	g('#nav_'+n).className+=' i_current ';
	for(var i=0;i<_photo.length;i++){
		if(!/photo_center/.test(_photo[i].className)){
			_photo[i].addEventListener('mouseover',toScaleBig,false);
			_photo[i].addEventListener('mouseout',toScaleSmall,false);
		}
	}
}
function toScaleBig(){
	this.style['-webkit-transform']='scale(1)';
}
function toScaleSmall(){
	this.style['-webkit-transform']='scale(0.8) rotate('+random([-150,150])+'deg)';
}
//6、计算左右区域的范围。
function calRange(){
	var range={left:{x:[],y:[]},right:{x:[],y:[]}};
	var wrap={
		w:g('#wrap').clientWidth,
		h:g('#wrap').clientHeight
	}
	var photo={
		w:g('.photo')[0].offsetWidth,
		h:g('.photo')[0].offsetHeight
	}
	range.wrap=wrap;
	range.photo=photo;

	range.left.x=[-photo.w,wrap.w/2-photo.w];
	range.left.y=[-photo.h,wrap.h];

	range.right.x=[wrap.w/2+photo.w/2,wrap.w];
	range.right.y=[-photo.h,wrap.h];
	return range;
}

window.onload=function(){
	
	addPhotos();
	
}


	

