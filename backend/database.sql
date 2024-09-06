-- Create the users table (used for user IDs)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_type VARCHAR(20) CHECK (user_type IN ('student', 'teacher', 'admin'))
);

-- Create the students table
CREATE TABLE students (
    id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    classroom VARCHAR(50)
);

-- Create the teachers table
CREATE TABLE teachers (
    id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    classroom VARCHAR(50)
);

-- Create the admins table
CREATE TABLE admins (
    id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Create the attendance table
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    attendance_status BOOLEAN NOT NULL,
    percentage NUMERIC(5, 2)
);

--ALTER TABLE attendance
--ADD COLUMN percentage NUMERIC(5, 2);

-- Update the attendance table to include the percentage of attendance for each student

WITH attendance_summary AS (
    SELECT
        student_id,
        COUNT(*) AS total_days,
        SUM(CASE WHEN attendance_status = TRUE THEN 1 ELSE 0 END) AS attended_days
    FROM attendance
    GROUP BY student_id
),
attendance_percentage AS (
    SELECT
        student_id,
        (attended_days::NUMERIC / total_days) * 100 AS percentage
    FROM attendance_summary
)
UPDATE attendance
SET percentage = (
    SELECT ap.percentage
    FROM attendance_percentage ap
    WHERE attendance.student_id = ap.student_id
)
WHERE student_id IN (SELECT student_id FROM attendance_percentage);



-- Insert a student
INSERT INTO users (user_type) VALUES ('student');
INSERT INTO students (id, name, password, classroom) VALUES (1, 'John Doe', 'password123', 'A1');

-- Insert a teacher
INSERT INTO users (user_type) VALUES ('teacher');
INSERT INTO teachers (id, name, password, classroom) VALUES (2, 'Jane Smith', 'password456', 'B2');

-- Insert an admin
INSERT INTO users (user_type) VALUES ('admin');
INSERT INTO admins (id, name, password) VALUES (3, 'Admin User', 'adminpass');

-- Insert attendance record
INSERT INTO attendance (student_id, teacher_id, date, attendance_status) VALUES (1, 2, '2024-09-06', TRUE);


