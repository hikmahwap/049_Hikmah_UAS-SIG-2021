var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access:roof': 'access:roof', 'addr:city': 'addr:city', 'backup_generator': 'backup_generator', 'building:condition': 'building:condition', 'building:floor': 'building:floor', 'building:levels': 'building:levels', 'building:material': 'building:material', 'building:roof': 'building:roof', 'building:structure': 'building:structure', 'capacity:persons': 'capacity:persons', 'addr:full': 'addr:full', 'name': 'name', 'shop': 'shop', 'operator:type': 'operator:type', 'amenity': 'amenity', 'religion': 'religion', 'office': 'office', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'admin_level': 'admin_level', 'addr:housenumber': 'addr:housenumber', 'air_conditioning': 'air_conditioning', 'brand': 'brand', 'description': 'description', 'email': 'email', 'image': 'image', 'internet_access': 'internet_access', 'internet_access:fee': 'internet_access:fee', 'reservation': 'reservation', 'rooms': 'rooms', 'stars': 'stars', 'tourism': 'tourism', 'website': 'website', 'access': 'access', 'covered': 'covered', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'access:roof': '', 'addr:city': '', 'backup_generator': '', 'building:condition': '', 'building:floor': '', 'building:levels': '', 'building:material': '', 'building:roof': '', 'building:structure': '', 'capacity:persons': '', 'addr:full': '', 'name': '', 'shop': '', 'operator:type': '', 'amenity': '', 'religion': '', 'office': '', 'addr:postcode': '', 'addr:street': '', 'admin_level': '', 'addr:housenumber': '', 'air_conditioning': '', 'brand': '', 'description': '', 'email': '', 'image': '', 'internet_access': '', 'internet_access:fee': '', 'reservation': '', 'rooms': '', 'stars': '', 'tourism': '', 'website': '', 'access': '', 'covered': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access:roof': 'no label', 'addr:city': 'no label', 'backup_generator': 'no label', 'building:condition': 'no label', 'building:floor': 'no label', 'building:levels': 'no label', 'building:material': 'no label', 'building:roof': 'no label', 'building:structure': 'no label', 'capacity:persons': 'no label', 'addr:full': 'no label', 'name': 'no label', 'shop': 'no label', 'operator:type': 'no label', 'amenity': 'no label', 'religion': 'no label', 'office': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'admin_level': 'no label', 'addr:housenumber': 'no label', 'air_conditioning': 'no label', 'brand': 'no label', 'description': 'no label', 'email': 'no label', 'image': 'no label', 'internet_access': 'no label', 'internet_access:fee': 'no label', 'reservation': 'no label', 'rooms': 'no label', 'stars': 'no label', 'tourism': 'no label', 'website': 'no label', 'access': 'no label', 'covered': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});