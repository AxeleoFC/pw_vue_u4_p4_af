import axios from "axios";

export const obtenerEstudianteFachada=async (cedula)=>{
    return await obtenerEstudianteAPI(cedula);
}

export const obtenerEstudianteAxiosFachada=async (cedula)=>{
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada=(bodyEstudiante)=>{
    ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada=(bodyEstudiante, id)=>{
    actualizarEstudiante(bodyEstudiante,id)
}

export const eliminarEstudianteFachada=(id)=>{
    eliminarEstudiante(id)
}

//Metodos

const obtenerEstudianteAPI=async (cedula)=>{
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyODM1OTE1LCJleHAiOjE2OTQwMzU5MTV9.6z8i05BsBykCzdUF03vnPKKdiBFWwpCeO0-NCjfYMYimz_87umUCWm_RQmciPsplfBDZPSX2nHDuggJ62Cl1jg",
        "Mensaje":"Valor1"
    }
    const data=await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r => r.json());
    return data;
}

const obtenerEstudianteAPIAxios=async (cedula)=>{
    // En el config vamos a enviar todas los datos de cabecera
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzUwODM5LCJleHAiOjE2OTM5NTA4Mzl9.TqpnnPKmXbbsn6HGLpT0_08bI2GHeD4TdFw1YLFCggwfzeXEm0gPuBw1ZoRfcVURxXFjy5mkLtotKPtMIUQ9IA",
        "Mensaje":"Valor1"
    }
    const data=axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);
    return data;
}

const ingresarEstudiante=(bodyEstudiante)=>{
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzUwMTMyLCJleHAiOjE2OTM5NTAxMzJ9.chGW7z3NlLiWSSGUXQ_RJf24Alz6-Xu2dp9SJPT9U5fZ8gQ_SVUst2eYgtPbrBxFlVJJSPwOZrxZz3iVgqsSug",
        "Mensaje":"Valor1"
    }
    axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`, bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const actualizarEstudiante=(bodyEstudiante, id)=>{
    console.log(bodyEstudiante)
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzUwODM5LCJleHAiOjE2OTM5NTA4Mzl9.TqpnnPKmXbbsn6HGLpT0_08bI2GHeD4TdFw1YLFCggwfzeXEm0gPuBw1ZoRfcVURxXFjy5mkLtotKPtMIUQ9IA",
        "Mensaje":"Valor1"
    }
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const eliminarEstudiante=(id)=>{
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzUwMTMyLCJleHAiOjE2OTM5NTAxMzJ9.chGW7z3NlLiWSSGUXQ_RJf24Alz6-Xu2dp9SJPT9U5fZ8gQ_SVUst2eYgtPbrBxFlVJJSPwOZrxZz3iVgqsSug",
        "Mensaje":"Valor1"
    }
    axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,{headers:headers}).then(r=>r.data);
}