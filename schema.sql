drop database if exists viknow;

create database viknow;

\c viknow

create table dishes(
id serial,
dish text not null,
primary key (id)
);

create table wines(
id serial,
dish_id int not null,
type text not null,
characteristics varchar not null,
primary key (id),
foreign key(dish_id) references dishes(id)
);

copy dishes from '/Users/michael/Desktop/HR/viknowcsv/dishes' delimiter ',' csv header encoding 'utf-8';
copy wines from '/Users/michael/Desktop/HR/viknowcsv/wines.csv' delimiter ',' csv header;

-- create index wine_idx on wines(protein_id);