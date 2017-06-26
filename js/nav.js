document.addEventListener('DOMContentLoaded', function(e){
  let nav = document.getElementById('Navigation');
  let navOptions = Array.prototype.slice.call(nav.children[1].children);
  let navBtn = nav.children[0];

  navBtn.addEventListener('click', function(e){
    navOptions.forEach(function(val, it){
      if(val.classList.contains('nav-collapsed'))
        val.classList.remove('nav-collapsed');
      else
        val.classList.add('nav-collapsed');
    });
  });
});
