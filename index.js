const studentsElement = document.getElementById('students-count');
const coursesElement = document.getElementById('courses-count');
const mastersElement = document.getElementById('courses-count-masters');
const campusElement = document.getElementById('campus-count');

function animateCount(targetElement, start, end, duration,interval) {
    const increment = Math.ceil((end - start) / (duration / 5)); 
    let current = start;

    const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(counter);
        }
        targetElement.innerHTML = `${current}+`; 
    }, interval);
}

function startCounting() {
    animateCount(studentsElement, 0, 21000, 1000,4); 
    animateCount(coursesElement, 0, 15, 1000, 80);
    animateCount(mastersElement, 0, 5, 1000,120); 
    animateCount(campusElement, 0, 5, 1000, 120);
}


startCounting();


setInterval(startCounting, 5000); 
