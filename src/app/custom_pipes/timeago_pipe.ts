import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name:    'timeago'
})

export class TimeAgoPipe    implements    PipeTransform    {
    transform(date_time: any): string    {
        if (date_time == null || date_time == undefined) {
            return date_time;
        }
        else {
            let splitAtTimeZone = date_time.split(".");
            let dateInUtc = splitAtTimeZone[0] + '.000Z';
            let date = new Date(dateInUtc);
            let currentDate: any = Math.round(+new Date()/1000);
            let postDate: any = Math.round(+date/1000); 
            //alert(tweetDate);
            let diffTime: any = currentDate - postDate;
            //alert(diffTime);
            if (diffTime < 59) { 
                return 'Just now';
            }
            else if(diffTime > 59 && diffTime < 120) {
                return '1 min';
            }
            else if(diffTime >= 121 && diffTime <= 3600) {
                let division: any = diffTime / 60;
                return parseInt(division).toString() + ' mins';
            }
            else if(diffTime > 3600 && diffTime < 7200) {
                return '1 hr';
            }
            else if(diffTime > 7200 && diffTime < 86400) {
                let division: any = diffTime/3600;
                return parseInt(division).toString() + ' hrs';
            }
            /*else if(diffTime > 86400 && diffTime < 172800) {
                let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
                let am_pm = date.getHours() >= 12 ? "PM" : "AM";
                let new_hours = hours < 10 ? "0" + hours : hours;
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let time = new_hours + ":" + minutes + am_pm;
                return 'Yesterday at ' + time;
            }*/
            else if(diffTime > 86400 && diffTime < 604800) {
                /*let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
                let am_pm = date.getHours() >= 12 ? "PM" : "AM";
                let new_hours = hours < 10 ? "0" + hours : hours;
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let time = new_hours + ":" + minutes + am_pm;
                let weekday = new Array(7);
                weekday[0] =  "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thu";
                weekday[5] = "Fri";
                weekday[6] = "Sat";

                let n = weekday[date.getDay()]; 
                return n + ' at ' + time*/
                let division: any = diffTime / 86400;
                return parseInt(division).toString() + ' days';
            }
            else if(diffTime > 604800 && diffTime < 31570560) {
                /*let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
                let am_pm = date.getHours() >= 12 ? "PM" : "AM";
                let new_hours = hours < 10 ? "0" + hours : hours;
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let time = new_hours + ":" + minutes + am_pm;*/
                let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];
                // return monthNames[date.getMonth()] + ' ' + date.getDate() + ' at ' + time;
                return monthNames[date.getMonth()] + ' ' + date.getDate();
            }
            else if(diffTime > 31570560) {
                /*let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
                let am_pm = date.getHours() >= 12 ? "PM" : "AM";
                let new_hours = hours < 10 ? "0" + hours : hours;
                let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                let time = new_hours + ":" + minutes + am_pm;*/
                let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];
                //return monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + time;
                return monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
            }
        }
    }
}