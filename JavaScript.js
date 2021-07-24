


function KK(){ alert("Legue hasta aqui "); }

function miMatter(){
 
  var anio= document.getElementById('year_number').value;

  google.script.run
  .withSuccessHandler(actualizarInformacionMatter)
  .withFailureHandler(muestraErrorMatter)
  .showSelectMateria(anio)
}

function actualizarInformacionMatter(matter_name){
  console.log("aqui actualizo la lista bde materias");
    var select= document.getElementById('matter_name');
    select.disabled=false;
    select.options.length=0;
    matter_name.forEach(element=>{
      var option=document.createElement('option');
      option.value=element;
      option.innerHTML=element;
      select.appendChild(option);
    })
}

function muestraErrorMatter(error){}


  function miStudent(){
  var anio= document.getElementById('year_number').value;
  var letra= document.getElementById('commission_letter').value;
  var turno= document.getElementById('turn_letters').value;

  google.script.run
  .withSuccessHandler(actualizarInformacionStudent)
  .withFailureHandler(muestraErrorMatter)
  . showSelectAlumnos(anio,letra,turno)
}

function actualizarInformacionStudent(student_name){
  console.log("aqui actualizo la lista bde materias");
    var select= document.getElementById('student_name');
    select.disabled=false;
    select.options.length=0;
    student_name.forEach(element=>{
      var option=document.createElement('option');
      option.value=element;
      option.innerHTML=element;
      select.appendChild(option);
    })
}

