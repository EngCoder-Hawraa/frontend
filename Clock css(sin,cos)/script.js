/* to set current time */
const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
app.style.setProperty('--_dm', `${mins}s`);
app.style.setProperty('--_dh', `${(hour+mins)}s`);


// Window Size and Dimensions
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

// Window Location
console.log(window.location);
console.log(window.location.href);
// console.log(window.location.reload());

// Window History
console.log(window.history);
console.log(window.history.back());
console.log(window.history.forward());

// Window Navigator
console.log(window.navigator);

// Window Timers
// console.log(window.setTimeout(function, delay));
// console.log(window.setInterval(function, interval));

// Window Popup and Alerts
// console.log(window.alert(message));
// console.log(window.confirm(message));
// console.log(window.prompt(message, default));

// Window Opening and Closing
// console.log(window.open(url, name, specs));
// console.log(window.close());


// Window Screen


console.log(window.navigator.userAgent);
console.log(window.navigator.userAgent);