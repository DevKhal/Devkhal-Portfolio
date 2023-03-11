const projects = document.querySelectorAll('.project');

/*projects.forEach(function(elem) {
	elem.addEventListener('mouseover', function(e) {
		projects.forEach(function(item) {
			if (item != elem) {
					item.style.opacity = '0.3';	
			}
		});
	});
});
	
projects.forEach(function(elem) {
	elem.addEventListener('mouseout', function(e) {
		projects.forEach(function(item) {
			if (item != elem) {
					item.style.opacity = '1';	
			}
		});
	});
});
*/

window.addEventListener('scroll', function(e) {
	projects.forEach(function(elem) {
		if (window.scrollY >= 30) {
			elem.classList.add('come-in');
			elem.classList.add('fade-in');
    } else {
			elem.classList.remove('come-in');
			elem.classList.remove('fade-in');
    }    
  });  
});

const para = document.querySelector('p');

window.addEventListener('scroll', function() {
	if(window.scrollY >= 30) {
		para.classList.add('fadeInDown');
	} else {
		para.classList.remove('fadeInDown');
	}
});
/*
var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "gray", "lightgray", "silver"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

*/
