import { useState } from "react";

function Formulario247M() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const Input = ({ name, type = "text", placeholder }) => (
    <input
      name={name}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  );

  const Section = ({ title, children }) => (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">{children}</div>
    </section>
  );

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-8">
      {/* <Section  title="Datos del usuario"> */}
      <section className="border border-gray-300 p-4 ">
        <h1 className="text-xl font-bold mb-4">Datos del usuario</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <label name="primerNombreUsuario"> Primer nombre del usuario</label>
          <label name="segundoNombreUsuario">Segundo nombre del usuario</label>
          <label name="primerApellidoUsuario">
            Primer apellido del usuario
          </label>
          <label name="segundoApellidoUsuario">
            Segundo apellido del usuario
          </label>
          <label name="tipoIdentificacionUsuario">
            Tipo de Identificación del usuario
          </label>
          <label name="numeroIdentificacionUsuario">
            Número de Identificación del usuario
          </label>
          <label name="fechaNacimiento">Fecha de nacimiento</label>
          <label name="Sexo">Sexo</label>
          <label name="ocupacion">Ocupació</label>
          <label name="regimenAfiliacion">Régimende afiliación al SGSSS</label>
          <label name="codigoEPS">Códigode la EPS o entidad territorial</label>
          <label name="codigoEtnia">Códigopertenencia étnica</label>
          <label name="grupoPoblacional">Grupopoblacional</label>
          <label name="municipioResidencia">Municipiode residencia</label>
          <label name="telefonoPaciente">Númerotelefónico del paciente</label>
          <label name="fechaAfiliacionEPS">Fecha de afiliación a la EPS</label>
        </div>
      </section>

      {/* </Section> */}

      <Section title="Diagnóstico de cáncer">
        <Input
          name="nombreNeoplasia"
          placeholder="Nombre de la neoplasia maligna reportada"
        />
        <Input
          name="fechaDiagnosticoCancer"
          type="date"
          placeholder="Fecha de diagnóstico del cáncer"
        />
        <Input
          name="fechaRemision"
          type="date"
          placeholder="Fecha de nota de remisión médica"
        />
        <Input
          name="fechaIngresoDiagnostico"
          type="date"
          placeholder="Fecha ingreso a institución diagnóstica"
        />
        <Input
          name="tipoEstudioDiagnostico"
          placeholder="Tipo de estudio de diagnóstico"
        />
        <Input
          name="motivoSinHistopatologia"
          placeholder="Motivo sin diagnóstico por histopatología"
        />
        <Input
          name="fechaMuestraHistopatologia"
          type="date"
          placeholder="Fecha recolección muestra histopatológica"
        />
        <Input
          name="fechaInformeHistopatologico"
          type="date"
          placeholder="Fecha informe histopatológico válido"
        />
        <Input
          name="codigoHabilitacionIPSDiagnostico"
          placeholder="Código habilitación IPS diagnóstico"
        />
        <Input
          name="fechaPrimeraConsultaTratante"
          type="date"
          placeholder="Fecha primera consulta médico tratante"
        />
        <Input
          name="histologiaTumor"
          placeholder="Histología del tumor (biopsia o quirúrgica)"
        />
        <Input
          name="gradoDiferenciacion"
          placeholder="Grado de diferenciación del tumor"
        />
        <Input
          name="estadificacionTNM"
          placeholder="Primera estadificación TNM / FIGO / etc."
        />
        <Input
          name="fechaEstadificacion"
          type="date"
          placeholder="Fecha de estadificación"
        />
        <Input
          name="her2CancerMama"
          placeholder="¿Se realizó prueba HER2 antes del tratamiento?"
        />
        <Input name="fechaHER2" type="date" placeholder="Fecha prueba HER2" />
        <Input name="resultadoHER2" placeholder="Resultado de la prueba HER2" />
        <Input
          name="estadificacionDukes"
          placeholder="Estadificación de Dukes"
        />
        <Input
          name="fechaDukes"
          type="date"
          placeholder="Fecha de estadificación de Dukes"
        />
        <Input
          name="estadificacionLinfoma"
          placeholder="Estadificación linfoma o cáncer hematológico"
        />
        <Input
          name="escalaGleason"
          placeholder="Escala Gleason en diagnóstico de próstata"
        />
        <Input
          name="clasificacionRiesgo"
          placeholder="Clasificación de riesgo (leucemias/linfomas/pediátricos)"
        />
        <Input
          name="fechaClasificacionRiesgo"
          type="date"
          placeholder="Fecha de clasificación de riesgo"
        />
        <Input
          name="objetivoTratamientoInicial"
          placeholder="Objetivo del tratamiento médico inicial"
        />
        <Input
          name="objetivoTratamientoActual"
          placeholder="Objetivo del tratamiento actual"
        />
        <Input
          name="antecedenteOtroCancer"
          placeholder="¿Tiene antecedente de otro cáncer primario?"
        />
        <Input
          name="fechaOtroCancer"
          type="date"
          placeholder="Fecha diagnóstico otro cáncer"
        />
        <Input name="cie10OtroCancer" placeholder="CIE-10 otro cáncer" />
      </Section>

      <Section title="Tratamientos sistémicos">
        <Input
          name="recibioQuimioterapia"
          placeholder="¿Recibió quimioterapia en este corte?"
        />
        <Input
          name="fasesQuimioterapia"
          placeholder="¿Cuántas fases de quimioterapia?"
        />
        <Input name="prefase" placeholder="Prefase o citorreducción inicial" />
        <Input name="induccion" placeholder="Fase de Inducción" />
        <Input name="intensificacion" placeholder="Fase de Intensificación" />
        <Input name="consolidacion" placeholder="Fase de Consolidación" />
        <Input name="reinduccion" placeholder="Fase de Reinducción" />
        <Input name="mantenimiento" placeholder="Mantenimiento" />
        <Input
          name="mantenimientoFinal"
          placeholder="Mantenimiento largo o final"
        />
        <Input name="otraFase" placeholder="Otra fase" />
        <Input
          name="numeroCiclos"
          placeholder="Número de ciclos administrados"
        />
        <Input
          name="ubicacionEsquema"
          placeholder="Ubicación del primer esquema"
        />
        <Input
          name="fechaInicioEsquema"
          type="date"
          placeholder="Fecha inicio del esquema"
        />
        <Input
          name="numeroIPSQuimio"
          placeholder="Número de IPS suministradoras"
        />
        <Input name="codigoIPS1Quimio" placeholder="Código de IPS1" />
        <Input name="codigoIPS2Quimio" placeholder="Código de IPS2" />
        {[...Array(12)].map((_, i) => (
          <Input
            key={i}
            name={`medicamentoEsquema${i + 1}`}
            placeholder={`Medicamento antineoplásico ${i + 1}`}
          />
        ))}
        <Input
          name="quimioIntratecalPrimer"
          placeholder="¿Quimioterapia intratecal en primer ciclo?"
        />
        <Input
          name="fechaFinPrimerCiclo"
          type="date"
          placeholder="Fecha finalización primer ciclo"
        />
        <Input
          name="caracteristicasPrimerCiclo"
          placeholder="Características del primer ciclo"
        />
        <Input
          name="motivoFinPrimerCiclo"
          placeholder="Motivo finalización primer ciclo"
        />
        <Input
          name="ubicacionUltimoCiclo"
          placeholder="Ubicación último ciclo"
        />
        <Input
          name="fechaInicioUltimoCiclo"
          type="date"
          placeholder="Fecha inicio último ciclo"
        />
        <Input
          name="numeroIPSUltimoCiclo"
          placeholder="Número IPS último ciclo"
        />
        <Input name="codigoIPS1Ultimo" placeholder="Código IPS1 último ciclo" />
        <Input name="codigoIPS2Ultimo" placeholder="Código IPS2 último ciclo" />
        {[...Array(12)].map((_, i) => (
          <Input
            key={`ult${i}`}
            name={`medicamentoUltimoEsquema${i + 1}`}
            placeholder={`Medicamento último esquema ${i + 1}`}
          />
        ))}
        <Input
          name="quimioIntratecalUltimo"
          placeholder="¿Quimioterapia intratecal en último ciclo?"
        />
        <Input
          name="fechaFinUltimoCiclo"
          type="date"
          placeholder="Fecha finalización último ciclo"
        />
        <Input
          name="caracteristicasUltimoCiclo"
          placeholder="Características último ciclo"
        />
        <Input
          name="motivoFinUltimoCiclo"
          placeholder="Motivo finalización último ciclo"
        />
      </Section>

      <Section title="Cirugías">
        <Input name="cirugiaCancer" placeholder="¿Fue sometido a cirugía?" />
        <Input name="numeroCirugias" placeholder="Número de cirugías" />
        <Input
          name="fechaPrimeraCirugia"
          type="date"
          placeholder="Fecha primera cirugía"
        />
        <Input
          name="codigoIPSPrimeraCirugia"
          placeholder="Código IPS primera cirugía"
        />
        <Input
          name="codigoPrimeraCirugia"
          placeholder="Código primera cirugía"
        />
        <Input
          name="ubicacionPrimeraCirugia"
          placeholder="Ubicación primera cirugía"
        />
        <Input
          name="fechaUltimaCirugia"
          type="date"
          placeholder="Fecha última cirugía"
        />
        <Input name="motivoUltimaCirugia" placeholder="Motivo última cirugía" />
        <Input
          name="codigoIPSUltimaCirugia"
          placeholder="Código IPS última cirugía"
        />
        <Input name="codigoUltimaCirugia" placeholder="Código última cirugía" />
        <Input
          name="ubicacionUltimaCirugia"
          placeholder="Ubicación última cirugía"
        />
        <Input
          name="estadoVitalPostCirugia"
          placeholder="Estado vital tras última cirugía"
        />
      </Section>

      <Section title="Radioterapia">
        <Input
          name="recibioRadioterapia"
          placeholder="¿Recibió radioterapia?"
        />
        <Input
          name="numeroSesionesRT"
          placeholder="Número sesiones radioterapia"
        />
        <Input
          name="fechaInicioRT"
          type="date"
          placeholder="Fecha inicio radioterapia"
        />
        <Input name="ubicacionRT" placeholder="Ubicación radioterapia" />
        <Input name="tipoRT" placeholder="Tipo radioterapia" />
        <Input name="numeroIPSRT" placeholder="Número IPS radioterapia" />
        <Input name="codigoIPS1RT" placeholder="Código IPS1 RT" />
        <Input name="codigoIPS2RT" placeholder="Código IPS2 RT" />
        <Input
          name="fechaFinRT"
          type="date"
          placeholder="Fecha finalización RT"
        />
        <Input
          name="caracteristicasRT"
          placeholder="Características radioterapia"
        />
        <Input name="motivoFinRT" placeholder="Motivo finalización RT" />
        <Input
          name="fechaInicioUltimoRT"
          type="date"
          placeholder="Fecha inicio último esquema RT"
        />
        <Input
          name="ubicacionUltimoRT"
          placeholder="Ubicación último esquema RT"
        />
        <Input name="tipoUltimoRT" placeholder="Tipo último esquema RT" />
        <Input name="numeroIPSUltimoRT" placeholder="Número IPS último RT" />
        <Input name="codigoIPS1UltimoRT" placeholder="Código IPS1 último RT" />
        <Input name="codigoIPS2UltimoRT" placeholder="Código IPS2 último RT" />
        <Input
          name="fechaFinUltimoRT"
          type="date"
          placeholder="Fecha fin último RT"
        />
        <Input
          name="caracteristicasUltimoRT"
          placeholder="Características último esquema RT"
        />
        <Input
          name="motivoFinUltimoRT"
          placeholder="Motivo fin último esquema RT"
        />
      </Section>

      <Section title="Trasplante y rehabilitación">
        <Input name="recibioTrasplante" placeholder="¿Recibió trasplante?" />
        <Input name="tipoTrasplante" placeholder="Tipo de trasplante" />
        <Input name="ubicacionTrasplante" placeholder="Ubicación trasplante" />
        <Input
          name="fechaTrasplante"
          type="date"
          placeholder="Fecha trasplante"
        />
        <Input name="codigoIPSTrasplante" placeholder="Código IPS trasplante" />
        <Input
          name="cirugiaReconstructiva"
          placeholder="¿Recibió cirugía reconstructiva?"
        />
        <Input
          name="fechaCirugiaReconstructiva"
          type="date"
          placeholder="Fecha cirugía reconstructiva"
        />
        <Input
          name="codigoIPSCirugiaRecon"
          placeholder="Código IPS cirugía reconstructiva"
        />
      </Section>

      <Section title="Cuidados paliativos y otras consultas">
        <Input
          name="valoradoCuidadosPaliativos"
          placeholder="¿Valorado en cuidados paliativos?"
        />
        <Input
          name="cuidadosPorEspecialista"
          placeholder="Valoración por especialista paliativo"
        />
        <Input
          name="cuidadosPorProfesionalSalud"
          placeholder="Valoración por profesional no médico"
        />
        <Input
          name="cuidadosPorOtroEspecialista"
          placeholder="Valoración por otro especialista"
        />
        <Input
          name="cuidadosPorMedicoGeneral"
          placeholder="Valoración por médico general"
        />
        <Input
          name="cuidadosPorTrabajoSocial"
          placeholder="Valoración por trabajo social"
        />
        <Input
          name="cuidadosPorOtroProfesional"
          placeholder="Valoración por otro profesional"
        />
        <Input
          name="fechaPrimeraValoracionPaliativa"
          type="date"
          placeholder="Fecha primera valoración paliativa"
        />
        <Input
          name="codigoIPSPaliativa"
          placeholder="Código IPS cuidados paliativos"
        />
        <Input
          name="valoradoPsiquiatria"
          placeholder="¿Valorado por psiquiatría?"
        />
        <Input
          name="fechaConsultaPsiquiatria"
          type="date"
          placeholder="Fecha consulta psiquiatría"
        />
        <Input
          name="codigoIPSPsiquiatria"
          placeholder="Código IPS psiquiatría"
        />
        <Input
          name="valoradoNutricion"
          placeholder="¿Valorado por nutrición?"
        />
        <Input
          name="fechaConsultaNutricion"
          type="date"
          placeholder="Fecha consulta nutrición"
        />
        <Input name="codigoIPSNutricion" placeholder="Código IPS nutrición" />
        <Input
          name="recibioSoporteNutricional"
          placeholder="¿Recibió soporte nutricional?"
        />
        <Input
          name="terapiasComplementarias"
          placeholder="¿Recibió terapias complementarias?"
        />
        <Input
          name="tratamientoActual"
          placeholder="Tipo de tratamiento actual"
        />
        <Input name="resultadoFinal" placeholder="Resultado final del manejo" />
        <Input name="estadoVitalFinal" placeholder="Estado vital final" />
        <Input
          name="novedadAdministrativa"
          placeholder="Novedad administrativa"
        />
        <Input name="novedadClinica" placeholder="Novedad clínica" />
        <Input
          name="fechaDesafiliacion"
          type="date"
          placeholder="Fecha desafiliación EPS"
        />
        <Input name="fechaMuerte" type="date" placeholder="Fecha de muerte" />
        <Input name="causaMuerte" placeholder="Causa de muerte" />
        <Input
          name="codigoUnicoIdentificacion"
          placeholder="Código único (BDUA-BDEX-PVS)"
        />
        <Input name="fechaCorte" type="date" placeholder="Fecha de corte" />
      </Section>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Guardar
      </button>
    </form>
  );
}

export default Formulario247M;