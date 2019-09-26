/**自定义添加的js**/
$(function () {
	$("#button0").click(function(e){
		var name=$("input[ name='name' ] ").val();
		var email=$("input[ name='email' ] ").val();
		var phone=$("input[ name='phone' ] ").val();
		var address=$("input[ name='address' ] ").val();
		var info=$("#textareaInfo").val();
		location="mailto:624020295@qq.com?subject=脐橙业务咨询&cc=sawshaw@163.com&subject=test&body=我的姓名："+name+"我的电话："+phone+";我的地址："+address+"我的留言:"+info;
		});
	$('.imglistTogCon w1100').removeAttr('onclick');
})