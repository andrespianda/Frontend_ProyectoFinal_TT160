const API_URL = "http://localhost:3005/res247";

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

 export async function actualizarRegistro (registro){
    console.log(registro)
          try {
            const id = registro._id
        const response = await fetch(`${API_URL}/actualizar/${id}`,{
          method: 'POST',
          body: JSON.stringify(registro),
          headers:{'content-type': 'application/json'},
        })
       
        console.log(response)

        } catch (error) {
          console.error("Error:", error);
          return error;
        } 
  }