/**
 * [removeCookie 获取cookie]
 * @param name cookie名称
 */
export function getCookie(name: string): string {
    var arr = document.cookie.split(';');
    for (var i = 0; i < arr.length; i++) {
        var match = arr[i].match(/^([^=]*)=(.*)$/);
        if(!match){
            continue;
        }
        if(match[1].trim() == name){
            return decodeURIComponent(match[2]);
        }
    }
    return '';
};

/**
 * [setCookie 设置cookie]
 * @param {[type]} name  [名称]
 * @param {[type]} value [设置的值]
 * @param {[type]} days  [日期]
 */
export function setCookie(name:string, value:string, days:number):void {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}