var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 2.626<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 56.956<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 66.475<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> Sin datos<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 39.602<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 47.709<br />'
        });
var format_ViviendasenreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_5 = format_ViviendasenreasruralesINDEC_5.readFeatures(json_ViviendasenreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_5.addFeatures(features_ViviendasenreasruralesINDEC_5);
var lyr_ViviendasenreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_5, 
                style: style_ViviendasenreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_0.png" /> Sin datos<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_1.png" /> 257<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_2.png" /> 365<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> Sin datos<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 12<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 1.912<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> Sin datos<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 6<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 343.302<br />'
        });
var format_CabezasdebovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_8 = format_CabezasdebovinosMAGyP_8.readFeatures(json_CabezasdebovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_8.addFeatures(features_CabezasdebovinosMAGyP_8);
var lyr_CabezasdebovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_8, 
                style: style_CabezasdebovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_0.png" /> Sin datos<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_1.png" /> 513<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_2.png" /> 36.857<br />'
        });
var format_Capacitaciones2019tcnicas_9 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_9 = format_Capacitaciones2019tcnicas_9.readFeatures(json_Capacitaciones2019tcnicas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_9.addFeatures(features_Capacitaciones2019tcnicas_9);
var lyr_Capacitaciones2019tcnicas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_9, 
                style: style_Capacitaciones2019tcnicas_9,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_9.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_10 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_10 = format_Capacitaciones2018tcnicas_10.readFeatures(json_Capacitaciones2018tcnicas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_10.addFeatures(features_Capacitaciones2018tcnicas_10);
var lyr_Capacitaciones2018tcnicas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_10, 
                style: style_Capacitaciones2018tcnicas_10,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_10.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_Capacitaciones2017_11 = new ol.format.GeoJSON();
var features_Capacitaciones2017_11 = format_Capacitaciones2017_11.readFeatures(json_Capacitaciones2017_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017_11.addFeatures(features_Capacitaciones2017_11);
var lyr_Capacitaciones2017_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017_11, 
                style: style_Capacitaciones2017_11,
                interactive: true,
    title: 'Capacitaciones 2017<br />\
    <img src="styles/legend/Capacitaciones2017_11_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2017_11_1.png" /> Tecnica<br />'
        });
var format_Localidades_12 = new ol.format.GeoJSON();
var features_Localidades_12 = format_Localidades_12.readFeatures(json_Localidades_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_12.addFeatures(features_Localidades_12);
var lyr_Localidades_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_12, 
                style: style_Localidades_12,
                interactive: true,
                title: '<img src="styles/legend/Localidades_12.png" /> Localidades'
            });
var format_BER_13 = new ol.format.GeoJSON();
var features_BER_13 = format_BER_13.readFeatures(json_BER_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_13.addFeatures(features_BER_13);
var lyr_BER_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_13, 
                style: style_BER_13,
                interactive: true,
                title: '<img src="styles/legend/BER_13.png" /> BER'
            });
var format_Delegacin_14 = new ol.format.GeoJSON();
var features_Delegacin_14 = format_Delegacin_14.readFeatures(json_Delegacin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_14.addFeatures(features_Delegacin_14);
var lyr_Delegacin_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_14, 
                style: style_Delegacin_14,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_14.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasenreasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdebovinosMAGyP_8.setVisible(true);lyr_Capacitaciones2019tcnicas_9.setVisible(true);lyr_Capacitaciones2018tcnicas_10.setVisible(true);lyr_Capacitaciones2017_11.setVisible(true);lyr_Localidades_12.setVisible(true);lyr_BER_13.setVisible(true);lyr_Delegacin_14.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasenreasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdebovinosMAGyP_8,lyr_Capacitaciones2019tcnicas_9,lyr_Capacitaciones2018tcnicas_10,lyr_Capacitaciones2017_11,lyr_Localidades_12,lyr_BER_13,lyr_Delegacin_14];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdebovinosMAGyP_8.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_Capacitaciones2019tcnicas_9.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018tcnicas_10.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2017_11.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Localidades_12.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_BER_13.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Delegacin_14.set('fieldAliases', {'localidad': 'localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldImages', {'Viv. Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_8.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_9.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018tcnicas_10.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2017_11.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Localidades_12.set('fieldImages', {'Localidad': 'TextEdit', 'Personas': 'TextEdit', });
lyr_BER_13.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Delegacin_14.set('fieldImages', {'localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_8.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_Capacitaciones2019tcnicas_9.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_10.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2017_11.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Localidades_12.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_BER_13.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Delegacin_14.set('fieldLabels', {'localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_Delegacin_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});