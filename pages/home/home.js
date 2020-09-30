var elements = document.getElementsByClassName("materia");

var materiadict ={
"MAT-132": 0,
"MAT-123": 0,
"SIS-111": 0,
"IMT-141": 0,
"CAR-109": 0,
"MAT-133": 0,
"MAT-142": 0,
"FIS-111": 0,
"IMT-121": 0,
"SIS-112": 0,
"MAT-134": 0,
"FIS-113": 0,
"FIS-112": 0,
"IMT-122": 0,
"IMT-123": 0,
"FHC-140": 0,
"MAT-135": 0,
"IMT-211": 0,
"IND-202": 0,
"IMT-221": 0,
"IMT-241": 0,
"IMT-242": 0,
"IMT-212": 0,
"IMT-231": 0,
"IMT-243": 0,
"IMT-244": 0,
"IND-260": 0,
"FHC-240": 0,
"IMT-222": 0,
"SIS-341": 0,
"IMT-245": 0,
"IMT-246": 0,
"IMT-247": 0,
"IND-330": 0,
"IMT-311": 0,
"IMT-312": 0,
"IMT-322": 0,
"IMT-341": 0,
"IMT-344": 0,
"FHC-340": 0,
"IMT-313": 0,
"IMT-342": 0,
"IMT-343": 0,
"IND-243": 0,
"IMT-3121": 0,
"IMT-353": 0,
"IND-3301": 0,
"IMT-352": 0,
"IMT-354": 0,
}

var mc = 0;
var ma = 0;
var mf = 51;

var myFunction = function() {
    var attribute = this.id;
    if (materiadict[attribute] == 0)
      {
        document.getElementById(attribute).style.backgroundColor = "rgb(0,125,0,0.5)";
        materiadict[attribute] = 1;
        mc++;
        mf--;
        matcomp.innerHTML = mc;
        matact.innerHTML = ma;
        matfalt.innerHTML = mf;
      }
      else if (materiadict[attribute] == 1)
      {
        document.getElementById(attribute).style.backgroundColor = "#005cb27a";
        materiadict[attribute] = 2;
        ma++;
        mc--;
        matcomp.innerHTML = mc;
        matact.innerHTML = ma;
        matfalt.innerHTML = mf;
      }
      else
      {
        document.getElementById(attribute).style.backgroundColor = "rgb(249, 246, 233)";
        materiadict[attribute] = 0;
        mf++;
        ma--;
        matcomp.innerHTML = mc;
        matact.innerHTML = ma;
        matfalt.innerHTML = mf;
      }
    
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}