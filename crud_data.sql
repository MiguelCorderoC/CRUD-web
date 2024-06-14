CREATE DATABASE crud_data;

USE crud_data;

CREATE TABLE programas (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30),
    descripcion VARCHAR (100),
    categoria VARCHAR (20),
	ano INT,
    portada VARCHAR (150)
);

INSERT INTO programas (nombre, descripcion, categoria, ano, portada) VALUES 
('Breaking Bad', 'Un profesor de química se convierte en fabricante de metanfetaminas.', 'Drama', 2008, 'https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg'),
('Stranger Things', 'Un grupo de niños enfrenta eventos sobrenaturales en su pequeña ciudad.', 'Ciencia Ficción', 2016, 'https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg'),
('Game of Thrones', 'Nobleza lucha por el control del Trono de Hierro en los Siete Reinos.', 'Fantasía', 2011, 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'),
('The Mandalorian', 'Un cazarrecompensas explora el universo después de la caída del Imperio.', 'Aventura', 2019, 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4826879538A92B52B2B316E2E9D5A1BEC5C774C094FF9F96E3265E0D4220E3E6/scale?width=1200&aspectRatio=1.78&format=webp'),
('The Office', 'Comedia sobre la vida diaria de los empleados de una oficina de Scranton.', 'Comedia', 2005, 'https://m.media-amazon.com/images/I/91wZOydEBAL._AC_UF894,1000_QL80_.jpg');