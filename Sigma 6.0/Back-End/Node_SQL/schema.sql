create table if not exists users (
    id int  primary key,
    username varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(50) not null,
);