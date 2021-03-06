var controllerAcciones = {};
var connection = require('../db/connection');
var bcrypt = require('bcryptjs');
var mysql = require('mysql');

controllerAcciones.getAcciones = function() {
  return new Promise(function(resolve, reject) {
    var sql = 'select * from acciones';
    connection.query(sql, function(err, result) {
      if (err) {
        /* connection.end(function(err) {
          console.log('Error DB');
        }); */
        console.log(err);
        reject({ error: 'Error inesperado' });
      } else {
        console.log(result);
        /* connection.end(function(err) {
          console.log('Close the database connection.');
        }); */
        resolve(result);
      }
    });
  });
};

controllerAcciones.getAccionesId = function(id) {
  return new Promise(function(resolve, reject) {
    var sql = 'select a.* from acciones a where a.idaccion = ?';
    connection.query(sql, [id], function(err, result) {
      if (err) {
        /* connection.end(function(err) {
          console.log('Error DB');
        }); */
        reject({ error: 'Error inesperado' });
      } else {
        console.log(result);
        /* connection.end(function(err) {
          console.log('Close the database connection.');
        }); */
        resolve(result);
      }
    });
  });
};

controllerAcciones.postAcciones = function(data) {
  return new Promise(function(resolve, reject) {
    var sql = 'insert into acciones(idaccion,nombre, duracion, idusuario, idsecuencia,src) values(?,?,?,?,?,?)';
    connection.query(
      sql,
      [data.idaccion, data.nombre, data.duracion, data.idusuario, data.idsecuencia, data.src],
      function(err, result) {
        if (err) {
          console.log(err);
          reject('Ya existe la accion o ha habido algun problema');
        } else {
          console.log('insertado accion');
          resolve(result);
        }
      }
    );
  });
};

controllerAcciones.deleteAcciones = function() {
  return new Promise(function(resolve, reject) {
    var sql = 'delete from acciones';
    connection.query(sql, function(err, result) {
      if (err) {
        /* connection.end(function(err) {
          console.log('Error DB');
        }); */
        reject({ error: 'Error inesperado' });
      } else {
        console.log(result);
        /* connection.end(function(err) {
          console.log('Close the database connection.');
        }); */
        resolve(result);
      }
    });
  });
};

controllerAcciones.deleteAccionesId = function(id) {
  return new Promise(function(resolve, reject) {
    var sql = 'delete from acciones a where a.idaccion = ?';
    connection.query(sql, [id], function(err, result) {
      if (err) {
        /* connection.end(function(err) {
          console.log('Error DB');
        }); */
        reject({ error: 'Error inesperado' });
      } else {
        console.log(result);
        /* connection.end(function(err) {
          console.log('Close the database connection.');
        }); */
        resolve(result);
      }
    });
  });
};
module.exports = controllerAcciones;
