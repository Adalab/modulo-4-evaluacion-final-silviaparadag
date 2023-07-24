CREATE TABLE `freedb_recetas`.`recetas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `ingredientes` VARCHAR(1024) NOT NULL,
  `instrucciones` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`id`));


INSERT INTO `freedb_recetas`.`recetas` (`nombre`, `ingredientes`) VALUES ('Falso ceviche', 'Berberechos, aguacate, cebolla roja, jengibre, lima y limón');

INSERT INTO `freedb_recetas`.`recetas` (`nombre`, `ingredientes`) VALUES ('Ensalada marroquí de calabacín', 'Calabacín, pimentón, comino y ajo');

INSERT INTO `freedb_recetas`.`recetas` (`nombre`, `ingredientes`, `instrucciones`) VALUES ('Crema de pepino y yogur', 'Pepino, melón, yogures, AOVE y ajo.', 'Poner en el vaso de la batidora el calabacín, el yogur, el melón y el AOVE.');

INSERT INTO `freedb_recetas`.`recetas` (`nombre`, `ingredientes`, `instrucciones`) VALUES ('Bonito con tallarines y verduras', 'Bonito fresco, tallarines chinos y verduras variadas', 'Mientras la pasta se cuece, saltear la verdura a fuego vivo en un wok y cocinar el bonito a la plancha sin pasarlo');



CREATE TABLE `freedb_recetas`.`recetas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `ingredientes` VARCHAR(1024) NOT NULL,
  `instrucciones` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`id`));
