var canvas1 = document.querySelector("#canvas1");
        var cxt = canvas1.getContext("2d");
        cxt.font = "40px Times";
        function renderClock() {
            // 清除内容
            cxt.clearRect(0, 0, 800, 600);
            cxt.save();
            //移动translate会将整个坐标尺进行移动,移动到中央
            cxt.translate(400, 300);
            cxt.rotate(-2 * Math.PI / 4)
            cxt.save();

            // 绘制表盘
            cxt.beginPath();
            cxt.arc(0, 0, 200, 0, 2 * Math.PI);
            cxt.strokeStyle = "darkgrey";
            cxt.lineWidth = 10;
            cxt.stroke();
            cxt.closePath();

            // 绘制分钟刻度
            for (var j = 0; j < 60; j++) {
                cxt.rotate(Math.PI / 30);
                cxt.beginPath();
                cxt.moveTo(180, 0);
                cxt.lineTo(190, 0);
                cxt.strokeStyle = "orangered";
                cxt.lineWidth = 2;
                cxt.stroke();
                cxt.closePath();
            }
            cxt.restore();
            cxt.save();

            // 绘制时钟刻度
            for (var i = 0; i < 12; i++) {
                cxt.rotate(Math.PI / 6);
                cxt.beginPath();
                cxt.moveTo(170, 0);
                cxt.lineTo(200, 0);
                cxt.strokeStyle = "darkgrey";
                cxt.lineWidth = 7;
                cxt.stroke();
                cxt.closePath();

                cxt.fillText(i+1, 140, 10);
                // cxt.save()
                // cxt.translate(-400, -300);
                // cxt.fillStyle = "blue";
                // cxt.fillRect(100,100,300,100);
                // cxt.fillStyle = "pink";
                // cxt.fillRect(0,0,100,100);
            }
            cxt.restore();
            cxt.save();


            var time = new Date();
            var hour = time.getHours();
            var min = time.getMinutes();
            var sec = time.getSeconds();

            //   如果时间大于12?减去12:否则就是hour
            hour = hour > 12 ? hour - 12 : hour;

            // 绘制秒针
            // for (var i = 0; i < 12; i++) {

            cxt.beginPath();
            // 根据秒针时间进行旋转
            console.log(hour + ":" + min + ":" + sec)
            cxt.rotate(2 * Math.PI / 60 * sec)
            cxt.moveTo(-30, 0);
            cxt.lineTo(170, 0);
            cxt.strokeStyle = "red";
            cxt.lineWidth = 2;
            cxt.stroke();
            cxt.closePath();
            cxt.restore();
            cxt.save();
            //   }

            // 绘制fen针
            cxt.beginPath();
            // 根据分针进行旋转
            cxt.rotate(2 * Math.PI / 60 * min + 2 * Math.PI / 3600 * sec)
            cxt.moveTo(-20, 0);
            cxt.lineTo(150, 0);
            cxt.strokeStyle = "darkblue";
            cxt.lineWidth = 4;
            cxt.stroke();
            cxt.closePath();
            cxt.restore();
            cxt.save();

            // 绘制shi针
            cxt.beginPath();
            cxt.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 60 / 12 * min + 2 * Math.PI / 12 / 60 / 60 * sec)
            cxt.moveTo(-20, 0);
            cxt.lineTo(120, 0);
            cxt.strokeStyle = "darkslategray";
            cxt.lineWidth = 6;
            cxt.stroke();
            cxt.closePath();

            // cxt.restore();
            // cxt.save();
            cxt.beginPath();
            cxt.arc(0, 0, 10, 0, 2 * Math.PI)
            cxt.fillStyle = "yellow"
            cxt.fill();
            cxt.closePath();


            cxt.restore();
            cxt.restore();

        }
        setInterval(function () {
            renderClock();
        }, 1000)