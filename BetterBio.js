console.log('BetterBio.js loaded');
Array.prototype.insert = function (index, ...items) {
    this.splice(index, 0, ...items);
}; // https://stackoverflow.com/a/12710609
[].slice.call(document.getElementsByClassName('list-group')).forEach(function (el) { // get all list-group elements
    var order = {};
    var children = [].slice.call(el.children);
    children.forEach(function (child) { // get all items elements
        var date = child.getElementsByClassName('badge')[0].innerText;
        date = date.trim() // remove whitespace
        if (order[date] === undefined) {
            order[date] = [];
        }
        order[date].push(child); // add item to date
    });
    el.innerHTML = '';
    var order_key = Object.keys(order).sort(); // sort dates
    var i = 0;
    var h = 1;
    order_key.forEach(function (key) {
        order[key].forEach(function (child) {
            var img = document.createElement('img'); // create rank image
            img.src = 'img/rank' + i + '.png';
            var d = document.createElement('img'); // create image for spacing
            d.src = 'img/rank3.png';
            child.innerHTML = img.outerHTML + h + d.outerHTML + child.innerHTML; // add rank image to item
            el.appendChild(child);
            h++; // increment rank
            if (i < 3) {
                i++; // increment rank image
            }
        });
    });

});
