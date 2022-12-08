btn = document.getElementById("btn");

const img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1981_BMW_320_2.0_Front.jpg/1920px-1981_BMW_320_2.0_Front.jpg";
const img2 = "https://upload.wikimedia.org/wikipedia/commons/9/99/BMW_E30_front2_20080127.jpg";
const img3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/1996_BMW_316i_SE_1.6.jpg/1920px-1996_BMW_316i_SE_1.6.jpg";
const img4 = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/1998-2001_BMW_328i_%28E46%29_sedan_%282011-07-17%29_01.jpg/1920px-1998-2001_BMW_328i_%28E46%29_sedan_%282011-07-17%29_01.jpg";
const img5 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2005-2008_BMW_320i_%28E90%29_sedan_%282011-07-17%29_01.jpg/1920px-2005-2008_BMW_320i_%28E90%29_sedan_%282011-07-17%29_01.jpg";
const img6 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/2013_BMW_328i_%28F30%29_M_Sport_sedan_%282018-11-02%29_01.jpg/1920px-2013_BMW_328i_%28F30%29_M_Sport_sedan_%282018-11-02%29_01.jpg";
const img7 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2019_BMW_318d_SE_Automatic_2.0_Front.jpg/1920px-2019_BMW_318d_SE_Automatic_2.0_Front.jpg";


function changeNameNext() {
  var name = document.getElementById('bmwname');
  if (name.textContent.match("BMW E21 1975")) {
    name.textContent = "BMW E30 1982";
  } else if (name.textContent.match("BMW E30 1982")) {
    name.textContent = "BMW E36 1990";
  } else if (name.textContent.match("BMW E36 1990")) {
    name.textContent = "BMW E46 1996";
  } else if (name.textContent.match("BMW E46 1996")) {
    name.textContent = "BMW E90 2005";
  } else if (name.textContent.match("BMW E90 2005")) {
    name.textContent = "BMW F30 2011";
  } else if (name.textContent.match("BMW F30 2011")) {
    name.textContent = "BMW G20 2019";
  }
}
function changeNamePrevious() {
  var name = document.getElementById('bmwname');
  if (name.textContent.match("BMW E30 1982")) {
    name.textContent = "BMW E21 1975";
  } else if (name.textContent.match("BMW E36 1990")) {
    name.textContent = "BMW E30 1982";
  } else if (name.textContent.match("BMW E46 1996")) {
    name.textContent = "BMW E36 1990";
  } else if (name.textContent.match("BMW E90 2005")) {
    name.textContent = "BMW E46 1996";
  } else if (name.textContent.match("BMW F30 2011")) {
    name.textContent = "BMW E90 2005";
  } else if (name.textContent.match("BMW G20 2019")) {
    name.textContent = "BMW F30 2011";
  }
}

function changeImageNext() {
  var image = document.getElementById('myImage');
  if (image.src.match(img1)) {
      image.src = img2;
      changeNameNext();
  }
  else if (image.src.match(img2)) {
      image.src = img3;
      changeNameNext();
  }
  else if (image.src.match(img3)) {
      image.src = img4;
      changeNameNext();
  }
  else if (image.src.match(img4)) {
      image.src = img5;
      changeNameNext();
  }
  else if (image.src.match(img5)) {
      image.src = img6;
      changeNameNext();
  }
  else if (image.src.match(img6)) {
      image.src = img7;
      changeNameNext();
  }
}

function changeImagePrevious() {
  var image = document.getElementById('myImage');
  if (image.src.match(img2)) {
      image.src = img1;
      changeNamePrevious();
  }
  else if (image.src.match(img3)) {
      image.src = img2;
      changeNamePrevious();
  }
  else if (image.src.match(img4)) {
      image.src = img3;
      changeNamePrevious();
  }
  else if (image.src.match(img5)) {
      image.src = img4;
      changeNamePrevious();
  }
  else if (image.src.match(img6)) {
      image.src = img5;
      changeNamePrevious();
  }
  else if (image.src.match(img7)) {
      image.src = img6;
      changeNamePrevious();
  }
}