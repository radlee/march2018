var moveActive = function(from, to) {
    var taxi = document.querySelector('.active');
    taxi.classList.remove(from);
    taxi.classList.add(to);
};
