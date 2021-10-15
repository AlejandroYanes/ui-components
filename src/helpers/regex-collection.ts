/* eslint-disable max-len */
export const emailRegex = /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/;

export const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[\da-z\u00A1-\uFFFF]-*)*[\da-z\u00A1-\uFFFF]+(?:\.(?:[\da-z\u00A1-\uFFFF]-*)*[\da-z\u00A1-\uFFFF]+)*\.[a-z\u00A1-\uFFFF]{2,})(?::\d{2,5})?(?:\/\S*)?$/;

// export const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}()?\-“!@#%&\/,><’:;|_~`])\S/;
// simpler password regex to accept Google suggestions
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/m;

export const userNameRegex = /^[a-z]{2}[a-z0-9]{2,14}$/m;
// instagram style names
// export const userNameRegex = /^[a-z](?!.*?_{2})(?!.*?\.{2})[a-z0-9._]{1,28}[a-z0-9]$/m;
