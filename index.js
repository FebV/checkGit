var request = require('request');

const watchList = {
    '陈琳': 'https://api.github.com/repos/AgnesLily/daydayup',
    '翁清涛': 'https://api.github.com/repos/wengqt/everyday',
    '韩楚怡': 'https://api.github.com/repos/hcyfreedom/everydayStudy',
    '韩楚怡2th': 'https://api.github.com/repos/hcyfreedom/DailyPractice',
    '张骞': 'https://api.github.com/repos/nodepression/everydayStudy',
    '陈柳娟': 'https://api.github.com/repos/666j/DayDayUp',
}

var doneNum = 0;

function read(name, url) {
    request({
        url: url,
        headers: {
            'User-Agent': 'FebV'
        }
    }, function (error, response, body) {
            var json = JSON.parse(body);
            console.log(name + '  updated_at  ' + secondToTime((Date.now() - Date.parse(json.pushed_at)) / 1000) + '前');
            doneNum++;
            callback();
    });
}

for(var i in watchList) {
    var res = read(i, watchList[i]);
}

function callback() {
    if(doneNum == 6)
        console.log('finish');
}

function secondToTime(second) {
    var value = second;
    var cali = '秒';

    if (second > 60) {
        value /= 60;
        cali = '分';
    }
    if(second > 60 * 60) {
        value /= 60;
        cali = '时'
    }
    if(second > 60 * 60 * 24){ 
         value /= 24;
         cali = '天';
    }
    return value.toFixed(1) + ' ' + cali;
}