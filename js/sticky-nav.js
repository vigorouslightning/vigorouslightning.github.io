window.addEventListener('scroll', function() {
    var header = document.querySelector('.page-section-header');
    var scrollTop = parseInt(window.scrollY);
    var otherTop = parseInt(document.getElementById('mission-statement').offsetTop);
    var headerHeight = parseInt(header.offsetHeight);

    if (otherTop - scrollTop <= headerHeight + 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});