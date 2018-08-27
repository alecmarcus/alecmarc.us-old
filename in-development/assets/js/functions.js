////++++++++++++++++//
///Parallax Related//
//++++++++++++++++//
const fragments = document.querySelectorAll(".fragment-wrapper");
const colorBlocks = document.querySelectorAll(".color-block")

function posData(el) {
  let fragRect = el.getBoundingClientRect();
  let fragTop = fragRect.top;
  let threshold = 150;
  let distance = Math.round(fragTop - threshold);
  let offset = Math.round(distance * 0.5);
  let values = [distance, offset];
  return values;
}

function fragParallax(el) {
  let values = posData(el);
  distance = values[0];
  offset = values[1];
  if (distance >= 0) {
    el.style.transform = "translate3D(0," + offset + "px,0)";
  } else {
    el.style.transform = "translate3D(0,0,0)";
  }
}

function blockParallax(el) {
  let values = posData(el);
  distance = values[0];
  offset = Math.round(values[1] / 3);
  if (distance >= 0) {
    el.style.transform = "translate3D(0," + offset + "px,0)";
  } else {
    el.style.transform = "translate3D(0,0,0)";
  }
}

function renderParallax() {
  fragments.forEach(fragParallax);
  colorBlocks.forEach(blockParallax);
  window.requestAnimationFrame(renderParallax);
}

////--------------------//
///End Parallax Related//
//--------------------//

////+++++++++++++++//
///Project Related//
//+++++++++++++++//

// Initiate letiable to check if undefined while loading (otherwise it's 'not defined')
let projects_JSON

function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
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

function renderPreviews() {
  if (!projects_JSON) {
    setTimeout(renderPreviews, 100)
  } else {
    const previewContainer = document.getElementById("projectPreviews")
    for (project in projects_JSON) {
      let thisProj = projects_JSON[project]
      let pID = project
      let pImgSrc = "assets/img/" + pID + "/" + thisProj.feature
  
      //Create container
      const newProjectPreview = document.createElement("a")
      newProjectPreview.className = "preview"
      newProjectPreview.setAttribute("href", "#" + pID)
      newProjectPreview.style.backgroundImage = "url('" + pImgSrc + "')"
  
      // Create title
      const newProjectTitle = document.createElement("span")
      newProjectTitle.className = "project-name"
      newProjectTitle.innerText = thisProj.name

      // Create summary
      const newProjectSummary = document.createElement("p")
      newProjectSummary.className = "project-summary"
      newProjectSummary.innerText = thisProj.brief

      // Create images
      let projectImgs = new Array()
      for (let [index, img] of thisProj.imgs.entries()) {
        const imgElt = document.createElement("img")
        let src = "assets/img/" + pID + "/" + img
        imgElt.src = src
        projectImgs.push(imgElt)
      }

      // projectImgs = thisProj[imgs].forEach( function(imgName) {
      //   const img = document.createElement("img")
      //   let src = "assets/img/" + pID + "/" + imgName
      //   projImg.src = src
      // })

      // Assemble HTML & add to document
      previewContainer.appendChild(newProjectPreview)

      // Listen for click, assemble feature
      newProjectPreview.addEventListener("click", function() {
        const projFeature = document.createElement("section")
        projFeature.id = "projectFeature"
        projFeature.appendChild(newProjectTitle)
        projFeature.appendChild(newProjectSummary)
        projectImgs.forEach(function(img) {
          projFeature.appendChild(img)
        })
        previewContainer.appendChild(projFeature)
        console.log("did the thing")
      })
    }
  }
}

////-------------------//
///End Project Related//
//-------------------//

////+++++++++++++//
///Hover Related//
//+++++++++++++//

function buildProjectList() {
  if (!projects_JSON) {
    setTimeout(buildProjectList, 100)
    return;
  }
  let projIds = Object.keys(projects_JSON)
  return projIds;
}

function activateColorBlocks() {
  let projIds = buildProjectList()
  if (!projIds) {
    setTimeout(activateColorBlocks, 100)
    return;
  }
  const projectViewWrapper = document.getElementById("projectViewWrapper")
  let previewData = new Array()
  for (let [index, el] of colorBlocks.entries()) {
    // (IGNORE) If I wanted to iterate over blocks to add scale change event listeners
    // scaleControl(el)
    let projId = projIds[index]
    const correspProj = document.querySelector("[href='#" + projId + "']")
    previewData.push(correspProj)
    el.addEventListener("mouseover", function () {
      previewData[index].classList.add("visible")
      projectViewWrapper.classList.add("visible")
    })
    el.addEventListener("mouseout", function () {
      previewData[index].classList.remove("visible")
      projectViewWrapper.classList.remove("visible")
    })
  }
}

////-----------------//
///End Hover Related//
//-----------------//


////+++++++++++++++++++//
///Block Scale Related//
//+++++++++++++++++++//

// function scaleControl(block) {
//   document.addEventListener("mousemove", function (event) {
//     let rect = block.getBoundingClientRect();
//     let x = event.clientX - rect.x; //x position within the element.
//     let y = event.clientY - rect.y; //y position within the element.
//     let avgDist = Math.abs(Math.round((x + y) / 20))
//     // console.log(x)
//     // console.log("x: " + x + ", y: " + y)
//     // console.log(avgDist)
//     // return avgDist;
//     window.requestAnimationFrame(function () {
//       block.style.scale = avgDist
//     })
//   })
// }

////-------------------//
///Block Scale Related//
//-------------------//

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    init()
    renderPreviews()
    renderParallax()
    activateColorBlocks()
  })
} else {
  init()
  renderPreviews()
  renderParallax()
  activateColorBlocks()
}
