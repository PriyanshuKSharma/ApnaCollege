create table if not exists users (
    id int  primary key,
    username varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(50) not null,
);

INSERT INTO users (id, username, email, password) VALUES
("1240", "piyuli_shah", "pylis@example.com", "password125"),
("1241", "pikush_chatt", "pki@example.com", "password126"),
("1242", "piyushi_singh", "pyis@example.com", "password127")