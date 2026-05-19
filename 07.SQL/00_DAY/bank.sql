create database bankedb;
use bankedb;

create table banke_results(
    account_id int primary key auto_increment,
    customer_name varchar(100),
    bank_name varchar(100),
    branch_name varchar(100),
    account_type varchar(50),
    balance decimal(10,2),
    opening_year int
);

insert into banke_results
(customer_name, bank_name, branch_name, account_type, balance, opening_year)
values
('Arun', 'SBI', 'Chennai', 'Savings', 75000, 2020),
('Vijay', 'ICICI', 'Madurai', 'Current', 55000, 2021),
('Karthik', 'HDFC', 'Coimbatore', 'Savings', 90000, 2019),
('Ramesh', 'SBI', 'Salem', 'Current', 45000, 2022),
('Suresh', 'Indian Bank', 'Chennai', 'Savings', 65000, 2020);

select * from banke_results;
select customer_name, bank_name
from banke_results;