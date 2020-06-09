
(function($){

    $(document).ready(function() {
        var editor = new $.fn.dataTable.Editor( {
            ajax: '/api/Avistamiento',
            table: '#Avistamiento',
            fields: [
                {
                    "label": "Nombre:",
                    "name": "nombre"
                },
                {
                    "label": "Fecha:",
                    "name": "fecha",
                    "type": "datetime",
                    "format": "DD-MM-YY"
                },
                {
                    "label": "Hora:",
                    "name": "hora",
                    "type": "datetime",
                    "format": "HH:mm"
                },
                {
                    "label": "Lugar:",
                    "name": "lugar"
                },
                {
                    "label": "Cantidad:",
                    "name": "cantidad"
                }
            ]
        } );
    
        var table = $('#Avistamiento').DataTable( {
            ajax: '/api/Avistamiento',
            columns: [
                {
                    "data": "nombre"
                },
                {
                    "data": "fecha"
                },
                {
                    "data": "hora"
                },
                {
                    "data": "lugar"
                },
                {
                    "data": "cantidad"
                }
            ],
            select: true,
            lengthChange: false
        } );
    
        new $.fn.dataTable.Buttons( table, [
            { extend: "nuevafila", editor: editor },
            
        ] );
    
        table.buttons().container()
            .prependTo( $('div.fg-toolbar:eq(0)', table.table().container() ) );
    } );
    
    }(jQuery));
    