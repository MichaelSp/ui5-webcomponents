const themeChangeCallbacks = [];

export const attachThemeChange = function attachThemeChange(callback) {
	if (themeChangeCallbacks.indexOf(callback) === -1) {
		themeChangeCallbacks.push(callback);
	}
};

export const setTheme = function setTheme(theme) {
	if (theme === configuration.getTheme()) {
		return;
	}

	configuration._setTheme(theme);
	themeChangeCallbacks.forEach(callback => callback(theme));
};
