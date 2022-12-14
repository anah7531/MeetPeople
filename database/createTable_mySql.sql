/* Effacer la BD au cas il y a un erreur */
DROP DATABASE IF EXISTS meetpeopleDB;

/* Et la créer a nouveau */
/* Création de la base de données */
CREATE DATABASE meetpeopleDB;

/* Utiliser la BD MeetPeople */
USE meetpeopleDB;

/* Création des tables */
create table SituationFamiliale (
idSituationFamiliale int auto_increment,
description varchar(50) not null,
constraint PK_SituationFamiliale primary key (idSituationFamiliale)
);

CREATE TABLE Interet (
idInteret int auto_increment,
description varchar(50) not null,
constraint PK_Interet primary key(idInteret)
);

CREATE TABLE Admin (
numeroEmploye int auto_increment,
courriel varchar(40) not null,
nom varchar(40) not null,
prenom varchar(40) not null,
motDePasse varchar(40) not null,
constraint PK_Admin primary key(numeroEmploye),
constraint UNQ_Admin_courriel unique(courriel)
);

CREATE TABLE Membre (
idMembre int auto_increment,
courriel varchar(40) not null,
nom varchar(40) not null,
prenom varchar(40) not null,
motDePasse varchar(40) not null,
estActif bit not null default 1, 
detailProfil varchar(100) not null,
sexe char(1) not null,
grandeur int not null,
dateDeNaissance date not null,
estVerifie bit not null default 0,
idSituationFamiliale int not null,
idInteret int not null,
numeroAdminDesactive int,
constraint PK_Membre primary key(idMembre),
constraint UNQ_Membre_courriel unique(courriel),
constraint CK_Membre_sexe check (sexe in ('H', 'F')),
constraint FK_Membre_idSituationFamiliale foreign key(idSituationFamiliale) references SituationFamiliale(idSituationFamiliale),
constraint FK_Membre_idInteret foreign key(idInteret) references Interet(idInteret),
constraint FK_Membre_numeroAdminDesactive foreign key(numeroAdminDesactive) references Admin(numeroEmploye)
);

CREATE TABLE Photo (
idPhoto int auto_increment,
cheminURL varchar(200) not null,
estPhotoProfil bit not null default 0,
idMembre int not null,
constraint PK_Photo primary key(idPhoto),
constraint FK_Photo_idMembre foreign key(idMembre) references Membre(idMembre)
);


CREATE TABLE Message (
idMessage int auto_increment,
contenu varchar(255) not null,
dateMessage date not null,
idMembreExpediteur int not null,
idMembreRecevant int not null,
constraint PK_Message primary key(idMessage),
constraint FK_Message_idMembreExpediteur foreign key(idMembreExpediteur) references Membre(idMembre),
constraint FK_Message_idMembreRecevant foreign key(idMembreRecevant) references Membre(idMembre)
);

CREATE TABLE Evaluation (
idEvaluation int auto_increment,
note int not null,
description varchar(100) not null,
date date not null,
idMembreEvaluateur int not null,
idMembreEvalue int not null,
constraint PK_Evaluation primary key(idEvaluation),
constraint CK_Evaluation_note check(note between 1 and 5),
constraint FK_Evaluation_idMembreEvaluateur foreign key(idMembreEvaluateur) references Membre(idMembre),
constraint FK_Evaluation_idMembreEvalue foreign key(idMembreEvalue) references Membre(idMembre)
);

CREATE TABLE MatchTable (
idMembreInitiateur int,
idMembreSecond int,
estAimerParInitiateur bit,
estAimerParSecond bit,
dateInitiateur date,
dateSecond date,
constraint PK_MatchTable primary key(idMembreInitiateur, idMembreSecond),
constraint FK_MatchTable_idMembreInitiateur foreign key(idMembreInitiateur) references Membre(idMembre),
constraint FK_MatchTable_idMembreSecond foreign key(idMembreSecond) references Membre(idMembre)
);

CREATE TABLE Plainte (
idPlainte int auto_increment,
contenu varchar(255) not null,
date date not null,
numeroEmploye int,
idMembrePlaignant int not null,
idMembreConcerner int not null,
constraint PK_Plainte primary key(idPlainte),
constraint FK_Plainte_numeroEmploye foreign key(numeroEmploye) references Admin(numeroEmploye),
constraint FK_Plainte_idMembrePlaignant foreign key(idMembrePlaignant) references Membre(idMembre),
constraint FK_Plainte_idMembreConcerner foreign key(idMembreConcerner) references Membre(idMembre)
);

CREATE TABLE DetailBloque (
idMembreBloquer int,
idMembreBloque int,
dateBloquer date not null,
constraint PK_DetailBloque primary key(idMembreBloquer, idMembreBloque),
constraint FK_DetailBloque_idMembreBloquer foreign key(idMembreBloquer) references Membre(idMembre),
constraint FK_DetailBloque_idMembreBloque foreign key(idMembreBloque) references Membre(idMembre)
);



