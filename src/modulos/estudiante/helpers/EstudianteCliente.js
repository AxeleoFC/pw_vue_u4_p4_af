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
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzQ4OTc4LCJleHAiOjE2OTM5NDg5Nzh9.PYw7a4YUeq-vAj97cUSnDZv8igZbxQRdk8XBX5-JZFJvSV-LYglva6k0LNiyQ8_-A7OBQwmJP_PyPvVfNpTWcw",
        "Mensaje":"Valor1"
    }
    const data=await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r => r.json());
    return data;
}

const obtenerEstudianteAPIAxios=async (cedula)=>{
    // En el config vamos a enviar todas los datos de cabecera
    const headers={
        "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGVsIiwiaWF0IjoxNjkyNzQ5OTYzLCJleHAiOjE2OTM5NDk5NjN9.Xpsft56qTtSQoMY2IQPnhP63hqAIRrHA-LxEAJvw6ZTeapxwuKv8IQlbQtQYpaew5OFDSafGo3Z6exGiWTlY9g",
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