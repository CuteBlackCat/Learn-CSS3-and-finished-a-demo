var data=[];

var dataStr='1、总统府<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在总统府<br>\
带着你走着悠长的总统府<br>\
跟你在一起总是难忘的<br>\
<br>\
<br>\
2、中山陵<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在中山陵<br>\
顶着炎炎夏日<br>\
我们却很开心<br>\
<br>\
<br>\
3、秦淮河<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在秦淮河<br>\
那是我们第一次一起<br>\
游览江南水乡<br>\
<br>\
<br>\
4、夫子庙<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在夫子庙<br>\
虽然我们没有进去<br>\
但却记忆犹新<br>\
<br>\
<br>\
5、武汉长江大桥<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在武汉长江大桥<br>\
人们说<br>\
去武汉最好的回忆<br>\
就是一起走过<br>\
长江大桥<br>\
<br>\
<br>\
6、东湖<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在东湖<br>\
景虽不胜西湖<br>\
只要有你<br>\
便是人间至美<br>\
<br>\
<br>\
7、第一次吃火锅<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在湖南<br>\
我第一次吃自助火锅<br>\
我说以后再也不吃了<br>\
可是我却爱上了这味道<br>\
我说湖南我再也不想去了<br>\
可是我却很想回去<br>\
<br>\
<br>\
8、太平老街<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在太平老街<br>\
大烤肠真难吃<br>\
小西瓜很好吃<br>\
<br>\
<br>\
9、岳麓山<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在岳麓山<br>\
玩着刺激的索道<br>\
带着你爬上高峰<br>\
俯瞰橘子洲<br>\
<br>\
<br>\
10、金山<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在金山<br>\
白娘子与许仙相遇<br>\
愿我们能白头偕老<br>\
<br>\
<br>\
11、西津渡<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在西津渡<br>\
西津渡不美<br>\
还淋湿了你<br>\
<br>\
<br>\
12、瘦西湖<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在瘦西湖<br>\
我没照顾好你<br>\
带你出来玩<br>\
却只带了6块钱<br>\
让你冻的鼻涕直流<br>\
但我们却很开心<br>\
<br>\
<br>\
13、第一次吃牛排<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在湖南<br>\
我第一次吃牛排<br>\
之后再也没吃过<br>\
<br>\
<br>\
14、夜上海<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在看夜上海<br>\
调皮的你想把东方明珠抓在手中<br>\
<br>\
<br>\
15、上海南站<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在上海南站<br>\
等了很久...<br>\
<br>\
<br>\
16、西塘古镇<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在西塘古镇<br>\
冬天不怎么美<br>\
不咋好玩<br>\
<br>\
<br>\
17、西湖<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在西湖<br>\
美丽的西湖<br>\
我却没好好带你玩一次<br>\
<br>\
<br>\
18、美丽的你<br>\
<br>\
那一年<br>\
7月10日<br>\
看你多漂亮<br>\
在我心中你永远是女神<br>\
<br>\
<br>\
19、古德寺<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在古德寺<br>\
地方虽小<br>\
建筑却很靓丽<br>\
<br>\
<br>\
20、美丽的厦门<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在美丽的厦门<br>\
至今见过最美的城市<br>\
然而却被你的风采遮盖<br>\
<br>\
<br>\
21、厦门大学<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在厦门大学<br>\
人家的大学好美<br>\
<br>\
<br>\
22、鼓浪屿<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在鼓浪屿<br>\
这个小岛上很有情调<br>\
把我宝宝晒黑了<br>\
<br>\
<br>\
23、上海<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在上海外滩<br>\
可望不可及的上海~<br>\
<br>\
<br>\
24、乌镇<br>\
<br>\
那一年<br>\
7月10日<br>\
我们在美丽的乌镇<br>\
大概那时候的你很爱我<br>\
但愿一直这样<br>\
谨以此相册纪念我们逝去的三年！！！<br>\
';
var d=dataStr.split('<br><br><br>');
for(var i=0;i<d.length;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].replace('、',' ')+'.jpg',
		caption:c[0].split('、')[1],
		desc:c[1]
	});
	//console.log(c[0].replace('、',' ')+'.jpg');
}
// console.log(data.length);