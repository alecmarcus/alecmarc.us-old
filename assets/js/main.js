function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'assets/js/projects.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init() {
  loadJSON(function (response) {
    projects_JSON = JSON.parse(response);
  });
}

document.addEventListener("DOMContentLoaded", function () {

  //call the function that gets the JSON file
  init()

  var projectLinks = document.querySelectorAll('li.project-link')
  projectLinks.forEach(function (link) {
    var projectId = link.getAttribute('project')
    link.addEventListener('click', function () {
      updateView(projectId)
    })
  })

  var lgViewBtn = document.getElementById('largeView')
  var smViewBtn = document.getElementById('smallView')
  lgViewBtn.addEventListener('click', function () {
    focusedProject.classList.add('lg-view')
  })
  smViewBtn.addEventListener('click', function () {
    focusedProject.classList.remove('lg-view')
  })

});

function updateView(projectName) {
  if (!projects_JSON) {
    setTimeout(updateView, 1000)
    return;
  }
  var projId = projectName
  var activeProj = projects_JSON[projId]
  document.getElementById('name').innerHTML = activeProj.name
  document.getElementById('client').innerHTML = activeProj.client
  document.getElementById('time').innerHTML = activeProj.time
  document.getElementById('scope').innerHTML = activeProj.scope
  document.getElementById('brief').innerHTML = activeProj.brief

  if (activeProj.vids) {
    activeProj.vids.forEach(function (vidName) {
      var newVid = document.createElement("video");
      newVid.autoplay = true;
      newVid.controls = false;
      newVid.loop = true;
      newVid.src = 'assets/img/' + projId + '/' + vidName
      document.getElementById('projVis').appendChild(newVid)
      newVid.addEventListener('click', function () {
        var lbContainer = document.createElement('div')
        var lbVid = document.createElement('video')
        lbVid.src = this.src
        lbVid.autoplay = true;
        lbVid.controls = false;
        lbVid.loop = true;
        lbContainer.appendChild(lbVid)
        lbContainer.setAttribute('id', 'lightbox')
        document.body.classList.add('lightboxed')
        document.body.appendChild(lbContainer)

        lbContainer.addEventListener('click', function () {
          lbContainer.parentNode.removeChild(lbContainer)
          document.body.classList.remove('lightboxed')
        });
      });
    });
  }

  activeProj.imgs.forEach(function (imgName) {
    var newImg = document.createElement("img");
    newImg.src = 'assets/img/' + projId + '/' + imgName
    document.getElementById('projVis').appendChild(newImg)
    if (this.info) {
      var infoP = document.createElement("p")
      infoP.classList.add(projId + 'info-' + [i])
      infoP.textContent = info
    }

    newImg.addEventListener('click', function () {
      var lbContainer = document.createElement('div')
      var lbImg = document.createElement('img')
      lbImg.src = this.src
      lbContainer.appendChild(lbImg)
      lbContainer.setAttribute('id', 'lightbox')
      document.body.classList.add('lightboxed')
      document.body.appendChild(lbContainer)

      lbContainer.addEventListener('click', function () {
        lbContainer.parentNode.removeChild(lbContainer)
        document.body.classList.remove('lightboxed')
      });
    });
  });

  var navArrow = document.createElement("span")
  navArrow.innerHTML = '→';

  document.getElementById('focusedProject').classList.remove('inactive');
  projectsNav.classList.add('isActive');
  document.querySelector('#projectsNav h1').appendChild(navArrow);
  document.querySelector('#projectsNav h1').setAttribute('projectName', activeProj.name);
  document.querySelector('#projects div.content').classList.add('inactive');
}

function resetView() {
  document.getElementById('focusedProject').classList.add('inactive');
  document.getElementById('projectsNav').classList.remove('isActive');
  document.querySelector('#projects div.content').classList.remove('inactive');
  while (document.getElementById('projVis').lastChild) {
    document.getElementById('projVis').removeChild(document.getElementById('projVis').lastChild);
  };
  document.querySelector('#projectsNav h1').removeChild(document.querySelector('#projectsNav h1').lastChild);
}

document.getElementById('projectsNav').onclick = function () {
  if (this.classList.contains('isActive')) {
    resetView()
  } else {
    this.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
