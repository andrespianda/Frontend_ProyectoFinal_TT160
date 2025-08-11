import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { actualizarRegistro } from "../services/apiConect";

function Formulario247M() {
  const location = useLocation();
  const { datoCa } = location.state || {};
  //const [formData, setFormData] = useState({});
  const [temporal, setTemporal] = useState({});
    const modalRef = useRef(null);
    const navigate = useNavigate();

  const abrirModal = () => {
    modalRef.current.showModal();
  };

  const cerrarModal = () => {
    modalRef.current.close();
  };

  //const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (datoCa) setTemporal(datoCa);
  }, [datoCa]);

  const datoModificado = async (datosF) => {
    console.log(datosF);
    actualizarRegistro(datosF);
  };

  const confirmaEnvio =()=>{
       datoModificado(temporal);
       cerrarModal()
    navigate(-1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let nuevosDatos = Object.fromEntries(formData.entries());
    nuevosDatos = { ...nuevosDatos, modificacion: "X" };

    setTemporal(nuevosDatos);
    abrirModal()
    // datoModificado(nuevosDatos);
    // navigate(-1);
  };

  return (
    <>
      <div className="mt-16 md:mt-14">
        <form onSubmit={handleSubmit} className="p-4 ">
          <input type="hidden" name="_id" defaultValue={datoCa._id} />

          <section className="fixed border border-gray-300 py-4 px-4 min-w-full left-0 z-50 bg-neutral-200">
            <h1 className="text-xl font-bold mb-4">Datos del usuario</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2  ">
              <div className="col-span-2">
                <label
                  className="text-sm font-semibold text-gray-800 mx-3"
                  name="primerNombreUsuario"
                >
                  Nombre 1:{" "}
                  <strong>
                    {" "}
                    {temporal.primerNombreUsuario}{" "}
                    {temporal.segundoNombreUsuario}{" "}
                    {datoCa.primerApellidoUsuario}{" "}
                    {datoCa.segundoApellidoUsuario}{" "}
                  </strong>
                </label>
              </div>
              <input
                type="hidden"
                name="primerNombreUsuario"
                defaultValue={datoCa.primerNombreUsuario}
              />
              {/* <label name="segundoNombreUsuario">
                {temporal.segundoNombreUsuario}
              </label> */}
              <input
                type="hidden"
                name="segundoNombreUsuario"
                defaultValue={temporal.segundoNombreUsuario}
              />
              {/* <label name="primerApellidoUsuario">
                {datoCa.primerApellidoUsuario}
              </label> */}
              <input
                type="hidden"
                name="primerApellidoUsuario"
                defaultValue={temporal.primerApellidoUsuario}
              />
              {/* <label name="segundoApellidoUsuario">
                {datoCa.segundoApellidoUsuario}
              </label> */}
              <input
                type="hidden"
                name="segundoApellidoUsuario"
                defaultValue={temporal.segundoApellidoUsuario}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="tipoIdentificacionUsuario"
              >
                Identificacion:{" "}
                <strong>
                  {datoCa.tipoIdentificacionUsuario}{" "}
                  {datoCa.numeroIdentificacionUsuario}
                </strong>
              </label>
              <input
                type="hidden"
                name="tipoIdentificacionUsuario"
                defaultValue={temporal.tipoIdentificacionUsuario}
              />
              {/* <label name="numeroIdentificacionUsuario">
                {datoCa.numeroIdentificacionUsuario}
              </label> */}
              <input
                type="hidden"
                name="numeroIdentificacionUsuario"
                defaultValue={temporal.numeroIdentificacionUsuario}
              />

              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="fechaNacimiento"
              >
                Fecha Nacimiento: <strong>{datoCa.fechaNacimiento}</strong>
              </label>
              <input
                type="hidden"
                name="fechaNacimiento"
                defaultValue={temporal.fechaNacimiento}
              />

              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="sexo"
              >
                Sexo: <strong>{datoCa.sexo}</strong>
              </label>
              <input type="hidden" name="sexo" defaultValue={temporal.sexo} />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="ocupacion"
              >
                Ocupación: <strong>{datoCa.ocupacion}</strong>
              </label>
              <input
                type="hidden"
                name="ocupacion"
                defaultValue={temporal.ocupacion}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="regimenAfiliacionSGSSS"
              >
                Regimen: <strong>{datoCa.regimenAfiliacionSGSSS}</strong>
              </label>
              <input
                type="hidden"
                name="regimenAfiliacionSGSSS"
                defaultValue={temporal.regimenAfiliacionSGSSS}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="codigoEPS"
              >
                Codigo EPS: <strong>{datoCa.codigoEPS}</strong>
              </label>
              <input
                type="hidden"
                name="codigoEPS"
                defaultValue={temporal.codigoEPS}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="codigoPertenenciaEtnica"
              >
                Codigo Pertenencia Etnica:{" "}
                <strong>{datoCa.codigoPertenenciaEtnica}</strong>
              </label>
              <input
                type="hidden"
                name="codigoPertenenciaEtnica"
                defaultValue={temporal.codigoPertenenciaEtnica}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="grupoPoblacional"
              >
                Grupo Poblacional: <strong>{datoCa.grupoPoblacional}</strong>{" "}
              </label>
              <input
                type="hidden"
                name="grupoPoblacional"
                defaultValue={temporal.grupoPoblacional}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="municipioResidencia"
              >
                Municipio Residencia:{" "}
                <strong>{datoCa.municipioResidencia}</strong>
              </label>
              <input
                type="hidden"
                name="municipioResidencia"
                defaultValue={temporal.municipioResidencia}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="telefonoPaciente"
              >
                Telefono: <strong>{datoCa.telefonoPaciente}</strong>{" "}
              </label>
              <input
                type="hidden"
                name="telefonoPaciente"
                defaultValue={temporal.telefonoPaciente}
              />
              <label
                className="text-sm font-semibold text-gray-900 mx-3"
                name="fechaAfiliacionEPS"
              >
                Fecha Afiliacion EPS:{" "}
                <strong>{datoCa.fechaAfiliacionEPS}</strong>
              </label>
              <input
                type="hidden"
                name="fechaAfiliacionEPS"
                defaultValue={temporal.fechaAfiliacionEPS}
              />
            </div>
          </section>

          <section className="mt-36 md:mt-50">
            <h2 className="text-xl font-bold mb-4">Diagnóstico de cáncer</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  name="nombreNeoplasiaMaligna"
                  defaultValue={temporal.nombreNeoplasiaMaligna}
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="nombreNeoplasiaMaligna"
                  className="absolute left-3 top-0  text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Nombre de la neoplasia maligna reportada
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaDiagnosticoCancer"
                  defaultValue={datoCa.fechaDiagnosticoActual}
                  name="fechaDiagnosticoActual"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaDiagnosticoCancer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de diagnóstico del cáncer
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaRemision"
                  defaultValue={datoCa.fechaNotaRemision}
                  name="fechaNotaRemision"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaRemision"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de nota de remisión médica
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaIngresoInstitucionDiagnostico"
                  defaultValue={datoCa.fechaIngresoInstitucionDiagnostico}
                  name="fechaIngresoInstitucionDiagnostico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaIngresoInstitucionDiagnostico"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha ingreso a institución diagnóstica
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="tipoEstudioDiagnostico"
                  defaultValue={datoCa.tipoEstudioDiagnostico}
                  name="tipoEstudioDiagnostico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="tipoEstudioDiagnostico"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Tipo de estudio de diagnóstico
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoSinHistopatologia"
                  defaultValue={datoCa.motivoSinHistopatologia}
                  name="motivoSinHistopatologia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoSinHistopatologia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo sin diagnóstico por histopatología
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaMuestraHistopatologia"
                  defaultValue={datoCa.fechaRecoleccionMuestra}
                  name="fechaRecoleccionMuestra"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaMuestraHistopatologia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha recolección muestra histopatológica
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaInformeHistopatologico"
                  defaultValue={datoCa.fechaInformeHistopatologico}
                  name="fechaInformeHistopatologico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaInformeHistopatologico"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha informe histopatológico válido
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoHabilitacionIPSDiagnostico"
                  defaultValue={datoCa.codigoIpsConfirmacionDiagnostico}
                  name="codigoIpsConfirmacionDiagnostico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoHabilitacionIPSDiagnostico"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código habilitación IPS diagnóstico
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaPrimeraConsultaTratante"
                  defaultValue={datoCa.fechaPrimeraConsultaTratante}
                  name="fechaPrimeraConsultaTratante"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaPrimeraConsultaTratante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha primera consulta médico tratante
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="histologiaTumor"
                  defaultValue={datoCa.histologiaTumor}
                  name="histologiaTumor"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="histologiaTumor"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Histología del tumor (biopsia o quirúrgica)
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="gradoDiferenciacion"
                  defaultValue={datoCa.gradoDiferenciacion}
                  name="gradoDiferenciacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="gradoDiferenciacion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Grado de diferenciación del tumor
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="estadificacionTNM"
                  defaultValue={datoCa.primeraEstadificacion}
                  name="primeraEstadificacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="estadificacionTNM"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Primera estadificación TNM / FIGO / etc.
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaEstadificacion"
                  defaultValue={datoCa.fechaPrimeraEstadificacion}
                  name="fechaPrimeraEstadificacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaEstadificacion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de estadificación
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="her2CancerMama"
                  defaultValue={datoCa.her2RealizadoMama}
                  name="her2RealizadoMama"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="her2CancerMama"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Se realizó prueba HER2 antes del tratamiento?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaHER2"
                  defaultValue={datoCa.fechaPrimeraPruebaHer2}
                  name="fechaPrimeraPruebaHer2"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaHER2"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha prueba HER2
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="resultadoHER2"
                  defaultValue={datoCa.resultadoUltimaPruebaHer2}
                  name="resultadoUltimaPruebaHer2"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="resultadoHER2"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Resultado de la prueba HER2
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="estadificacionDukes"
                  defaultValue={datoCa.estadificacionDukesColorrectal}
                  name="estadificacionDukesColorrectal"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="estadificacionDukes"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Estadificación de Dukes
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaDukes"
                  defaultValue={datoCa.fechaDukes}
                  name="fechaDukes"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaDukes"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de estadificación de Dukes
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="estadificacionLinfoma"
                  defaultValue={datoCa.estadificacionClinicaHematologica}
                  name="estadificacionClinicaHematologica"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="estadificacionLinfoma"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Estadificación linfoma o cáncer hematológico
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="escalaGleason"
                  defaultValue={datoCa.escalaGleasonProstata}
                  name="escalaGleasonProstata"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="escalaGleason"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Escala Gleason en diagnóstico de próstata
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="clasificacionRiesgo"
                  defaultValue={datoCa.clasificacionRiesgo}
                  name="clasificacionRiesgo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="clasificacionRiesgo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Clasificación de riesgo (leucemias/linfomas/pediátricos)
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaClasificacionRiesgo"
                  defaultValue={datoCa.fechaClasificacionRiesgo}
                  name="fechaClasificacionRiesgo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaClasificacionRiesgo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de clasificación de riesgo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="objetivoTratamientoInicial"
                  defaultValue={datoCa.objetivoTratamientoInicial}
                  name="objetivoTratamientoInicial"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="objetivoTratamientoInicial"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Objetivo del tratamiento médico inicial
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="objetivoTratamientoActual"
                  defaultValue={datoCa.objetivoIntervencionPeriodo}
                  name="objetivoIntervencionPeriodo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="objetivoTratamientoActual"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Objetivo del tratamiento actual
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="antecedenteOtroCancer"
                  defaultValue={datoCa.antecedenteOtroCancer}
                  name="antecedenteOtroCancer"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="antecedenteOtroCancer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Tiene antecedente de otro cáncer primario?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaOtroCancer"
                  defaultValue={datoCa.fechaDiagnosticoOtroCancer}
                  name="fechaDiagnosticoOtroCancer"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaOtroCancer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha diagnóstico otro cáncer
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="cie10OtroCancer"
                  defaultValue={datoCa.tipoOtroCancerCIE10}
                  name="tipoOtroCancerCIE10"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cie10OtroCancer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  CIE-10 otro cáncer
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Tratamientos sistémicos</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="recibioQuimioterapia"
                  defaultValue={datoCa.recibioQuimioterapiaSistemaPeriodo}
                  name="recibioQuimioterapiaSistemaPeriodo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="recibioQuimioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió quimioterapia en este corte?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="fasesQuimioterapia"
                  defaultValue={datoCa.fasesQuimioterapiaHematolinfaticas}
                  name="fasesQuimioterapiaHematolinfaticas"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fasesQuimioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Cuántas fases de quimioterapia?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="prefase"
                  defaultValue={datoCa.fasePrefase}
                  name="fasePrefase"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="prefase"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Prefase o citorreducción inicial
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="induccion"
                  defaultValue={datoCa.faseInduccion}
                  name="faseInduccion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="induccion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fase de Inducción
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="intensificacion"
                  defaultValue={datoCa.faseIntensificacion}
                  name="faseIntensificacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="intensificacion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fase de Intensificación
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="consolidacion"
                  defaultValue={datoCa.faseConsolidacion}
                  name="faseConsolidacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="consolidacion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fase de Consolidación
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="reinduccion"
                  defaultValue={datoCa.FaseReinduccion}
                  name="FaseReinduccion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="reinduccion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fase de Reinducción
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="mantenimiento"
                  defaultValue={datoCa.faseMantenimiento}
                  name="faseMantenimiento"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="mantenimiento"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Mantenimiento
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="mantenimientoFinal"
                  defaultValue={datoCa.faseMantenimientoLargo}
                  name="faseMantenimientoLargo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="mantenimientoFinal"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Mantenimiento largo o final
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="otraFase"
                  defaultValue={datoCa.faseOtra}
                  name="faseOtra"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="otraFase"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Otra fase
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroCiclos"
                  defaultValue={datoCa.numeroCiclosRecibidos}
                  name="numeroCiclosRecibidos"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroCiclos"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Número de ciclos administrados
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionEsquema"
                  defaultValue={datoCa.ubicacionTemporalPrimerEsquema}
                  name="ubicacionTemporalPrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionEsquema"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación del primer esquema
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaInicioEsquema"
                  defaultValue={datoCa.fechaInicioPrimerEsquema}
                  name="fechaInicioPrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaInicioEsquema"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha inicio del esquema
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroIPSQuimio"
                  defaultValue={datoCa.numeroIpsPrimerEsquema}
                  name="numeroIpsPrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroIPSQuimio"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Número de IPS suministradoras
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPS1Quimio"
                  defaultValue={datoCa.codigoIps1PrimerEsquema}
                  name="codigoIps1PrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPS1Quimio"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código de IPS1
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPS2Quimio"
                  defaultValue={datoCa.codigoIps2PrimerEsquema}
                  name="codigoIps2PrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPS2Quimio"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código de IPS2
                </label>
              </div>

              {/* Medicamentos primer esquema */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroMedicamentosPropuestosPrimerEsquema"
                  defaultValue={
                    datoCa.numeroMedicamentosPropuestosPrimerEsquema
                  }
                  name="numeroMedicamentosPropuestosPrimerEsquema"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroMedicamentosPropuestosPrimerEsquema"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Medicamentos Propuestos 1° Esquema
                </label>
              </div>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div className="relative mb-4" key={`m1-${i}`}>
                  <input
                    type="text"
                    id={`medicamento${i}PrimerEsquema`}
                    defaultValue={datoCa[`medicamento${i}PrimerEsquema`]}
                    name={`medicamento${i}PrimerEsquema`}
                    className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    htmlFor={`medicamento${i}PrimerEsquema`}
                    className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                  >
                    Medicamento {i} primer Esquema
                  </label>
                </div>
              ))}

              <div className="relative mb-4">
                <input
                  type="text"
                  id="quimioIntratecalPrimer"
                  defaultValue={datoCa.recibioIntratecalPrimerCiclo}
                  name="recibioIntratecalPrimerCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="quimioIntratecalPrimer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Quimioterapia intratecal en primer ciclo?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaFinPrimerCiclo"
                  defaultValue={datoCa.fechaFinPrimerCiclo}
                  name="fechaFinPrimerCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaFinPrimerCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha finalización primer ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="caracteristicasPrimerCiclo"
                  defaultValue={datoCa.caracteristicasPrimerCiclo}
                  name="caracteristicasPrimerCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="caracteristicasPrimerCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Características del primer ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoFinPrimerCiclo"
                  defaultValue={datoCa.motivoTerminacionPrematuraPrimerCiclo}
                  name="motivoTerminacionPrematuraPrimerCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoFinPrimerCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo finalización primer ciclo
                </label>
              </div>

              {/* Último ciclo - ubicación / fechas / IPS */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionUltimoCiclo"
                  defaultValue={datoCa.ubicacionTemporalUltimoCiclo}
                  name="ubicacionTemporalUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaInicioUltimoCiclo"
                  defaultValue={datoCa.fechaInicioUltimoCiclo}
                  name="fechaInicioUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaInicioUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha inicio último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroIPSUltimoCiclo"
                  defaultValue={datoCa.numeroIpsUltimoCiclo}
                  name="numeroIpsUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroIPSUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Número IPS último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPS1Ultimo"
                  defaultValue={datoCa.codigoIps1UltimoCiclo}
                  name="codigoIps1UltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPS1Ultimo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS1 último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPS2Ultimo"
                  defaultValue={datoCa.codigoIps2UltimoCiclo}
                  name="codigoIps2UltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPS2Ultimo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS2 último ciclo
                </label>
              </div>

              {/* Medicamentos último esquema */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroMedicamentosPropuestosUltimoCiclo"
                  defaultValue={datoCa.numeroMedicamentosPropuestosUltimoCiclo}
                  name="numeroMedicamentosPropuestosUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroMedicamentosPropuestosUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Medicamentos Propuestos Ultimo Ciclo
                </label>
              </div>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div className="relative mb-4" key={`m2-${i}`}>
                  <input
                    type="text"
                    id={`medicamento${i}UltimoCiclo`}
                    defaultValue={datoCa[`medicamento${i}UltimoCiclo`]}
                    name={`medicamento${i}UltimoCiclo`}
                    className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    htmlFor={`medicamento${i}UltimoCiclo`}
                    className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                  >
                    {i} Medicamento último esquema
                  </label>
                </div>
              ))}

              <div className="relative mb-4">
                <input
                  type="text"
                  id="recibioIntratecalUltimoCiclo"
                  defaultValue={datoCa.recibioIntratecalUltimoCiclo}
                  name="recibioIntratecalUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="recibioIntratecalUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Quimioterapia intratecal en último ciclo?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaFinUltimoCiclo"
                  defaultValue={datoCa.fechaFinUltimoCiclo}
                  name="fechaFinUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaFinUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha finalización último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="caracteristicasUltimoCiclo"
                  defaultValue={datoCa.caracteristicasUltimoCiclo}
                  name="caracteristicasUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="caracteristicasUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Características último ciclo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoFinUltimoCiclo"
                  defaultValue={datoCa.motivoTerminacionPrematuraUltimoCiclo}
                  name="motivoTerminacionPrematuraUltimoCiclo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoFinUltimoCiclo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo finalización último ciclo
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Cirugías</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="cirugiaCancer"
                  defaultValue={datoCa.recibioCirugiaCurativaPaliativa}
                  name="recibioCirugiaCurativaPaliativa"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cirugiaCancer"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all
    peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400
    peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600
    peer-focus:text-sm"
                >
                  ¿Fue sometido a cirugía?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroCirugias"
                  defaultValue={datoCa.numeroCirugiasPeriodo}
                  name="numeroCirugiasPeriodo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroCirugias"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Número de cirugías
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaPrimeraCirugia"
                  defaultValue={datoCa.fechaPrimeraCirugia}
                  name="fechaPrimeraCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaPrimeraCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha primera cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPSPrimeraCirugia"
                  defaultValue={datoCa.codigoIpsPrimeraCirugia}
                  name="codigoIpsPrimeraCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSPrimeraCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS primera cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoPrimeraCirugia"
                  defaultValue={datoCa.codigoPrimeraCirugia}
                  name="codigoPrimeraCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoPrimeraCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código primera cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionPrimeraCirugia"
                  defaultValue={datoCa.ubicacionTemporalPrimeraCirugia}
                  name="ubicacionTemporalPrimeraCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionPrimeraCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación primera cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaUltimaCirugia"
                  defaultValue={datoCa.fechaUltimaCirugia}
                  name="fechaUltimaCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaUltimaCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha última cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoUltimaCirugia"
                  defaultValue={datoCa.motivoUltimaCirugia}
                  name="motivoUltimaCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoUltimaCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo última cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIPSUltimaCirugia"
                  defaultValue={datoCa.codigoIpsUltimaCirugia}
                  name="codigoIpsUltimaCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSUltimaCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS última cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoUltimaCirugia"
                  defaultValue={datoCa.codigoUltimaCirugia}
                  name="codigoUltimaCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoUltimaCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código última cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionUltimaCirugia"
                  defaultValue={datoCa.ubicacionTemporalUltimaCirugia}
                  name="ubicacionTemporalUltimaCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionUltimaCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación última cirugía
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="estadoVitalPostCirugia"
                  defaultValue={datoCa.estadoVitalPostCirugia}
                  name="estadoVitalPostCirugia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="estadoVitalPostCirugia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Estado vital tras última cirugía
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Radioterapia</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  id="recibioRadioterapia"
                  defaultValue={datoCa.recibioRadioterapia}
                  name="recibioRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="recibioRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió radioterapia?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroSesionesRT"
                  defaultValue={datoCa.numeroSesionesRadioterapia}
                  name="numeroSesionesRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroSesionesRT"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Número sesiones radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="date"
                  id="fechaInicioRT"
                  defaultValue={datoCa.fechaInicioRadioterapia}
                  name="fechaInicioRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaInicioRT"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha inicio radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionRT"
                  defaultValue={
                    datoCa.ubicacionTemporalPrimerEsquemaRadioterapia
                  }
                  name="ubicacionTemporalPrimerEsquemaRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionRT"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="tipoRT"
                  defaultValue={datoCa.tipoRadioterapiaPrimer}
                  name="tipoRadioterapiaPrimer"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="tipoRT"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Tipo radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroIpsPrimerRadioterapia"
                  defaultValue={datoCa.numeroIpsPrimerRadioterapia}
                  name="numeroIpsPrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroIpsPrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  N Ips 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIps1PrimerRadioterapia"
                  defaultValue={datoCa.codigoIps1PrimerRadioterapia}
                  name="codigoIps1PrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIps1PrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Cod 1 Ips 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIps2PrimerRadioterapia"
                  defaultValue={datoCa.codigoIps2PrimerRadioterapia}
                  name="codigoIps2PrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIps2PrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Cod 2 Ips 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="fechaFinPrimerRadioterapia"
                  defaultValue={datoCa.fechaFinPrimerRadioterapia}
                  name="fechaFinPrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaFinPrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  fecha Fin 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="caracteristicasPrimerRadioterapia"
                  defaultValue={datoCa.caracteristicasPrimerRadioterapia}
                  name="caracteristicasPrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="caracteristicasPrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Caracteristicas 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoFinPrimerRadioterapia"
                  defaultValue={datoCa.motivoFinPrimerRadioterapia}
                  name="motivoFinPrimerRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoFinPrimerRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo Fin 1° Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="fechaInicioUltimoRadioterapia"
                  defaultValue={datoCa.fechaInicioUltimoRadioterapia}
                  name="fechaInicioUltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaInicioUltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fec. Inicio Ultimo Ciclo Radio
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="ubicacionTemporalUltimoEsquemaRadioterapia"
                  defaultValue={
                    datoCa.ubicacionTemporalUltimoEsquemaRadioterapia
                  }
                  name="ubicacionTemporalUltimoEsquemaRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionTemporalUltimoEsquemaRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicacion Tem Ult. Esquema Radio
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="tipoRadioterapiaUltimo"
                  defaultValue={datoCa.tipoRadioterapiaUltimo}
                  name="tipoRadioterapiaUltimo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="tipoRadioterapiaUltimo"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Tipo Radioterapia Ultimo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="numeroIpsUltimoRadioterapia"
                  defaultValue={datoCa.numeroIpsUltimoRadioterapia}
                  name="numeroIpsUltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="numeroIpsUltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  No. Ips Ultimo Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIps1UltimoRadioterapia"
                  defaultValue={datoCa.codigoIps1UltimoRadioterapia}
                  name="codigoIps1UltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIps1UltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Cod Ips 1 Ultimo Radio
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="codigoIps2UltimoRadioterapia"
                  defaultValue={datoCa.codigoIps2UltimoRadioterapia}
                  name="codigoIps2UltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIps2UltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Cod Ips 2 Ultimo Radio
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="fechaFinUltimoRadioterapia"
                  defaultValue={datoCa.fechaFinUltimoRadioterapia}
                  name="fechaFinUltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaFinUltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fec Fin Ultimo Radio
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="caracteristicasUltimoRadioterapia"
                  defaultValue={datoCa.caracteristicasUltimoRadioterapia}
                  name="caracteristicasUltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="caracteristicasUltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Caracteristicas Ultimo Radioterapia
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  type="text"
                  id="motivoFinUltimoRadioterapia"
                  defaultValue={datoCa.motivoFinUltimoRadioterapia}
                  name="motivoFinUltimoRadioterapia"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="motivoFinUltimoRadioterapia"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
               peer-placeholder-shown:text-base peer-focus:top-2 
               peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Motivo Fin Ultimo Radio
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Trasplante y rehabilitación
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  id="recibioTrasplante"
                  type="text"
                  defaultValue={datoCa.recibioTrasplanteProgenitoras}
                  name="recibioTrasplanteProgenitoras"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="recibioTrasplante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió trasplante?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="tipoTrasplante"
                  type="text"
                  defaultValue={datoCa.tipoTrasplante}
                  name="tipoTrasplante"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="tipoTrasplante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Tipo de trasplante
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="ubicacionTrasplante"
                  type="text"
                  defaultValue={datoCa.ubicacionTemporalTrasplante}
                  name="ubicacionTemporalTrasplante"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="ubicacionTrasplante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Ubicación trasplante
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaTrasplante"
                  type="date"
                  defaultValue={datoCa.fechaTrasplante}
                  name="fechaTrasplante"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaTrasplante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha trasplante
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoIPSTrasplante"
                  type="text"
                  defaultValue={datoCa.codigoIpsTrasplante}
                  name="codigoIpsTrasplante"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSTrasplante"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS trasplante
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cirugiaReconstructiva"
                  type="text"
                  defaultValue={datoCa.cirugiaReconstructiva}
                  name="cirugiaReconstructiva"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cirugiaReconstructiva"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió cirugía reconstructiva?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaCirugiaReconstructiva"
                  type="date"
                  defaultValue={datoCa.fechaCirugiaReconstructiva}
                  name="fechaCirugiaReconstructiva"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaCirugiaReconstructiva"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha cirugía reconstructiva
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoIPSCirugiaRecon"
                  type="text"
                  defaultValue={datoCa.codigoIpsCirugiaReconstructiva}
                  name="codigoIpsCirugiaReconstructiva"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSCirugiaRecon"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS cirugía reconstructiva
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">
              Cuidados paliativos y otras consultas
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="relative mb-4">
                <input
                  id="valoradoCuidadosPaliativos"
                  type="text"
                  defaultValue={datoCa.valoradoPaliativo}
                  name="valoradoPaliativo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="valoradoCuidadosPaliativos"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Valorado en cuidados paliativos?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorEspecialista"
                  type="text"
                  defaultValue={datoCa.paliativoEspecialista}
                  name="paliativoEspecialista"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorEspecialista"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por especialista paliativo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorProfesionalSalud"
                  type="text"
                  defaultValue={datoCa.paliativoProfesionalNoMedico}
                  name="paliativoProfesionalNoMedico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorProfesionalSalud"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por profesional no médico
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorOtroEspecialista"
                  type="text"
                  defaultValue={datoCa.paliativoOtraEspecialidad}
                  name="paliativoOtraEspecialidad"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorOtroEspecialista"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por otro especialista
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorMedicoGeneral"
                  type="text"
                  defaultValue={datoCa.paliativoMedicoGeneral}
                  name="paliativoMedicoGeneral"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorMedicoGeneral"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por médico general
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorTrabajoSocial"
                  type="text"
                  defaultValue={datoCa.paliativoTrabajoSocial}
                  name="paliativoTrabajoSocial"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorTrabajoSocial"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por trabajo social
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="cuidadosPorOtroProfesional"
                  type="text"
                  defaultValue={datoCa.paliativoOtroProfesional}
                  name="paliativoOtroProfesional"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="cuidadosPorOtroProfesional"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Valoración por otro profesional
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaPrimeraValoracionPaliativa"
                  type="date"
                  defaultValue={datoCa.fechaPrimeraValoracionPaliativo}
                  name="fechaPrimeraValoracionPaliativo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaPrimeraValoracionPaliativa"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha primera valoración paliativa
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoIPSPaliativa"
                  type="text"
                  defaultValue={datoCa.codigoIpsPaliativo}
                  name="codigoIpsPaliativo"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSPaliativa"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS cuidados paliativos
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="valoradoPsiquiatria"
                  type="text"
                  defaultValue={datoCa.valoradoPsiquiatria}
                  name="valoradoPsiquiatria"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="valoradoPsiquiatria"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Valorado por psiquiatría?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaConsultaPsiquiatria"
                  type="date"
                  defaultValue={datoCa.fechaPrimeraConsultaPsiquiatria}
                  name="fechaPrimeraConsultaPsiquiatria"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaConsultaPsiquiatria"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha consulta psiquiatría
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoIPSPsiquiatria"
                  type="text"
                  defaultValue={datoCa.codigoIpsPsiquiatria}
                  name="codigoIpsPsiquiatria"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSPsiquiatria"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS psiquiatría
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="valoradoNutricion"
                  type="text"
                  defaultValue={datoCa.valoradoNutricion}
                  name="valoradoNutricion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="valoradoNutricion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Valorado por nutrición?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaConsultaNutricion"
                  type="date"
                  defaultValue={datoCa.fechaConsultaNutricion}
                  name="fechaConsultaNutricion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaConsultaNutricion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha consulta nutrición
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoIPSNutricion"
                  type="text"
                  defaultValue={datoCa.codigoIPSNutricion}
                  name="codigoIPSNutricion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoIPSNutricion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código IPS nutrición
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="recibioSoporteNutricional"
                  type="text"
                  defaultValue={datoCa.recibioSoporteNutricional}
                  name="recibioSoporteNutricional"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="recibioSoporteNutricional"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió soporte nutricional?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="terapiasComplementarias"
                  type="text"
                  defaultValue={datoCa.recibioTerapiasComplementarias}
                  name="recibioTerapiasComplementarias"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="terapiasComplementarias"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  ¿Recibió terapias complementarias?
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="tratamientoActual"
                  type="text"
                  defaultValue={datoCa.tipoTratamientoFechaCorte}
                  name="tipoTratamientoFechaCorte"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="tratamientoActual"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Tipo de tratamiento actual
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="resultadoFinal"
                  type="text"
                  defaultValue={datoCa.resultadoFinalManejoOncologico}
                  name="resultadoFinalManejoOncologico"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="resultadoFinal"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Resultado final del manejo
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="estadoVitalFinal"
                  type="text"
                  defaultValue={datoCa.estadoVitalFinalCorte}
                  name="estadoVitalFinalCorte"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="estadoVitalFinal"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Estado vital final
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="novedadAdministrativa"
                  type="text"
                  defaultValue={datoCa.novedadAdministrativa}
                  name="novedadAdministrativa"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="novedadAdministrativa"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Novedad administrativa
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="novedadClinica"
                  type="text"
                  defaultValue={datoCa.novedadClinica}
                  name="novedadClinica"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="novedadClinica"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Novedad clínica
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaDesafiliacionEPS"
                  type="date"
                  defaultValue={datoCa.fechaDesafiliacionEPS}
                  name="fechaDesafiliacionEPS"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaDesafiliacionEPS"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha desafiliación EPS
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaMuerte"
                  type="date"
                  defaultValue={datoCa.fechaMuerte}
                  name="fechaMuerte"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaMuerte"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de muerte
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="causaMuerte"
                  type="text"
                  defaultValue={datoCa.causaMuerte}
                  name="causaMuerte"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="causaMuerte"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Causa de muerte
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="codigoUnicoIdentificacion"
                  type="text"
                  defaultValue={datoCa.codigoUnicoIdentificacion}
                  name="codigoUnicoIdentificacion"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="codigoUnicoIdentificacion"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Código único (BDUA-BDEX-PVS)
                </label>
              </div>

              <div className="relative mb-4">
                <input
                  id="fechaCorte"
                  type="date"
                  defaultValue={datoCa.fechaCorte}
                  name="fechaCorte"
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="fechaCorte"
                  className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Fecha de corte
                </label>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
            
          >
            Guardar
          </button>
          <button
            type="button"
            className="bg-green-600 text-white px-6 py-2 rounded ml-2"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </form>
        <dialog ref={modalRef} className=" place-self-center col rounded-lg shadow-lg w-96 p-6 bg-white" id="modal247">
          <h2 className="place-self-center text-xl font-bold mb-4">Guardar registro</h2>
          <p className="pb-4 place-self-center">¿Esta seguro de guardar los datos?</p>
          <button 
            type="button" 
            className="self-center bg-green-600 text-white px-4 py-2 rounded "
            onClick={confirmaEnvio}>
            
            Modificar
          </button>
          <button 
          type="button"
          className="bg-red-600 text-white px-6 py-2 rounded ml-2"
          onClick={cerrarModal}>
            Volver
          </button>

        </dialog>
      </div>
    </>
  );
}

export default Formulario247M;
