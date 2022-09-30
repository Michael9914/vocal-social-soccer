CREATE DATABASE vocal;

USE vocal;

CREATE TABLE vowel(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE vowels
    ADD PRIMARY KEY (id)

ALTER TABLE vowels
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE vowels;

CREATE TABLE players(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,
    position VARCHAR(60) NOT NULL,
    shirt_number INT NOT NULL
);

ALTER TABLE players
    ADD PRIMARY KEY (id)

ALTER TABLE players
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE players;

CREATE TABLE goal(
    id INT(11) NOT NULL,
    gol INT,
    player_name VARCHAR(16) NOT NULL,
    team_name VARCHAR(60) NOT NULL,
    
);

ALTER TABLE goals
    ADD PRIMARY KEY (id)

ALTER TABLE goals
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE goals;

CREATE TABLE match(
    id INT(11) NOT NULL,
    stadium VARCHAR(16) NOT NULL,
    date_start DATE NOT NULL,
    Time_start TIME NOT NULL,
    
);

ALTER TABLE matches
    ADD PRIMARY KEY (id)

ALTER TABLE matches
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE matches;

CREATE TABLE stadium(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,

    
);

ALTER TABLE stadiums
    ADD PRIMARY KEY (id)

ALTER TABLE stadiums
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE stadiums;

CREATE TABLE observation(
    id INT(11) NOT NULL,
    observation_team1 TEXT NOT NULL,
    observation_team2 TEXT NOT NULL
    
);

ALTER TABLE observations
    ADD PRIMARY KEY (id)

ALTER TABLE observations
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE observations;

CREATE TABLE team(
    id INT(11) NOT NULL,
    name VARCHAR (60) NOT NULL,
    logo VARCHAR NOT NULL
    
);

ALTER TABLE teams
    ADD PRIMARY KEY (id)

ALTER TABLE teams
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE teams;

CREATE TABLE admonition(
    id INT(11) NOT NULL,
    player_name VARCHAR (60) NOT NULL,
    player_number INT NOT NULL,
    
);

ALTER TABLE admonitions
    ADD PRIMARY KEY (id)

ALTER TABLE admonitions
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE admonitions;

CREATE TABLE expulsion(
    id INT(11) NOT NULL,
    player_name VARCHAR (60) NOT NULL,
    player_number INT NOT NULL,
    
);

ALTER TABLE expulsions
    ADD PRIMARY KEY (id)

ALTER TABLE expulsions
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
DESCRIBE expulsions;