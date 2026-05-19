create database student;
use student;
create table students(
    student_id int primary key auto_increment,
    student_name varchar(100),
    marks int
);

create table student_log(
    log_id int primary key auto_increment,
    message varchar(200)
);

delimiter //

create trigger after_student_insert
after insert
on students
for each row
begin

    insert into student_log(message)
    values(
        concat('New Student Added : ', new.student_name)
    );

end //

delimiter ;

insert into students(student_name, marks)
values('Arun', 85);	

select * from student_log;

