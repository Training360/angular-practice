# Create users table
```
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	`password` VARCHAR(100) NOT NULL,
	token VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);
```

# Set secure password
```
UPDATE users SET `password` = SHA1('timi') WHERE id = 1;
```
