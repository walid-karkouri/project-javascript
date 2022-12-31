var courses = [
  {
    image: "images/javascriptDef.png",
    title: "what is javascript?",
    category: "JS",
    price: 9.9,
  },
  {
    image: "images/htmlBasics.PNG",
    title: "basics of HTML",
    category: "HTML",
    price: 5.9,
  },
  {
    image: "images/htmlElements.png",
    title: "HTML elements and tags",
    category: "HTML",
    price: 9.9,
  },
  {
    image: "images/cssSelectors.jpg",
    title: "CSS selectors",
    category: "CSS",
    price: 69.9,
  },
  {
    image: "images/javascriptVariables.png",
    title: "variables and data type of javascript",
    category: "JS",
    price: 19.9,
  },
  {
    image: "images/javascriptOperators.png",
    title: "Javascript operators and conditions",
    category: "JS",
    price: 29.9,
  },
  {
    image: "images/htmlAttrVal.jpg",
    title: "HTML attributes and values",
    category: "HTML",
    price: 19.9,
  },
  {
    image: "images/cssProperties.png",
    title: "CSS properties",
    category: "CSS",
    price: 29.9,
  },
  {
    image: "images/javascriptObjects.png",
    title: "Javascript objects and arrays",
    category: "JS",
    price: 39.9,
  },
  {
    image: "images/cssMesures.png",
    title: "mesures and unites of CSS",
    category: "CSS",
    price: 19.9,
  },
  {
    image: "images/cssAnimation.png",
    title: "CSS animations",
    category: "CSS",
    price: 19.9,
  },
  {
    image: "images/javascriptFunctions.png",
    title: "The basics of javascript",
    category: "JS",
    price: 29.9,
  },
  {
    image: "images/javascriptEvents.png",
    title: "javascript events",
    category: "JS",
    price: 59.9,
  },
  {
    image: "images/cssColors.png",
    title: "css colors",
    category: "CSS",
    price: 29.9,
  },
  {
    image: "images/phpBasics.png",
    title: "getting started with php",
    category: "php",
    price: 15.9,
  },
  {
    image: "images/javascriptFunctions2.png",
    title: "functions and loops with javascript",
    category: "JS",
    price: 19.9,
  },
  {
    image: "images/phpDataBase.png",
    title: "connecting to database using PHP",
    category: "php",
    price: 29.9,
  },
  {
    image: "images/phpCRUD.png",
    title: "manipulating crud using php",
    category: "php",
    price: 45.9,
  },
  {
    image: "images/javascriptDOM.png",
    title: "DOM the power of javascript",
    category: "JS",
    price: 23.9,
  },
  {
    image: "images/javascriptDOM.png",
    title: "Groupe3",
    category: "G3",
    price: 10,
  },
];


var courseContent = document.querySelector(".courses");
const searching = document.querySelector('#search-box');

function getCourses(path, title, price, category) {

  let div = document.createElement("div");
  div.setAttribute("class", "card col-3 me-2 mb-2 " + category);
  let img = document.createElement("img"),
    p = document.createElement("p"),
    span = document.createElement("span");
  img.src = path;
  img.setAttribute("class", "card-img");
  let contenu = document.createTextNode(title);
  p.appendChild(contenu);
  p.setAttribute("class", "card-tilte");
  let contenu2 = document.createTextNode(price);
  span.appendChild(contenu2);
  span.setAttribute("class", "card-text");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(span);
  courseContent.append(div);
}
courses.forEach(function (element) {
  getCourses(element.image, element.title, element.price, element.category);
});


/*Filter Script */
const filterBy = async (filterElement) => {
  const elements = document.querySelectorAll(".card");
  /*if user select 'all' we show all elements and break the function */
  if (filterElement == "all") {
    for(const element of all){
        element.classList.remove('hide');
    }
    return 0; 
  }
  //select all elements except those containing filter class //
  const deletedElements = document.querySelectorAll(
    ".card:not(." + filterElement + ")"
  );
  //select elements that contains filter class //
  const filtered = document.querySelectorAll("." + filterElement);

  //Show all hidden elements */
  for (const element of elements) {
    element.classList.remove("hide");
  }
  //hide all elements except those containing filter class //
  for (const element of deletedElements) {
    element.classList.add("hide");
  }
  //only show elements that have filter class //
  for (const element of filtered) {
    element.classList.remove("hide");
  }
  
};
/*End of Filter Script */

/*Start Of Search Box */

const searchMethod = () => {
    let value = document.querySelector('#searching').value;
    let elements = document.getElementsByClassName('card');

    /* Make search box uppercase and without space */
    value = value.trim().toUpperCase()
    for (i = 0; i < elements.length; i++) { 
        /*hide element if it's not fit in the search box */
        if (!elements[i].innerHTML.toUpperCase().includes(value)) {
            elements[i].style.display="none";
        }
        /* keep everything else */
        else {
            elements[i].style.display="";                 
        }
    }
    
}

/*End of Search box */

/*Start of range price */

/* get maximum & Minimum Price */
let maxCourse = courses.reduce((max, course) => max.price > course.price ? max : course);
let minCourse = courses.reduce((min, course) => min.price < course.price ? min : course);


const rangeSlider = document.querySelector('#priceRange');
rangeSlider.setAttribute('min', minCourse.price);
rangeSlider.setAttribute('max', maxCourse.price);

/* Start of range filter functionality */
function updateRange() {
    const elements = document.querySelectorAll(".card span");
    document.querySelector('small').textContent = 'Value: ' + rangeSlider.value;
    elements.forEach((element) => {
        if(element.innerText > rangeSlider.value) {
            //Hide all elements greater than range slider value */
            element.parentElement.classList.add('hide');
        }else {
            //Show everything else
            element.parentElement.classList.remove('hide');
        }
    });

  }
  /*End of range filter functionality */



  

/*End Of range price */


