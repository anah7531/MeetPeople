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
(6,'mark@gmail.com','Rousseau','Mark','1239123',0,'Im new here!','H',168,'1990-03-27',0,2,2,1);

insert into Photo values
(1,'photo pas disponible',1,1),
(2,'photo pas disponible',1,2),
(3,'photo pas disponible',1,3),
(4,'photo pas disponible',1,4),
(5,'photo pas disponible',1,5),
(6,'photo pas disponible',1,6);

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