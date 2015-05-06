/**
 * 轮播图效果
 * @存在问题：不能通过参数指定轮播顺序、是否循环以及时间间隔，有待完善
 */
var container = $('#container');
var list = $('#list');
var buttons = $('#buttons').getElementsByTagName('span');
var prev = $('#prev');
var next = $('#next');
var index = 1;
var num = 4; //图片数量
var switching = false; // 正在切换时为true
var timer;

// 点亮小点
function showDot() {
	for (var i = 0, len = buttons.length; i < len; i++) {
		if (buttons[i].className === 'on') {
			buttons[i].className = '';
		}
	}
	buttons[index-1].className = 'on';
}

// 切换图片函数
function switchPic (offset) {
	if (offset === 0) {
		return;
	}
	switching = true;
	var time = 300; // 切换总时间
	var inter = 10; // 隔10ms切换一次
	var speed = offset/(time/inter); // 每次切换移动的长度
	var left = parseInt(list.style.left) + offset;
	// if (!circle && (left < -3600 || left > -900)) {
	// 	switching = false;
	// 	return;
	// }

	var go = function () {
		if (   (speed > 0 && parseInt(list.style.left) < left)
			|| (speed < 0 && parseInt(list.style.left) > left)) {
			list.style.left = parseInt(list.style.left) + speed + 'px';
			setTimeout(go, inter);
		}
		else {
			list.style.left = left + 'px';
			// 无限轮播
			if (left > -900) {
				list.style.left = '-3600px';
			}
			if (left < -3600) {
				list.style.left = '-900px';
			}
			switching = false;
		}
	};
	go();
}
// prev next点击切换效果
prev.onclick = function () {
	if (switching) {
		return;
	}
	if (index !== 1) {
		index = index - 1;
	}
	// else if (index === 1 && circle) {
	// 	index = num;
	// }
	else {
		index = num;
	}
	switchPic(900); 
	showDot();
}
next.onclick = function () {
	if (switching) {
		return;
	}
	if (index !== num) {
		index = index + 1;
	}
	// else if (index === num && circle) {
	// 	index = 1
	// }
	else {
		index = 1;
	}
	switchPic(-900);
	showDot();

}
// 点击小点切换
$('#buttons').onclick = function (e) {
	if (switching) {
		return;
	}
	e = e || window.e;
	var target = e.srcElement ? e.srcElement : e.target;
	if (target.nodeType === 1 && target.nodeName.toLowerCase() === 'span') {
		if (target.className !== 'on') {
			target.className = 'on';
			var myIndex = parseInt(target.getAttribute('index'));
			var offset = -900 * (myIndex - index);
			index = myIndex;
			switchPic(offset);
			showDot();
		}
	}
}
// 存在问题
// function play (or, in) {
// 	var interval = in;
// 	var order = or;
// 	if (interval === undefined) {
// 		interval = 3000;
// 	}
// 	timer = setTimeout(function () {
// 		// 向右滑动
// 		if (order === 'right') {
// 			prev.onclick();
// 		}
// 		// 向左滑动
// 		else{
// 			next.onclick();
// 		}
// 		play(order, interval);
// 	}, interval);
// }
function play () {
	var interval = 3000;
	timer = setTimeout(function () {
		// 向左滑动
		next.onclick();
		play();
	}, interval);
}
function stop () {
	clearTimeout(timer);
}

container.onmouseover = stop;
container.onmouseout = play;

window.onload = play();