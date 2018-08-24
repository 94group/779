/* eslint-disable */
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
		content = JSON.stringify(content)
	}
	window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return
	return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return
	window.localStorage.removeItem(name)
}

/*
    cookie操作
 */
export const setCookie = (key, iDay) => {
  let oDate = new Date();
  let value = 'utj321e7f3391jrqfikom951u6'
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = key + '=' + value + ';expires=' + oDate;

}
export const removeCookie = (key) => {
  setCookie(key, '', -1);//这里只需要把Cookie保质期退回一天便可以删除
}
export const getCookie = (key) => {
  var cookieArr = document.cookie.split('; ');
  for(var i = 0; i < cookieArr.length; i++) {
      var arr = cookieArr[i].split('=');
      if(arr[0] === key) {
          return arr[1];
      }
  }
  return false;
}