const API_URL = "https://api-proyectofinal-tt160.onrender.com/res247"

export async function getRegistros() {
    
        const res = await fetch(API_URL+"/lista");
        const data = await res.json()
        return data

}

export async function postRegistros(name) {
// let data = [];
   try {
      const response = await fetch(`${API_URL}/crear/${name}`);
      const regCAC = await response.json();
      console.log(regCAC.types);
      return regCAC

      // console.log(data);
    } catch (error) {
      console.error(error);
      return false;
    }
    
}

 export async function actualizarRegistro(registro) {
  try {
    console.log(registro);

    const id = registro._id;

    const response = await fetch(`${API_URL}/actualizar/${id}`, {
      method: 'PUT',
      body: JSON.stringify(registro),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Paciente actualizado:", data);

    return data;
    
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}