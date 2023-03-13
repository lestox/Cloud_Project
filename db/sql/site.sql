CREATE TABLE IF NOT EXISTS site (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255),
    url VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);