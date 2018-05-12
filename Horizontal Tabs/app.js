document.getElementById('tabs').addEventListener('click', function(e) {
    const city = e.target.dataset.city;
    if(!city) return;

    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(content => content.classList.remove('active'));
    
    const tablinks = document.querySelectorAll('.tablink');  
    tablinks.forEach(link => link.classList.remove('active'));
    
    e.target.classList.add('active');
    document.getElementById(city).classList.add('active');
});