var wms_layers = [];

var format_DESA_0 = new ol.format.GeoJSON();
var features_DESA_0 = format_DESA_0.readFeatures(json_DESA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_0.addFeatures(features_DESA_0);
var lyr_DESA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESA_0, 
                style: style_DESA_0,
                popuplayertitle: "DESA",
                interactive: true,
    title: 'DESA<br />\
    <img src="styles/legend/DESA_0_0.png" /> R02/RW03<br />\
    <img src="styles/legend/DESA_0_1.png" /> RT01/RW01<br />\
    <img src="styles/legend/DESA_0_2.png" /> RT01/RW02<br />\
    <img src="styles/legend/DESA_0_3.png" /> RT01/RW03<br />\
    <img src="styles/legend/DESA_0_4.png" /> RT01/RW04<br />\
    <img src="styles/legend/DESA_0_5.png" /> RT01/RW05<br />\
    <img src="styles/legend/DESA_0_6.png" /> RT02/RW02<br />\
    <img src="styles/legend/DESA_0_7.png" /> RT02/RW04<br />\
    <img src="styles/legend/DESA_0_8.png" /> RT02/RW05<br />\
    <img src="styles/legend/DESA_0_9.png" /> RT02/RW1<br />\
    <img src="styles/legend/DESA_0_10.png" /> RT03/RW01<br />\
    <img src="styles/legend/DESA_0_11.png" /> RT03/RW02<br />\
    <img src="styles/legend/DESA_0_12.png" /> RT03/RW03<br />\
    <img src="styles/legend/DESA_0_13.png" /> RT03/RW04<br />\
    <img src="styles/legend/DESA_0_14.png" /> RT03/RW05<br />\
    <img src="styles/legend/DESA_0_15.png" /> RT04/RW01<br />\
    <img src="styles/legend/DESA_0_16.png" /> RT04/RW02<br />\
    <img src="styles/legend/DESA_0_17.png" /> RT04/RW03<br />\
    <img src="styles/legend/DESA_0_18.png" /> RT04/RW04<br />\
    <img src="styles/legend/DESA_0_19.png" /> RT04/RW05<br />\
    <img src="styles/legend/DESA_0_20.png" /> RT05/RW01<br />\
    <img src="styles/legend/DESA_0_21.png" /> RT05/RW02<br />\
    <img src="styles/legend/DESA_0_22.png" /> RT05/RW03<br />\
    <img src="styles/legend/DESA_0_23.png" /> RT05/RW04<br />\
    <img src="styles/legend/DESA_0_24.png" /> RT05/RW05<br />\
    <img src="styles/legend/DESA_0_25.png" /> RT06/RW01<br />\
    <img src="styles/legend/DESA_0_26.png" /> RT06/RW02<br />\
    <img src="styles/legend/DESA_0_27.png" /> RT06/RW03<br />\
    <img src="styles/legend/DESA_0_28.png" /> RT06/RW04<br />\
    <img src="styles/legend/DESA_0_29.png" /> RT06/RW05<br />\
    <img src="styles/legend/DESA_0_30.png" /> RT07/RW02<br />\
    <img src="styles/legend/DESA_0_31.png" /> RT07/RW03<br />\
    <img src="styles/legend/DESA_0_32.png" /> RT07/RW04<br />\
    <img src="styles/legend/DESA_0_33.png" /> RT07/RW05<br />\
    <img src="styles/legend/DESA_0_34.png" /> RT08/RW03<br />\
    <img src="styles/legend/DESA_0_35.png" /> RT08/RW04<br />\
    <img src="styles/legend/DESA_0_36.png" /> RT09/RW03<br />\
    <img src="styles/legend/DESA_0_37.png" /> RW06<br />\
    <img src="styles/legend/DESA_0_38.png" /> RT01/RW06<br />\
    <img src="styles/legend/DESA_0_39.png" /> RT02/RW06<br />\
    <img src="styles/legend/DESA_0_40.png" /> RT03/RW06<br />\
    <img src="styles/legend/DESA_0_41.png" /> RT04/RW06<br />\
    <img src="styles/legend/DESA_0_42.png" /> RT05/RW06<br />\
    <img src="styles/legend/DESA_0_43.png" /> RT06/RW06<br />\
    <img src="styles/legend/DESA_0_44.png" /> RT07/RW06<br />\
    <img src="styles/legend/DESA_0_45.png" /> RT08/RW05<br />\
    <img src="styles/legend/DESA_0_46.png" /> RT09/RW06<br />\
    <img src="styles/legend/DESA_0_47.png" /> <br />\
    <img src="styles/legend/DESA_0_48.png" /> RT10/RW06<br />'
        });
var format_Persawahan_1 = new ol.format.GeoJSON();
var features_Persawahan_1 = format_Persawahan_1.readFeatures(json_Persawahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Persawahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persawahan_1.addFeatures(features_Persawahan_1);
var lyr_Persawahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Persawahan_1, 
                style: style_Persawahan_1,
                popuplayertitle: "Persawahan",
                interactive: true,
                title: '<img src="styles/legend/Persawahan_1.png" /> Persawahan'
            });
var format_JalanTambahan_2 = new ol.format.GeoJSON();
var features_JalanTambahan_2 = format_JalanTambahan_2.readFeatures(json_JalanTambahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanTambahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanTambahan_2.addFeatures(features_JalanTambahan_2);
var lyr_JalanTambahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanTambahan_2, 
                style: style_JalanTambahan_2,
                popuplayertitle: "Jalan Tambahan",
                interactive: true,
                title: '<img src="styles/legend/JalanTambahan_2.png" /> Jalan Tambahan'
            });
var format_KEDUNGREJA_line_3 = new ol.format.GeoJSON();
var features_KEDUNGREJA_line_3 = format_KEDUNGREJA_line_3.readFeatures(json_KEDUNGREJA_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEDUNGREJA_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEDUNGREJA_line_3.addFeatures(features_KEDUNGREJA_line_3);
var lyr_KEDUNGREJA_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEDUNGREJA_line_3, 
                style: style_KEDUNGREJA_line_3,
                popuplayertitle: "KEDUNGREJA_line",
                interactive: true,
    title: 'KEDUNGREJA_line<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_0.png" /> <br />\
    <img src="styles/legend/KEDUNGREJA_line_3_1.png" /> Ci Tanduy<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_2.png" /> Gg.Ketapang<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_3.png" /> Jl.Lapangan<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_4.png" /> Jl.Tegal Bombak<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_5.png" /> Jl.Raya Sidanegara<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_6.png" /> Jl.Asem<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_7.png" /> Jl.Mahoni<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_8.png" /> Gg.Tanggul<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_9.png" /> Jl.Rancah Indah II<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_10.png" /> Gg.Delima<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_11.png" /> Jl.Al Badar<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_12.png" /> Jl.Pesantren I<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_13.png" /> Jl.Pesantren II<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_14.png" /> Jl.Tasik Madu<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_15.png" /> Gg.Amartani<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_16.png" /> Jl.Amarta<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_17.png" /> Gg.Al Hidayah<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_18.png" /> Gg.Ampera<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_19.png" /> Gg.Kerucit<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_20.png" /> Jl. Nogosari<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_21.png" /> Jl.Al Falah<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_22.png" /> Jl.Bangkirlega<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_23.png" /> Jl.Irigasi<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_24.png" /> Jl.Lempuyangan<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_25.png" /> Jl.Nusawuluh<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_26.png" /> Jl.Penisihan<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_27.png" /> Jl.Sinar Kasih<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_28.png" /> Gg.Sukun<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_29.png" /> Jl.Cabe Rawit<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_30.png" /> Jl.Cinta Damai<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_31.png" /> Jl.Kacang Panjang<br />\
    <img src="styles/legend/KEDUNGREJA_line_3_32.png" /> Jl.Rancah Indah I<br />'
        });
var format_building_poly_4 = new ol.format.GeoJSON();
var features_building_poly_4 = format_building_poly_4.readFeatures(json_building_poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_poly_4.addFeatures(features_building_poly_4);
var lyr_building_poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_poly_4, 
                style: style_building_poly_4,
                popuplayertitle: "building_poly",
                interactive: true,
                title: '<img src="styles/legend/building_poly_4.png" /> building_poly'
            });
var format_Rancah_5 = new ol.format.GeoJSON();
var features_Rancah_5 = format_Rancah_5.readFeatures(json_Rancah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rancah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rancah_5.addFeatures(features_Rancah_5);
var lyr_Rancah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rancah_5, 
                style: style_Rancah_5,
                popuplayertitle: "Rancah",
                interactive: true,
                title: '<img src="styles/legend/Rancah_5.png" /> Rancah'
            });
var format_Tanggul_6 = new ol.format.GeoJSON();
var features_Tanggul_6 = format_Tanggul_6.readFeatures(json_Tanggul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanggul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanggul_6.addFeatures(features_Tanggul_6);
var lyr_Tanggul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanggul_6, 
                style: style_Tanggul_6,
                popuplayertitle: "Tanggul",
                interactive: true,
                title: '<img src="styles/legend/Tanggul_6.png" /> Tanggul'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_TanahKosong_8 = new ol.format.GeoJSON();
var features_TanahKosong_8 = format_TanahKosong_8.readFeatures(json_TanahKosong_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahKosong_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahKosong_8.addFeatures(features_TanahKosong_8);
var lyr_TanahKosong_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahKosong_8, 
                style: style_TanahKosong_8,
                popuplayertitle: "Tanah Kosong",
                interactive: true,
                title: '<img src="styles/legend/TanahKosong_8.png" /> Tanah Kosong'
            });
var format_KaliTambahan_9 = new ol.format.GeoJSON();
var features_KaliTambahan_9 = format_KaliTambahan_9.readFeatures(json_KaliTambahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KaliTambahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaliTambahan_9.addFeatures(features_KaliTambahan_9);
var lyr_KaliTambahan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaliTambahan_9, 
                style: style_KaliTambahan_9,
                popuplayertitle: "Kali Tambahan",
                interactive: true,
                title: '<img src="styles/legend/KaliTambahan_9.png" /> Kali Tambahan'
            });
var format_Kali_10 = new ol.format.GeoJSON();
var features_Kali_10 = format_Kali_10.readFeatures(json_Kali_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kali_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kali_10.addFeatures(features_Kali_10);
var lyr_Kali_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kali_10, 
                style: style_Kali_10,
                popuplayertitle: "Kali",
                interactive: true,
                title: '<img src="styles/legend/Kali_10.png" /> Kali'
            });
var format_KEDUNGREJA_point_11 = new ol.format.GeoJSON();
var features_KEDUNGREJA_point_11 = format_KEDUNGREJA_point_11.readFeatures(json_KEDUNGREJA_point_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEDUNGREJA_point_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEDUNGREJA_point_11.addFeatures(features_KEDUNGREJA_point_11);
var lyr_KEDUNGREJA_point_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEDUNGREJA_point_11, 
                style: style_KEDUNGREJA_point_11,
                popuplayertitle: "KEDUNGREJA_point",
                interactive: true,
                title: '<img src="styles/legend/KEDUNGREJA_point_11.png" /> KEDUNGREJA_point'
            });
var format_Gambar_12 = new ol.format.GeoJSON();
var features_Gambar_12 = format_Gambar_12.readFeatures(json_Gambar_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gambar_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gambar_12.addFeatures(features_Gambar_12);
var lyr_Gambar_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gambar_12, 
                style: style_Gambar_12,
                popuplayertitle: "Gambar",
                interactive: true,
    title: 'Gambar<br />\
    <img src="styles/legend/Gambar_12_0.png" /> Warung Padang<br />\
    <img src="styles/legend/Gambar_12_1.png" /> Warung Mendoan Bu Erni<br />\
    <img src="styles/legend/Gambar_12_2.png" /> Warung Kelontong<br />\
    <img src="styles/legend/Gambar_12_3.png" /> Warung Bu Atun Minimarket<br />\
    <img src="styles/legend/Gambar_12_4.png" /> TPQ Al Badar<br />\
    <img src="styles/legend/Gambar_12_5.png" /> Toko Suvenir HM<br />\
    <img src="styles/legend/Gambar_12_6.png" /> Toko Suku Cadangan Motor<br />\
    <img src="styles/legend/Gambar_12_7.png" /> Toko Sembako mba roi<br />\
    <img src="styles/legend/Gambar_12_8.png" /> Toko Sekar Kencana<br />\
    <img src="styles/legend/Gambar_12_9.png" /> Toko Rahmat Alwan<br />\
    <img src="styles/legend/Gambar_12_10.png" /> Toko Perlengkapan Rumah<br />\
    <img src="styles/legend/Gambar_12_11.png" /> Toko Mugi Jaya Putri<br />\
    <img src="styles/legend/Gambar_12_12.png" /> Toko Gibran dan Outlet Luthfi Cell<br />\
    <img src="styles/legend/Gambar_12_13.png" /> Toko Bunga<br />\
    <img src="styles/legend/Gambar_12_14.png" /> Spot Njaer<br />\
    <img src="styles/legend/Gambar_12_15.png" /> SDN Sidanegara 03<br />\
    <img src="styles/legend/Gambar_12_16.png" /> SDN Sidanegara 02<br />\
    <img src="styles/legend/Gambar_12_17.png" /> SDN Sidanegara 01<br />\
    <img src="styles/legend/Gambar_12_18.png" /> Sanggar Wayang Kulit Dalang Sikin<br />\
    <img src="styles/legend/Gambar_12_19.png" /> Rumah Desi Riyanti<br />\
    <img src="styles/legend/Gambar_12_20.png" /> Rigid Cinawang<br />\
    <img src="styles/legend/Gambar_12_21.png" /> Rashan Florist Toko Suvenir<br />\
    <img src="styles/legend/Gambar_12_22.png" /> Pusat Pembelanjaan<br />\
    <img src="styles/legend/Gambar_12_23.png" /> Pt.Sejahtera Eka Pratama<br />\
    <img src="styles/legend/Gambar_12_24.png" /> Privat Bahasa Korea<br />\
    <img src="styles/legend/Gambar_12_25.png" /> PP.MUS<br />\
    <img src="styles/legend/Gambar_12_26.png" /> Pondok Pesantrn Al Falah<br />\
    <img src="styles/legend/Gambar_12_27.png" /> Pondok Pesantren Darul Muttaqien<br />\
    <img src="styles/legend/Gambar_12_28.png" /> Pom Mini Riyadi<br />\
    <img src="styles/legend/Gambar_12_29.png" /> Pinggir Tanggul<br />\
    <img src="styles/legend/Gambar_12_30.png" /> Penjual Aksesoris Jahit<br />\
    <img src="styles/legend/Gambar_12_31.png" /> Pasar Panisihan<br />\
    <img src="styles/legend/Gambar_12_32.png" /> Pasar Ledeng<br />\
    <img src="styles/legend/Gambar_12_33.png" /> Musholla Riyadul Muslim<br />\
    <img src="styles/legend/Gambar_12_34.png" /> Musholla Miftahul Huda<br />\
    <img src="styles/legend/Gambar_12_35.png" /> Musholla Baiturrosyidin Sidanegara<br />\
    <img src="styles/legend/Gambar_12_36.png" /> Musholla Baitul Muttaqin<br />\
    <img src="styles/legend/Gambar_12_37.png" /> Musholla At-Tarbiyatussholih<br />\
    <img src="styles/legend/Gambar_12_38.png" /> Musholla Al-Islah<br />\
    <img src="styles/legend/Gambar_12_39.png" /> Musholla Al-Amin Sidanegara<br />\
    <img src="styles/legend/Gambar_12_40.png" /> Musholah Nurul Huda<br />\
    <img src="styles/legend/Gambar_12_41.png" /> Mushola Nurul Hamid<br />\
    <img src="styles/legend/Gambar_12_42.png" /> Mushola Nurul Fatah<br />\
    <img src="styles/legend/Gambar_12_43.png" /> Mushola Nurssalam<br />\
    <img src="styles/legend/Gambar_12_44.png" /> Mushola Baitul Munir Sidadadi<br />\
    <img src="styles/legend/Gambar_12_45.png" /> Mushola BAITUL AMAL NUSA INDAH<br />\
    <img src="styles/legend/Gambar_12_46.png" /> Mushola At-Tarbiyah<br />\
    <img src="styles/legend/Gambar_12_47.png" /> Mushola Al-Barokah<br />\
    <img src="styles/legend/Gambar_12_48.png" /> MTS Banumangun Kedungreja<br />\
    <img src="styles/legend/Gambar_12_49.png" /> MIN 4 Cilacap<br />\
    <img src="styles/legend/Gambar_12_50.png" /> Mie Bakso Ojo Lali<br />\
    <img src="styles/legend/Gambar_12_51.png" /> Mie Ayam Bakso Silvy Mi<br />\
    <img src="styles/legend/Gambar_12_52.png" /> MI Al Ma\'Arif Sidanegara<br />\
    <img src="styles/legend/Gambar_12_53.png" /> Masjid Jami\' Asyofa<br />\
    <img src="styles/legend/Gambar_12_54.png" /> Masjid Jami\' Al-Huda Sidadadi<br />\
    <img src="styles/legend/Gambar_12_55.png" /> Masjid Baiturrohim Sidanegara<br />\
    <img src="styles/legend/Gambar_12_56.png" /> Majelis Al-Khoirot<br />\
    <img src="styles/legend/Gambar_12_57.png" /> Lapangan Voli Mataram<br />\
    <img src="styles/legend/Gambar_12_58.png" /> Lapangan Krida Bangun Utama Desa Sidanegara<br />\
    <img src="styles/legend/Gambar_12_59.png" /> Lapangan Bulu Tangkis<br />\
    <img src="styles/legend/Gambar_12_60.png" /> Konfeksi Ibu Siti Nuriyah<br />\
    <img src="styles/legend/Gambar_12_61.png" /> Kios Arkan<br />\
    <img src="styles/legend/Gambar_12_62.png" /> Kendar NN lure Toko Umpan Pancing<br />\
    <img src="styles/legend/Gambar_12_63.png" /> Kedai Ungu<br />\
    <img src="styles/legend/Gambar_12_64.png" /> Kedai Fadilah<br />\
    <img src="styles/legend/Gambar_12_65.png" /> Jual Kain Mori/Kain Kafan<br />\
    <img src="styles/legend/Gambar_12_66.png" /> Herman Banana<br />\
    <img src="styles/legend/Gambar_12_67.png" /> Giandra Cell<br />\
    <img src="styles/legend/Gambar_12_68.png" /> Gedung MA Banumangun Kedungreja<br />\
    <img src="styles/legend/Gambar_12_69.png" /> Fahri Barbershop<br />\
    <img src="styles/legend/Gambar_12_70.png" /> Dinamik Photography & Videography<br />\
    <img src="styles/legend/Gambar_12_71.png" /> Ayam Mas Ipank<br />\
    <img src="styles/legend/Gambar_12_72.png" /> Alifudin Fried Chicken<br />\
    <img src="styles/legend/Gambar_12_73.png" /> Aeni Salon<br />\
    <img src="styles/legend/Gambar_12_74.png" /> <br />\
    <img src="styles/legend/Gambar_12_75.png" /> Aeny Salon<br />\
    <img src="styles/legend/Gambar_12_76.png" /> Alat Audio & Travel<br />\
    <img src="styles/legend/Gambar_12_77.png" /> Aneka Cemilan Khalisa snack<br />\
    <img src="styles/legend/Gambar_12_78.png" /> ASM SPAREPART<br />\
    <img src="styles/legend/Gambar_12_79.png" /> Bakul Tahu Khoerun<br />\
    <img src="styles/legend/Gambar_12_80.png" /> BAROKAH sriping & sale pisang<br />\
    <img src="styles/legend/Gambar_12_81.png" /> Den All Trefel<br />\
    <img src="styles/legend/Gambar_12_82.png" /> DINAMIK Pthography & Video<br />\
    <img src="styles/legend/Gambar_12_83.png" /> Ektra Jaya Multimedia<br />\
    <img src="styles/legend/Gambar_12_84.png" /> Kantor Kepala Desa Sidanegara Kedungreja<br />\
    <img src="styles/legend/Gambar_12_85.png" /> Karina Tart/Cake<br />\
    <img src="styles/legend/Gambar_12_86.png" /> Konveksi Baju<br />\
    <img src="styles/legend/Gambar_12_87.png" /> Konveksi Siti Nuriyah<br />\
    <img src="styles/legend/Gambar_12_88.png" /> Lapangan Bulutangkis<br />\
    <img src="styles/legend/Gambar_12_89.png" /> Majelis Al-Khoirot Tegal Bombak Pemisihan<br />\
    <img src="styles/legend/Gambar_12_90.png" /> Masjid Biturrohim Sidanegara<br />\
    <img src="styles/legend/Gambar_12_91.png" /> Masjid Darul Ma\'arif<br />\
    <img src="styles/legend/Gambar_12_92.png" /> MAXIMA Bordir Komputer<br />\
    <img src="styles/legend/Gambar_12_93.png" /> Meubel/Furniture<br />\
    <img src="styles/legend/Gambar_12_94.png" /> Mie Ayam Bakso Silvy<br />\
    <img src="styles/legend/Gambar_12_95.png" /> Mie Ojo Lali Bakso<br />\
    <img src="styles/legend/Gambar_12_96.png" /> MIN 4 CILACAP<br />\
    <img src="styles/legend/Gambar_12_97.png" /> Mushola Ar Rokhman<br />\
    <img src="styles/legend/Gambar_12_98.png" /> Mushola Baitul Munir<br />\
    <img src="styles/legend/Gambar_12_99.png" /> Mushola Baitul Muttaqim<br />\
    <img src="styles/legend/Gambar_12_100.png" /> Mushola Biturrosyidin Sidanegara<br />\
    <img src="styles/legend/Gambar_12_101.png" /> Mushola Darunnadwah<br />\
    <img src="styles/legend/Gambar_12_102.png" /> Mushola Nurrsalam<br />\
    <img src="styles/legend/Gambar_12_103.png" /> Mushola Nurul Huda<br />\
    <img src="styles/legend/Gambar_12_104.png" /> Mushola Riyadul Muslimin<br />\
    <img src="styles/legend/Gambar_12_105.png" /> Musholla Al-Barokah<br />\
    <img src="styles/legend/Gambar_12_106.png" /> Musholla At-Tarbiyah<br />\
    <img src="styles/legend/Gambar_12_107.png" /> Musholla Baitul<br />\
    <img src="styles/legend/Gambar_12_108.png" /> Musholla Raudlotul Mubtadi\'in<br />\
    <img src="styles/legend/Gambar_12_109.png" /> Penggilingan Sabut Kelapa Sidadadi<br />\
    <img src="styles/legend/Gambar_12_110.png" /> Peternakan Sapi Bimo<br />\
    <img src="styles/legend/Gambar_12_111.png" /> Pom Mini Dua Putri<br />\
    <img src="styles/legend/Gambar_12_112.png" /> Pondok Pesantren Al- Falah<br />\
    <img src="styles/legend/Gambar_12_113.png" /> PP.Mushola<br />\
    <img src="styles/legend/Gambar_12_114.png" /> Private Bahasa Korea<br />\
    <img src="styles/legend/Gambar_12_115.png" /> PT NOBLE WAREHOUSE<br />\
    <img src="styles/legend/Gambar_12_116.png" /> Pusat Pembelanjaan Tani Sri Rejeki<br />\
    <img src="styles/legend/Gambar_12_117.png" /> Pusat Peralatan Dapur Vienta Kedungreja<br />\
    <img src="styles/legend/Gambar_12_118.png" /> Roni Cell<br />\
    <img src="styles/legend/Gambar_12_119.png" /> Rshan Lorist Toko Suvenir<br />\
    <img src="styles/legend/Gambar_12_120.png" /> RZ STUDIO CUKUR<br />\
    <img src="styles/legend/Gambar_12_121.png" /> SD Negeri Sidanegara 04<br />\
    <img src="styles/legend/Gambar_12_122.png" /> SD Negri Sidanegara 02<br />\
    <img src="styles/legend/Gambar_12_123.png" /> Sekar Kencana Collection<br />\
    <img src="styles/legend/Gambar_12_124.png" /> Shaher Cell<br />\
    <img src="styles/legend/Gambar_12_125.png" /> Soto Ayam Kuning Nando<br />\
    <img src="styles/legend/Gambar_12_126.png" /> SpotNjaer<br />\
    <img src="styles/legend/Gambar_12_127.png" /> Sulistya Pinky Kay Boba<br />\
    <img src="styles/legend/Gambar_12_128.png" /> Tanto Mebeul<br />\
    <img src="styles/legend/Gambar_12_129.png" /> TB Pelita Mulya<br />\
    <img src="styles/legend/Gambar_12_130.png" /> Toko Bagas<br />\
    <img src="styles/legend/Gambar_12_131.png" /> Toko HM Jaya Parsel<br />\
    <img src="styles/legend/Gambar_12_132.png" /> Toko Kusen<br />\
    <img src="styles/legend/Gambar_12_133.png" /> Toko Sembako roifatun<br />\
    <img src="styles/legend/Gambar_12_134.png" /> Toko Sembako Tito<br />\
    <img src="styles/legend/Gambar_12_135.png" /> Toko Sony<br />\
    <img src="styles/legend/Gambar_12_136.png" /> Toko Umpan Pancing<br />\
    <img src="styles/legend/Gambar_12_137.png" /> TPQ AL-HIDAYAH<br />\
    <img src="styles/legend/Gambar_12_138.png" /> Travel & ekspedisi lestari<br />\
    <img src="styles/legend/Gambar_12_139.png" /> Warung Bu Atun<br />\
    <img src="styles/legend/Gambar_12_140.png" /> Warung Kopi Mba Wiji<br />\
    <img src="styles/legend/Gambar_12_141.png" /> Warung Makan Padang<br />\
    <img src="styles/legend/Gambar_12_142.png" /> Warung Mama iit<br />\
    <img src="styles/legend/Gambar_12_143.png" /> Warung Mendoan Bu.Eni<br />\
    <img src="styles/legend/Gambar_12_144.png" /> Watijan Salon<br />\
    <img src="styles/legend/Gambar_12_145.png" /> Yuni Zahwa Amoorea 1<br />\
    <img src="styles/legend/Gambar_12_146.png" /> Zabid Farm House<br />'
        });

lyr_DESA_0.setVisible(true);lyr_Persawahan_1.setVisible(true);lyr_JalanTambahan_2.setVisible(true);lyr_KEDUNGREJA_line_3.setVisible(true);lyr_building_poly_4.setVisible(true);lyr_Rancah_5.setVisible(true);lyr_Tanggul_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_TanahKosong_8.setVisible(true);lyr_KaliTambahan_9.setVisible(true);lyr_Kali_10.setVisible(true);lyr_KEDUNGREJA_point_11.setVisible(true);lyr_Gambar_12.setVisible(true);
var layersList = [lyr_DESA_0,lyr_Persawahan_1,lyr_JalanTambahan_2,lyr_KEDUNGREJA_line_3,lyr_building_poly_4,lyr_Rancah_5,lyr_Tanggul_6,lyr_Lapangan_7,lyr_TanahKosong_8,lyr_KaliTambahan_9,lyr_Kali_10,lyr_KEDUNGREJA_point_11,lyr_Gambar_12];
lyr_DESA_0.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Dusun': 'Dusun', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', });
lyr_Persawahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanTambahan_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_KEDUNGREJA_line_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_building_poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'access_roo': 'access_roo', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'name': 'name', 'building': 'building', 'building_m': 'building_m', });
lyr_Rancah_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Tanggul_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TanahKosong_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KaliTambahan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Kali_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KEDUNGREJA_point_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Gambar_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Catatan': 'Catatan', });
lyr_DESA_0.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Dusun': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': '', });
lyr_Persawahan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanTambahan_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_KEDUNGREJA_line_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_building_poly_4.set('fieldImages', {'osm_id': '', 'osm_type': '', 'access_roo': '', 'addr_stree': '', 'roof_mater': '', 'addr_house': '', 'name': '', 'building': '', 'building_m': '', });
lyr_Rancah_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Tanggul_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TanahKosong_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KaliTambahan_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Kali_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KEDUNGREJA_point_11.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'place': '', 'communicat': '', 'railway': '', 'network': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'tower': '', 'amenity': '', 'name': '', 'fuel': '', 'communic_1': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'backup_gen': '', 'denominati': '', 'historic': '', 'population': '', 'aeroway': '', 'status': '', 'leisure': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'power': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'admin_leve': '', 'highway': '', 'addr_postc': '', 'pump': '', 'surface': '', 'water': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', 'is_in': '', 'boundary': '', });
lyr_Gambar_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_DESA_0.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Dusun': 'inline label - always visible', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', });
lyr_Persawahan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JalanTambahan_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_KEDUNGREJA_line_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_building_poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'access_roo': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'name': 'no label', 'building': 'no label', 'building_m': 'no label', });
lyr_Rancah_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Tanggul_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TanahKosong_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_KaliTambahan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_Kali_10.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_KEDUNGREJA_point_11.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'inline label - always visible', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_Gambar_12.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Catatan': 'inline label - always visible', });
lyr_Gambar_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});