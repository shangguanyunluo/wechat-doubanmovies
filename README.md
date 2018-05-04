# wechat-doubanmovies

微信小程序访问豆瓣电影API 403 400

解决方法
nginx做代理，并改变请求的Referer和User-Agent头部信息

        location / {
	    proxy_pass http://localhost:8080/;
	 }
	location  /v2/ {
	    proxy_store off;
	    proxy_redirect off;
	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	    proxy_set_header X-Real-IP $remote_addr;
	    proxy_set_header Referer 'no-referrer-when-downgrade';
	    proxy_set_header User-Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';
	    proxy_connect_timeout 600;
	    proxy_read_timeout 600;
	    proxy_send_timeout 600;
	    proxy_pass https://api.douban.com/v2/;

	}

配置完之后，请求豆瓣的api的url应该变为http://hostname/v2/....

就是在原来请求豆瓣API的基础上将api.douban.com换为你自己的域名。

-------------------------------------------------------

之后如果遇到400错误，请查看请求头是否是：

wx.request({
      url: 'http://localhost/v2/movie/top250',
      data: {
        
      },
      header: {  
        "Content-Type":"application/json"
      },
      success: function (res) {
        console.log(res)
      }
原来是开发工具升级后，请求的header的Content-type写法变了(我现在使用的开发工具版本为0.11)，需要改为：

header:{
    "Content-Type":"json"
},

这样就可以正常请求了
