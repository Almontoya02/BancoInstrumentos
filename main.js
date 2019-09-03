new Vue({
    el: "body",
    
    data: {
      idInstrumento: '',
      nombre: '',
      descripcion: '',
      conceptoAsociados: '',
      numeroGrupos: '',
      participantesGrupo: '',
      proposito: '',
      tiempoDuracion: '',
      criterioGanador: '',
      material: '',
      reglas:'',
      fechaCreacion: ''
    },
    
    methods: {
      mostrarContenido: function() {
        console.log(data);
      }
    }
  });