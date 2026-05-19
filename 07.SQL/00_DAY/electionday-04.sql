create database election ;
use election ;
create table constitution(

constitution_id int primary key auto_increment,
constitution_name varchar (200),
create_by varchar (200),
create_at datetime ,
update_by varchar (200),
update_at datetime 


);

create table district(
district_id int primary key auto_increment,
district_name varchar (200),
constitution_id int ,
create_by varchar (200),
create_at datetime ,
update_by varchar (200),
update_at datetime ,

 foreign key (constitution_id)
    references constitution(constitution_id)

);

create table party(
party_id int primary key auto_increment,
party_name varchar (300),
create_by varchar (200),
create_at datetime ,
update_by varchar (200),
update_at datetime 

);

create table candidate(
candidate_id int primary key auto_increment,
candidate_name varchar (200),
candidate_age int ,
candidate_gender varchar (200),
 constitution_id int,
 party_id int,
 
 create_by varchar (200),
create_at datetime ,
update_by varchar (200),
update_at datetime,

 foreign key (constitution_id)
    references constitution(constitution_id),

    foreign key (party_id)
    references party(party_id)

);

create table vote_count(
vote_count_id int primary key auto_increment,

 candidate_id int,
    total_votes int,
    
    foreign key (candidate_id)
    references candidate(candidate_id)


);





