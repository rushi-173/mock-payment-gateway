export function getDeviceType() {
	if (/Android/i.test(navigator.userAgent)) {
		return "android";
	} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		return "ios";
	} else {
		if (/Mac/i.test(navigator.userAgent)) {
			return "mac";
		}
		return "other";
	}
}

export function validateMobile(num) {
	var phoneno = /^\d{10}$/;
	if (num.match(phoneno)) {
		return true;
	} else {
		return false;
	}
}
