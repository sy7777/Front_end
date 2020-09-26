// 可以依次赋值
        // let [user1, user2, user3] = ["老王", "老李", "老陈"];

        // 输出老李,老陈,隔壁老王
        // let [user1, user2, user3= "隔壁老王"]  = [ "老李", "老陈"];
        
        // 老李,老陈,隔壁老王
        // let [user1, user2, user3= "隔壁老王"]  = [ "老李", "老陈",undefined];
        
        // 老李,老陈,null, 因为null是值
        let [user1, user2, user3= "隔壁老王"]  = [ "老李", "老陈", null];
        console.log(`${user1},${user2},${user3}`);

        var user = {
            name:"BOB",
            type:"ladyboy",
            like:"sing"
        }

        var{name,type,like} = user;
        console.log(`${name},${type},${like}`);
