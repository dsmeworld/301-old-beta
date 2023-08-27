//新闻动态上下滚动方法
function t() {
	var he = $(".notice_active>ul>li").height();//找到li高
	$(".notice_active>ul").animate({
			"marginTop": "-" + he
		}, 500, function () {
			$(".notice_active>ul").css({
				"marginTop": 0
			});
			//二选一
			//复制第一个到最后一个
			$(".notice_active>ul>li").eq(0).appendTo($(".notice_active>ul")); 					      	
			//复制第一个到最后一个(多个的情况)	
			$(".notice_active_two>ul>li:eq(0),.notice_active_two>ul>li:eq(1),.notice_active_two>ul>li:eq(2)").appendTo($(".notice_active_two>ul")); 		
	});
}

//4. 触发方法
//新闻动态
var time = setInterval(function () {
	t();
},3500)
//新闻动态上下滚动

// 让空投规则模态框垂直居中
$(function(){
        // dom加载完毕
        var $m_btn = $('#modalBtn');
        var $modal = $('#myModal1');
        $m_btn.on('click', function(){
          $modal.modal({backdrop: 'static'});
        });

        // 测试 bootstrap 居中
        $modal.on('show.bs.modal', function(){
          var $this = $(this);
          var $modal_dialog = $this.find('.modal-dialog');
          // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
          $this.css('display', 'block');
          $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });
        });
});
// 让POS规则模态框垂直居中
$(function(){
        // dom加载完毕
        var $m_btn = $('#modalBtn');
        var $modal = $('#myModal2');
        $m_btn.on('click', function(){
          $modal.modal({backdrop: 'static'});
        });

        // 测试 bootstrap 居中
        $modal.on('show.bs.modal', function(){
          var $this = $(this);
          var $modal_dialog = $this.find('.modal-dialog');
          // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
          $this.css('display', 'block');
          $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });
        });
});
// POS换算比例第一次点击切换
function qiehuan1_1() {
    document.getElementById('qiehuan1_2').style.display='none';
    document.getElementById('qiehuan2_2').style.display='block';
}
//  POS换算比例第二次点击切换
 function qiehuan2_1() {
     document.getElementById('qiehuan1_2').style.display='block';
     document.getElementById('qiehuan2_2').style.display='none';
}
  // POS矿池双挖模式切换
function yy1(){
	  var a = document.getElementById('y1').style.display;
	  	console.log("y1="+a);
	  	var b = document.getElementById('y2').style.display;
	  	console.log("y2="+b);
	  	if (a == 'block') {
	  		document.getElementById('y1').style.display='none';
	  		document.getElementById('y2').style.display='block';
			document.getElementById('poszhuanhuan').innerHTML='POS&nbsp;双挖矿池';
	  	}else if( a == 'none'){
	  		document.getElementById('y1').style.display='block';
	  		document.getElementById('y2').style.display='none';
			document.getElementById('poszhuanhuan').innerHTML='POS&nbsp;普通矿池';
	  	}
}