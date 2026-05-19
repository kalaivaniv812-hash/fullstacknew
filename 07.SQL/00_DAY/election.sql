create database tnvotedb;
use tnvotedb;
create table voters (

voter_Name varchar (200), 
voter_id int (100),
voter_Gender varchar (50),
voter_District varchar(100),
voter_constitution varchar (100),
voter_Party_Name  varchar(100),
voter_Count int);



insert into voters (voter_Name,voter_id,voter_Gender,voter_District,voter_constitution,voter_Party_Name,voter_Count) values 
('Ravi Kumar',1,'Male','Madurai','Madurai East','DMK',25000),

('Priya Devi',2,'Female','Chennai','Chennai South','AIADMK',18000),

('Arjun Singh',3,'Male','Coimbatore','Coimbatore North','BJP',22000),

('Meena Lakshmi',4,'Female','Trichy','Trichy West','Congress',15000),

('Divya',5,'Female','Salem','Salem West','Congress',870),

('Vignesh',6,'Male','Trichy','Trichy East','DMK',1100),

('Surya',7,'Male','Tirunelveli','Tirunelveli','ADMK',1320),

('Keerthana',8,'Female','Thanjavur','Thanjavur','Congress',640),

('Hari Prasad',9,'Male','Vellore','Vellore','BJP',1420),

('Meena',10,'Female','Dindigul','Dindigul','DMK',990);














