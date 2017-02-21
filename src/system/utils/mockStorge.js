const Watch = require('watchjs');

export default function mockStorge(name, defaultValue) {
    let key = "sjgy" + name
    global[key] = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : defaultValue
    !localStorage.getItem(key) && localStorage.setItem(key, JSON.stringify(global[key]))
    Watch.watch(global[key], function() {
        localStorage.setItem(key, JSON.stringify(global[key]))
    })
    return key
}
