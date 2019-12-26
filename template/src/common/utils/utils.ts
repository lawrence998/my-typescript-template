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