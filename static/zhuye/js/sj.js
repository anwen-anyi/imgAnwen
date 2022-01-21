function siteTime() {
    window.setTimeout("siteTime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth()
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    var t1 = Date.UTC(2019, 10, 01, 00, 00, 00)
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds)
    document.getElementById("sitetime").innerHTML = "" + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒"
}
/*document.getElementById("sitetime").innerHTML=""+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒"}*/
siteTime()

console.log("\n %c   主页| 三生三世安安稳稳,婷婷玉立花落花开. | https://www.zytllt.cn/", "color:#fff;background: #006eff;padding:5px;border-radius: 10px;");
console.log("\n %c   博客| 三生三世安安稳稳,婷婷玉立花落花开. | https://blog.zytllt.cn/", "color:#fff;background: #006eff;padding:5px;border-radius: 10px;");
console.log("\n %c   云盘| 三生三世安安稳稳,婷婷玉立花落花开. | https://cloud.zytllt.cn/", "color:#fff;background: #006eff;padding:5px;border-radius: 10px;");
console.log("%c\n   ","font-size:150px;background:url('https://cdn.jsdelivr.net/gh/anwen-anyi/imgAnwen/images/ico.png') no-repeat 0 0");
