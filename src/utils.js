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
