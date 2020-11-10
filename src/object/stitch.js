let tag;
const Stitch = {
  elt: (txt,tag)=>{
    tag = document.body.appendChild(document.createElement(tag))
    tag.innerHTML = txt
  },
  elt_txt: (txt,tag)=>{
    tag = document.body.appendChild(document.createElement(tag))
    tag.innerText = txt
  },
  link: (txt,src)=>{
    tag = document.body.appendChild(document.createElement("a"))
    tag.innerHTML = txt
    tag.src = src
  },
  self: (tag, ...attrs)=>{
    tag = document.body.appendChild(document.createElement(tag))
  },
  attr_id: (id, ...attrs)=>{
    tag = document.getElementById(id)
    for (i in attrs) {
      tag[i.name] = i.value
    }
  },
  attr_class: (id, ...attrs)=>{
    tag = document.getElementByClassName(id)
    for (i in attrs) {
      tag[i.name] = i.value
    }
  },
  attr_tag: (id, ...attrs)=>{
    tag = document.getElementById(id)
    for (i in attrs) {
      tag[i.name] = i.value
    }
  },
  media: (media)=>{
    if (media.type && media.source) {
      tag = document.body.appendChild(document.createElement(media.type))
      tag.src = media.source
      tag.width = (media.width ? media.width : 100)
      tag.height = (media.height ? media.height : 100)
    } else {
      tag = document.body.appendChild(document.createElement("stitch-err"))
      tag.style.color = "red"
      tag.innerHTML = "<img src='https://www.kindpng.com/picc/m/179-1793342_warning-icon-svg-hd-png-download.png' width='50' height='50'>No mediatype or source specified."
    }
  }
}
