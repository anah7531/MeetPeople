use meetpeopleDB;

/* Insertion de données */
insert into SituationFamiliale values
(1,'A des enfants'),
(2,'N''a pas d''enfants');

insert into Interet values
(1,'Relation serieuse'),
(2,'Amitie'),
(3,'Relation non serieuse'),
(4,'Marriage');

insert into Admin values
(1,'josuelapoint@gmail.com','Lapoint','Josue','123456'),
(2,'emilieroi@gmail.com','Roi','Emily','emili123');

insert into Membre values
(1,'john@gmail.com','Walf','John','qwerty123',1,'Je veux m''amuser','H',179,'1996-12-21',0,2,3,null),
(2,'junior@gmail.com','Leblanc','Junior','junior25',1,'Je suis nouveau','H',160,'1984-03-17',0,2,1,null),
(3,'juana@gmail.com','Gomez','Juana','juanita43',1,'Bonjour je m''appelle Juana','F',170,'1994-04-19',1,1,1,null),
(4,'alexandra@gmail.com','Paris','Alexandra','paris22',1,'I like cooking','F',178,'1990-09-05',0,1,3,null),
(5,'salma@gmail.com','Hayek','Salma','salmahayek',1,'Je suis une actrice','F',180,'1993-10-25',0,1,4,null),
(6,'mark@gmail.com','Rousseau','Mark','1239123',0,'Im new here!','H',168,'1990-03-27',0,2,2,1),
(7,'kevin@gmail.com','Hart','Kevin','kevin123',1,'Hi. I am Kevin Hart','H',169,'1987-02-17',1,2,3,null),
(8,'therock@gmail.com','Johnson','Dwayne','therock123',1,'Hi. I am TheRock','H', 190,'1980-10-24',1,1,1,null),
(9,'megan@gmail.com','Markle','Meghan','meghan123',1,'I am meghan Markle','F',170,'1988-12-23',0,2,3,null),
(10,'ayesha@gmail.com','Curry','Ayesha','ayesha123',1,'I am Ayesha.','F',159,'1985-09-17',0,2,4,null);

insert into Photo values
(1,'https://i.scdn.co/image/b44233e2dbf524e3f895130a0c9c7281cef6199b',1,1),
(2,'https://www.cinemapolitica.org/wp-content/uploads/2020/03/Real_Junior_Leblanc.jpg',1,2),
(3,'https://www.iheartradio.ca/image/policy:1.18142620:1656988671/selena.jpg?f=default&$p$f=c059210',1,3),
(4,'https://fr.news24viral.com/wp-content/uploads/2022/10/Ce-que-vous-ne-savez-pas-sur-Alexandra-Daddario.jpg',1,4),
(5,'https://flxt.tmsimg.com/assets/71233_v9_bc.jpg',1,5),
(6,'https://remax-aphotos-oa.imgix.net/Share/AssociatePhotos/70021964.jpg',1,6),
(7,'https://images.discovery-prod.axs.com/2022/01/kevin-hart_01-11-22_19_61dde1c0b4d2f.jpg?1668384000108',1,7),
(8,'https://www.gannett-cdn.com/presto/2022/07/21/USAT/0ba6d19c-537a-41b0-b467-fc0c9434ce66-Rock_Scowl.jpg?width=1200&disable=upscale&format=pjpg&auto=webp',1,8),
(9,'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/10/1520625898-meghan-markle-deal-or-no-deal.jpg?crop=1.00xw:0.667xh;0,0.0403xh&resize=480:*',1,9),
(10,'https://pyxis.nymag.com/v1/imgs/2f7/4be/9ddec36996ebcea2a389ad5c8a4272a33a-18-ayesha-curry.rsquare.w700.jpg',1,10);

insert into Message values
(1,'Allo','2022-10-17',1,2),
(2,'Hi','2022-10-15',3,6),
(3,'Bonjour','2022-09-17',1,5);

insert into Evaluation values
(1,3,'Bonne personne mais pas mon style','2022-10-17',1,2);


insert into MatchTable values
(1,2,1,1,'2022-09-15','2022-09-17'),
(1,5,1,1,'2022-09-12','2022-09-15'),
(3,6,1,1,'2022-10-11','2022-10-14');

insert into Plainte values
(1,'Personne agresive','2022-10-10',2,3,6);


insert into DetailBloque
(idMembreBloquer, idMembreBloque, dateBloquer) values
(6,5,'2022-09-22');