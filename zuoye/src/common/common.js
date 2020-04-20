let obj={
  getCookie:function (name){
        var arr=document.cookie.split('; ');

        for(var i=0;i<arr.length;i++){
          var Arr=arr[i].split('=');

          if(name==Arr[0]){
            return Arr[1];
          }
        }
  },
  delCookie:function (name){
    obj.setCookie(name,'ccc',-3)
  },
  setCookie:function (name,value,iDay){
      var oDate=new Date();
      oDate.setDate(oDate.getDate()+iDay);
      document.cookie=`${name}=${value}; expires=${oDate}; path=/`;
  },
  toEval:function(s){
      return eval(`(${s})`);
  },
  toDou:function(n){
      return n<10?'0'+n:''+n;
  },
  toTime:function(t){


      var oDate=new Date();
      oDate.setTime(t*1000);
      var iY=oDate.getFullYear();
      var iM=obj.toDou(oDate.getMonth()+1);
      var iD=obj.toDou(oDate.getDate());

      var iH=obj.toDou(oDate.getHours());
      var iMin=obj.toDou(oDate.getMinutes());
      var iS=obj.toDou(oDate.getSeconds());

      return `${iY}-${iM}-${iD} ${iH}:${iMin}:${iS}`;
  }
};

export default obj;
