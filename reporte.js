// reporte.js

const META_BOLETOS = 30;

let alumnosData = []; 
let ventasData = [];

// --- 1. JSON INICIALES (Copiados de alumnos.json y ventas_roa.json) ---
const ALUMNOS_JSON_INICIAL = [
  {"nombre": "AARON NAVARRETE", "vendidos_iniciales": 28},
  {"nombre": "ALTAIRA YETEEM CHAGOYA", "vendidos_iniciales": 6},
  {"nombre": "ANTHONY TORRES", "vendidos_iniciales": 6},
  {"nombre": "ARANZA ALVARADO", "vendidos_iniciales": 28},
  {"nombre": "BERLIN ZIMBRÓN", "vendidos_iniciales": 19},
  {"nombre": "BRENDA GONZALEZ", "vendidos_iniciales": 35},
  {"nombre": "CAROLINA TINAJERO", "vendidos_iniciales": 14},
  {"nombre": "ILEANA NOVOA REYES", "vendidos_iniciales": 36},
  {"nombre": "IRENE ALDRETE", "vendidos_iniciales": 0},
  {"nombre": "JUAN AGUILAR", "vendidos_iniciales": 0},
  {"nombre": "JUAN PABLO GONZALEZ UGARTE", "vendidos_iniciales": 12},
  {"nombre": "JULIA JIMENEZ", "vendidos_iniciales": 35},
  {"nombre": "MANUEL RABLING", "vendidos_iniciales": 17},
  {"nombre": "MIGUEL SANCHEZ", "vendidos_iniciales": 24},
  {"nombre": "PAULINA SOLIS SANTÍN", "vendidos_iniciales": 28},
  {"nombre": "PAULINA VALDES", "vendidos_iniciales": 6},
  {"nombre": "REGINA DEL RIO", "vendidos_iniciales": 33},
  {"nombre": "SAMANTHA FRANCINI", "vendidos_iniciales": 29},
  {"nombre": "SANTIAGO RAMIREZ", "vendidos_iniciales": 18},
  {"nombre": "STEPHANIE GONZALEZ", "vendidos_iniciales": 35},
  {"nombre": "VALERIA ALFARO", "vendidos_iniciales": 12},
  {"nombre": "YAADID CHAGOYA", "vendidos_iniciales": 7},
  {"nombre": "HECTOR URRUTIA", "vendidos_iniciales": 25},
  {"nombre": "NACHO", "vendidos_iniciales": 9}
];

const VENTAS_JSON_INICIAL = [
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 5, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 6, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 7, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 8, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 15, "asiento": 1, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 15, "asiento": 2, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 4, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 5, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 6, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 7, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 8, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 1, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 2, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 3, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 2, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "YAADID CHAGOYA", "mesa": 8, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "YAADID CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 8, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 8, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 8, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 8, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 9, "asiento": 5, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "ALTAIRA YETEEM CHAGOYA", "mesa": 9, "asiento": 6, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ALTAIRA YETEEM CHAGOYA"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 4, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 5, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 6, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 7, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 17, "asiento": 8, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "CAROLINA TINAJERO", "mesa": 18, "asiento": 4, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "CAROLINA TINAJERO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 15, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 15, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 6, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 17, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 17, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 17, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 17, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 17, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 6, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 22, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 22, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 1, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 2, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 3, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 18, "asiento": 4, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 1, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 2, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 16, "asiento": 3, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 15, "asiento": 1, "fecha": "F1", "monto": 400, "pago": "Efectivo", "duenio": "ARANZA ALVARADO"},
  {"alumno": "ARANZA ALVARADO", "mesa": 15, "asiento": 2, "fecha": "F1", "monto": 400, "pago": "Efectivo", "duenio": "ARANZA ALVARADO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 4, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 4, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 5, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 6, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 4, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 5, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 6, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 23, "asiento": 6, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 24, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 24, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 24, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 24, "asiento": 4, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 24, "asiento": 5, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 1, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 2, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 9, "asiento": 3, "fecha": "F5", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 1, "fecha": "F6", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 4, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 5, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 6, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "REGINA DEL RIO"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 23, "asiento": 1, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 23, "asiento": 2, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 1, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 2, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 3, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 4, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 5, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 6, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 1, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 2, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 3, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 4, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 20, "asiento": 1, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 14, "asiento": 1, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 14, "asiento": 2, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 14, "asiento": 3, "fecha": "F4", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 9, "asiento": 4, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 1, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 2, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 3, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 11, "asiento": 4, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 23, "asiento": 7, "fecha": "F5", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 5, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 10, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 13, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 13, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 13, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "BERLIN ZIMBRÓN", "mesa": 19, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "BERLIN ZIMBRÓN"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 10, "asiento": 1, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 10, "asiento": 2, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 19, "asiento": 7, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 19, "asiento": 8, "fecha": "F1", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 19, "asiento": 7, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 19, "asiento": 8, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 1, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 2, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 3, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 4, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 5, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "JUAN PABLO GONZALEZ UGARTE", "mesa": 23, "asiento": 6, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "JUAN PABLO GONZALEZ UGARTE"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 1, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 2, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 15, "asiento": 1, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 15, "asiento": 2, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 15, "asiento": 3, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 3, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 6, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 5, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 16, "asiento": 4, "fecha": "F3", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "NACHO"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 7, "fecha": "F4", "monto": 400, "pago": "Transferencia", "duenio": "IGNACIO GONZÁLEZ VARGAS"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 8, "fecha": "F4", "monto": 400, "pago": "Transferencia", "duenio": "DULCE IVON UGARTE GOMEZ"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 1, "fecha": "F5", "monto": 400, "pago": "Transferencia", "duenio": "IGNACIO GONZÁLEZ VARGAS"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 2, "fecha": "F5", "monto": 400, "pago": "Transferencia", "duenio": "DULCE IVON UGARTE GOMEZ"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 6, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "IGNACIO GONZÁLEZ VARGAS"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 7, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "DULCE IVON UGARTE GOMEZ"},
  {"alumno": "NACHO", "mesa": 19, "asiento": 8, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "ARMIDA ROSALVA GOMEZ PAEZ"},
  {"alumno": "NACHO", "mesa": 23, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "ANDREA VALDES RÓO"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 2, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "NATALIA FUERTES"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "NATALIA FUERTES"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 1, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "GABRIELA GONZALEZ ESCALANTE"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 4, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "RODRIGO GONZALEZ ESCALANTE"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 5, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "PATRICIA GONZALEZ UGARTE"},
  {"alumno": "NACHO", "mesa": 14, "asiento": 6, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "RODOLFO SANCHES ARMA P"},
  {"alumno": "NACHO", "mesa": 15, "asiento": 3, "fecha": "F6", "monto": 400, "pago": "Efectivo", "duenio": "JORDY"},
  {"alumno": "REGINA DEL RIO", "mesa": 8, "asiento": 7, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"},
  {"alumno": "REGINA DEL RIO", "mesa": 1, "asiento": 7, "fecha": "F2", "monto": 0, "pago": "ASIGNACION BASE", "duenio": "REGINA DEL RIO"}
];

// La función principal para cargar datos (reemplazo de window.electronAPI.cargarDatos)
async function cargarDatosParaReporte() {
    // 1. Cargar Alumnos: Prioriza localStorage, si no, usa el JSON inicial.
    let storedAlumnos = localStorage.getItem('alumnosData');
    if (storedAlumnos) {
        alumnosData = JSON.parse(storedAlumnos);
    } else {
        alumnosData = ALUMNOS_JSON_INICIAL;
        localStorage.setItem('alumnosData', JSON.stringify(alumnosData));
    }

    // 2. Cargar Ventas: Prioriza localStorage, si no, usa el JSON inicial.
    let storedVentas = localStorage.getItem('ventasData');
    if (storedVentas) {
        ventasData = JSON.parse(storedVentas);
    } else {
        ventasData = VENTAS_JSON_INICIAL;
        localStorage.setItem('ventasData', JSON.stringify(ventasData));
    }
    
    return { success: true, data: { alumnos: alumnosData, ventas: ventasData } };
}

// La función para reescribir ventas (reemplazo de window.electronAPI.reescribirVentas)
async function reescribirVentasParaReporte(ventasList) {
    localStorage.setItem('ventasData', JSON.stringify(ventasList));
    ventasData = ventasList;
    
    // Notifica a la ventana principal para que recargue sus datos
    localStorage.setItem('sales_data_updated', Date.now()); 
    
    return { success: true };
}


// La función principal para cargar y renderizar los datos
async function renderizarDashboard() {
    const container = document.getElementById('dashboard-container');
    container.innerHTML = '<h2>Cargando datos...</h2>';

    try {
        // Uso de la nueva función de carga web
        const resultado = await cargarDatosParaReporte();

        if (resultado.success) {
            alumnosData = resultado.data.alumnos || [];
            ventasData = resultado.data.ventas || [];
        } else {
            throw new Error(resultado.message);
        }
    } catch (error) {
        container.innerHTML = `<h2>❌ Error al cargar datos: ${error.message}</h2>`;
        console.error("Error cargando datos en reporte:", error);
        return;
    }

    if (alumnosData.length === 0) {
        container.innerHTML = '<h2>No hay alumnos registrados.</h2>';
        return;
    }
    
    container.innerHTML = ''; 

    // --- Procesamiento y Renderizado de Tarjetas ---
    
    alumnosData.forEach(alumno => {
        const ventasPagadas = ventasData.filter(v => v.alumno === alumno.nombre && v.monto > 0);
        const totalVendido = alumno.vendidos_iniciales + ventasPagadas.length;
        const progreso = Math.min(100, Math.round((totalVendido / META_BOLETOS) * 100));

        const card = document.createElement('div');
        card.classList.add('alumno-card');
        card.dataset.nombre = alumno.nombre;
        
        // Determinar el color del progreso (usamos el color de acento si es menor, verde si se alcanza la meta)
        const colorProgreso = progreso >= 100 ? 'var(--color-alcanzada)' : 'var(--color-acento)';

        card.innerHTML = `
            <h3>${alumno.nombre}</h3>
            
            <div class="progreso-circular ${progreso >= 100 ? 'meta-alcanzada' : ''}" 
                 style="background: conic-gradient(${colorProgreso} ${progreso}%, var(--color-meta) ${progreso}%)">
                <div class="progreso-inner">${totalVendido}</div>
            </div>

            <div class="progreso-info">
                <span>${totalVendido}</span> boletos vendidos
            </div>
            <div class="progreso-info">
                Faltan: <span>${Math.max(0, META_BOLETOS - totalVendido)}</span> para la meta.
            </div>
        `;
        
        card.addEventListener('click', () => mostrarDetalleBoletos(alumno.nombre));
        
        container.appendChild(card);
    });
}

/**
 * Función para ejecutar la eliminación/transferencia/personalización.
 * @param {string} action 'eliminar', 'transferir', o 'personalizar'
 * @param {object} ventaData Datos del boleto original.
 * @param {string} [data=''] Nuevo alumno o nombre de dueño.
 * @returns {Promise<object>} Objeto con 'success' y 'ventas' (la lista actualizada)
 */
async function ejecutarAccion(action, ventaData, data = '') {
    let ventasModificadas = ventasData.map(v => ({...v}));
    const targetIndex = ventaData.originalIndex;
    let mensaje;

    if (targetIndex === undefined || targetIndex < 0 || targetIndex >= ventasModificadas.length) {
         alert("Error interno: No se pudo localizar el boleto original para modificar.");
         return { success: false, message: 'Índice de boleto no encontrado.' };
    }

    if (action === 'eliminar') {
        ventasModificadas.splice(targetIndex, 1);
        mensaje = `¿Confirma ELIMINAR el boleto M${ventaData.mesa}-A${ventaData.asiento} de ${ventaData.alumno}? ESTO DESBLOQUEARÁ EL ASIENTO.`;
    } else if (action === 'transferir') {
        const nuevaVenta = {
            alumno: data, // El nuevo alumno es el destino de la transferencia
            mesa: ventaData.mesa,
            asiento: ventaData.asiento,
            fecha: ventaData.fecha,
            monto: ventaData.monto,
            pago: ventaData.pago,
            duenio: ventaData.duenio 
        };
        // 1. Elimina el boleto original por índice
        ventasModificadas.splice(targetIndex, 1);
        // 2. Añade el nuevo boleto (la nueva venta)
        ventasModificadas.push(nuevaVenta);
        mensaje = `¿Confirma transferir el boleto M${ventaData.mesa}-A${ventaData.asiento} de ${ventaData.alumno} a ${data}?`;
    } else if (action === 'personalizar') {
        ventasModificadas[targetIndex].duenio = data; // El nuevo nombre de dueño
        mensaje = `¿Confirma cambiar el dueño del boleto M${ventaData.mesa}-A${ventaData.asiento} a ${data}?`;
    } else {
        return { success: false, message: 'Acción no válida.' };
    }

    if (confirm(mensaje)) {
        try {
            // Uso de la nueva función de reescritura web
            const resultado = await reescribirVentasParaReporte(ventasModificadas);

            if (resultado.success) {
                // Retornar la lista actualizada
                return { success: true, ventas: ventasModificadas, alumnoOrigen: ventaData.alumno }; 
            } else {
                alert(`Error al ejecutar la acción: ${resultado.message}`);
                return { success: false, message: resultado.message };
            }
        } catch (error) {
            console.error("Error IPC al modificar ventas:", error);
            alert("Error crítico de comunicación.");
            return { success: false, message: 'Error de comunicación IPC.' };
        }
    }
    return { success: false, message: 'Operación cancelada por el usuario.' };
}

/**
 * Muestra el modal con el detalle de los boletos vendidos por un alumno.
 */
function mostrarDetalleBoletos(nombre) {
    const modal = document.getElementById('detalle-modal');
    const nombreHeader = document.getElementById('modal-alumno-nombre');
    const listaUL = document.getElementById('boletos-detalle-lista');

    nombreHeader.textContent = `Detalle de Boletos: ${nombre}`;
    listaUL.innerHTML = ''; 
    
    // Filtramos las ventas del alumno y añadimos el índice original para eliminar
    const detalles = ventasData.map((v, index) => ({...v, originalIndex: index}))
                              .filter(v => v.alumno === nombre);

    if (detalles.length === 0) {
        listaUL.innerHTML = '<li>Aún no ha vendido boletos registrados.</li>';
    } else {
        detalles.forEach(venta => {
            const li = document.createElement('li');
            li.dataset.mesa = venta.mesa;
            li.dataset.asiento = venta.asiento;
            li.dataset.fecha = venta.fecha;
            li.dataset.originalIndex = venta.originalIndex; 

            const esAsignacionBase = venta.monto === 0;
            const duenio = venta.duenio || venta.alumno;
            
            li.innerHTML = `
                <div class="boleto-info">
                    Función ${venta.fecha} | M${venta.mesa}-A${venta.asiento} | Dueño: <span class="duenio-display">${duenio}</span><br>
                    Monto: ${esAsignacionBase ? 'BASE/ASIGNADO' : `$${venta.monto}`} | Pago: ${venta.pago}
                </div>
                
                <div class="control-boletos-detalle">
                    <button data-venta='${JSON.stringify(venta)}' 
                            data-action="transferir" id="btn-transferir">Transferir</button>
                            
                    <button data-venta='${JSON.stringify(venta)}' 
                            data-action="personalizar-inline" 
                            id="btn-personalizar" style="background-color: #4BACC6;">Editar Dueño</button>
                            
                    <button data-venta='${JSON.stringify(venta)}' 
                            data-action="eliminar" 
                            id="btn-eliminar">Eliminar</button>
                </div>
            `;
            listaUL.appendChild(li);
        });

        // AÑADIR LISTENERS A LOS NUEVOS BOTONES (Transferir/Eliminar/Personalizar)
        listaUL.querySelectorAll('button[data-action]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const ventaData = JSON.parse(e.currentTarget.dataset.venta);
                const action = e.currentTarget.dataset.action;
                const li = e.currentTarget.closest('li');
                
                let result;

                if (action === 'eliminar') {
                    result = await ejecutarAccion('eliminar', ventaData);
                } else if (action === 'transferir') {
                    mostrarModalTransferencia(ventaData);
                    return; 
                } else if (action === 'personalizar-inline') {
                    // Nuevo manejo de edición en línea
                    habilitarEdicionDuenio(li, ventaData);
                    return; 
                }
                
                // Si la acción fue ELIMINAR:
                if (result && result.success) {
                    ventasData = result.ventas; 
                    modal.style.display = 'none'; // Cerrar el detalle (SOLO DESPUÉS DE ELIMINAR)
                    await renderizarDashboard(); // Actualizar las tarjetas
                    alert(`Boleto eliminado con éxito. El reporte se ha actualizado.`);
                }
            });
        });
    }

    modal.style.display = 'block';
}

/**
 * Habilita la edición del nombre del dueño directamente en el <li>.
 * @param {HTMLElement} li - El elemento <li> de la lista.
 * @param {Object} ventaData - Los datos originales de la venta.
 */
function habilitarEdicionDuenio(li, ventaData) {
    const infoDiv = li.querySelector('.boleto-info');
    const controlDiv = li.querySelector('.control-boletos-detalle');
    const duenioSpan = infoDiv.querySelector('.duenio-display');
    const duenioActual = duenioSpan.textContent;
    
    // Si ya hay un editor en línea, no hacer nada para evitar duplicados/conflicto
    if (li.querySelector('.inline-edit-container')) {
        return;
    }

    // Ocultar el botón de edición y el texto
    controlDiv.style.display = 'none';
    duenioSpan.style.display = 'none';

    // 1. Crear el campo de input
    const input = document.createElement('input');
    input.type = 'text';
    input.value = duenioActual;
    input.placeholder = 'Nuevo nombre del dueño';
    input.classList.add('duenio-input-edit');
    input.style.width = '150px';
    input.style.padding = '3px';
    input.style.backgroundColor = '#2A2A2A';
    input.style.color = '#FFF';
    input.style.border = '1px solid #777';
    input.style.borderRadius = '3px';
    input.style.display = 'inline-block';
    
    // 2. Crear el botón de guardar
    const btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.style.backgroundColor = '#008000';
    btnGuardar.style.color = 'white';
    btnGuardar.style.marginLeft = '10px';
    btnGuardar.style.padding = '3px 8px';
    btnGuardar.style.border = 'none';
    btnGuardar.style.borderRadius = '3px';
    
    // 3. Crear el botón de cancelar
    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.style.backgroundColor = '#CC0000';
    btnCancelar.style.color = 'white';
    btnCancelar.style.marginLeft = '5px';
    btnCancelar.style.padding = '3px 8px';
    btnCancelar.style.border = 'none';
    btnCancelar.style.borderRadius = '3px';

    // 4. Contenedor temporal para los controles de edición
    const editContainer = document.createElement('div');
    editContainer.classList.add('inline-edit-container');
    editContainer.appendChild(input);
    editContainer.appendChild(btnGuardar);
    editContainer.appendChild(btnCancelar);
    
    // Insertar el contenedor de edición
    infoDiv.appendChild(editContainer);

    // 5. Manejador de Guardar
    btnGuardar.addEventListener('click', async () => {
        const nuevoDueno = input.value.trim();
        if (!nuevoDueno) {
            alert("El nombre del dueño no puede estar vacío.");
            return;
        }

        const result = await ejecutarAccion('personalizar', ventaData, nuevoDueno);
        
        if (result.success) {
            ventasData = result.ventas; // Actualizar datos globales
            
            // --- FIX CLAVE: SÓLO ACTUALIZACIÓN INLINE ---
            
            // 1. Quitar la interfaz de edición
            editContainer.remove();
            
            // 2. Actualizar el elemento en línea
            duenioSpan.textContent = nuevoDueno;
            duenioSpan.style.display = 'inline';
            
            // 3. Restaurar los botones de control
            controlDiv.style.display = 'flex';
            
            // 4. Re-renderizar el dashboard para actualizar contadores
            await renderizarDashboard();
            
            // 5. Vuelve a abrir el modal de detalle. Esto garantiza que el siguiente clic a 'Personalizar'
            //    trabajará sobre un nuevo elemento <li>, eliminando cualquier conflicto de foco residual.
            mostrarDetalleBoletos(ventaData.alumno); 
            
            // La alerta ahora se muestra después del re-render de la lista
            alert(`Dueño de boleto actualizado a: ${nuevoDueno}.`);
        }
    });
    
    // 6. Manejador de Cancelar
    btnCancelar.addEventListener('click', () => {
        editContainer.remove();
        duenioSpan.style.display = 'inline';
        controlDiv.style.display = 'flex';
    });
    
    // 7. Forzar el foco de manera asíncrona para que se pueda escribir de inmediato
    setTimeout(() => {
        input.focus();
        if (input.value) {
            input.setSelectionRange(input.value.length, input.value.length);
        }
        // Doble verificación de foco (último recurso)
        if (document.activeElement !== input) {
            setTimeout(() => input.focus(), 0);
        }
    }, 10);
}


/**
 * Muestra el modal para seleccionar el alumno destino para la transferencia.
 */
function mostrarModalTransferencia(ventaData) {
    const transferModal = document.getElementById('transfer-modal');
    const infoSpan = document.getElementById('transfer-info');
    const select = document.getElementById('alumno-destino-select');
    const btnConfirmar = document.getElementById('btn-confirmar-transferencia');

    infoSpan.innerHTML = `Transfiriendo boleto M${ventaData.mesa}-A${ventaData.asiento} de <b>${ventaData.alumno}</b>.`;

    // 1. Llenar el selector de alumnos
    select.innerHTML = '<option value="" disabled selected>--- Seleccionar Alumno ---</option>';
    alumnosData.sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(alumno => {
        // No permitir transferir al mismo alumno
        if (alumno.nombre !== ventaData.alumno) {
            const option = document.createElement('option');
            option.value = alumno.nombre;
            option.textContent = alumno.nombre;
            select.appendChild(option);
        }
    });

    // 2. Limpiar listeners previos y asignar el nuevo evento
    btnConfirmar.onclick = null;
    
    // Configurar cierre del modal de transferencia
    const closeButton = transferModal.querySelector('.close-button');
    if (closeButton) {
        closeButton.onclick = null;
        closeButton.onclick = () => {
            select.blur(); 
            transferModal.style.display = 'none';
            document.getElementById('detalle-modal').style.display = 'block';
        };
    }

    btnConfirmar.onclick = async () => { 
        const nuevoAlumno = select.value;
        if (!nuevoAlumno) {
            alert("Por favor, selecciona un alumno destino.");
            return;
        }
        
        const result = await ejecutarAccion('transferir', ventaData, nuevoAlumno);
        
        if (result.success) {
            ventasData = result.ventas; // Actualizar datos globales
            transferModal.style.display = 'none';
            await renderizarDashboard(); 
            mostrarDetalleBoletos(ventaData.alumno); // Re-renderizar el detalle del alumno
            alert(`Boleto transferido con éxito. El detalle se ha recargado.`);
        }
    };

    transferModal.style.display = 'block';
}

// Iniciar el dashboard al cargar
document.addEventListener('DOMContentLoaded', renderizarDashboard);