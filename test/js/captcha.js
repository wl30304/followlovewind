function createCode(len)
        {
            var seed = new Array(
                    'abcdefghijklmnopqrstuvwxyz',
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    '0123456789'
            );               //創建需要的數據數組
            var idx,i;
            var result = '';   //返回的結果變量
            for (i=0; i<4; i++) //根據指定的長度
            {   
                idx = Math.floor(Math.random()*3); //獲得隨機數據的整數部分-獲取一個随機整数
                result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);//根據隨機樹獲取數據中的一個值
            }
            return result; //返回隨機结果
        }
 
        function test() {
            var inputRandom=document.getElementById("inputRandom").value;
            var autoRandom=document.getElementById("autoRandom").innerHTML;
            if(inputRandom==autoRandom||inputRandom!==null) {
                alert("註冊成功，請重新登入");
                window.location.replace("index.html");//跳轉到
            } else {
                alert("沒有通過驗證");
            }
 
        }
