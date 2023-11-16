//To define a Primary Key you can use the following syntax:

```

CREATE TABLE teachers (
      teacher_number INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(50),
      date_of_birth DATE,
      subject TEXT,
      email VARCHAR(200),
      PRIMARY KEY (teacher_number)
);

```

If you already have the table, and you just want to change a column to Primary Key:


```
ALTER TABLE teachers ADD PRIMARY KEY (teacher_number);

```

To define a Foreign Key while creating the table, you can use the following syntax:

```
CREATE TABLE students (
    student_number INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    teacher_id INT,
    email VARCHAR(200),
    PRIMARY KEY (student_number),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_number)
);

```

or you can add a foreign key later:

```

ALTER TABLE students
    ADD CONSTRAINT FK_TEACHER FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_number);

```
