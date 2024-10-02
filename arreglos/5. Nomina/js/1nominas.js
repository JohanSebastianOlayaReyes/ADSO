 let nomina = [];
 let iteracion;
 let longitudNomina;
 let valorDia;
 let diasTrabajado;
 let edad;
 let total;
 let salPersona;
 let saludPer;
 let pen;
 let arlPer;
 let renta;
 let subsi;
 let ex;
 let sumar=0;
 let totalPagar = [];
 nomina = [
     { id: 1, numeroDocumento:1032679504, nombre:'July Daniela', apellidos: 'Ramos Peña', edad: 17, valorDias:110000, diasTrabajados: 28 },
     { id: 2, numeroDocumento:1075235870, nombre:'Brayan Alberto', apellidos: 'Perdomo Perdomo', edad: 17, valorDias:120000, diasTrabajados: 27 },
     { id: 3, numeroDocumento:1077722422, nombre:'Catalina', apellidos: 'Cometa Fierro', edad: 18, valorDias:100000, diasTrabajados: 30 },
     { id: 4, numeroDocumento:1080427305, nombre:'Maria Alejandra', apellidos: 'Marin Henrique', edad: 17, valorDias:130000, diasTrabajados: 28 },
     { id: 5, numeroDocumento:1080292258, nombre:'Milciades', apellidos: 'Esquivel Leal', edad: 65, valorDias:150000, diasTrabajados: 30 },
     { id: 6, numeroDocumento:1077227809, nombre:'Merari ', apellidos: 'Urbano', edad: 17, valorDias: 110000, diasTrabajados: 28 },
     { id: 7, numeroDocumento:1079409259, nombre:'Nikolas Santiago', apellidos: 'Morales Trujillo', edad: 17, valorDias:80000, diasTrabajados: 28 },
 ]
 
 console.table(nomina);
 longitudNomina = nomina.length
 
 for (iteracion = 0; iteracion < longitudNomina; iteracion++) {
   valorDia = nomina[iteracion].valorDias;
   diasTrabajado = nomina[iteracion].diasTrabajados;
   salPersona = salario(valorDia,diasTrabajado);
   saludPer = salud(valorDia,diasTrabajado);
   pen = pension(valorDia, diasTrabajado);
   arlPer = arl(valorDia,diasTrabajado);
   renta = retencion(valorDia,diasTrabajado);
   subsi = subTrans(valorDia,diasTrabajado);
   ex = extra(valorDia,diasTrabajado);
   total=pagoTotal(valorDia,diasTrabajado);

   totalPagar.push({id:nomina[iteracion].id, numeroDocumento:nomina[iteracion].numeroDocumento, nombre:nomina[iteracion].nombre, apelliodos:nomina[iteracion].apellidos, edad:nomina[iteracion].edad,valorp:valorDia, diasTrabajadoP:diasTrabajado, salarioP:salPersona, saludp:saludPer, pensionP:pen, arlP:arlPer, rentap:renta, subtransporte:subsi, extraP:ex, totalP:total});
   
  }
  console.table(totalPagar);

  for (let iteracion = 0; iteracion < longitudNomina; iteracion++) {
    sumar = sumar + totalPagar[iteracion].totalP;
  }
  console.log("suma total de la nomina segun el total a pagar de todas las personas: "+ sumar);   