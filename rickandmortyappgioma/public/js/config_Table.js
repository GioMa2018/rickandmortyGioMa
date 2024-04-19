
$(document).ready(() => {
  $('#Nombre_Tabla').DataTable({
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
    },
    responsive: true,
    dom: 'Bfrtilp',
    buttons: [
      {
        extend: 'excelHtml5',
        text: '<i class="bi bi-file-earmark-spreadsheet-fill"></i>',
        titleAttr: 'Exportar a Excel',
        className: 'btn btn-success'
      },
      {
        extend: 'pdfHtml5',
        text: '<i class="bi bi-file-pdf-fill"></i>',
        titleAttr: 'Exportar a PDF',
        className: 'btn btn-danger'
      },
      {
        extend: 'print',
        text: '<i class="bi bi-printer-fill"></i>',
        titleAttr: 'Imprimir',
        className: 'btn btn-primary'
      }],
  });
});

