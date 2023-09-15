# hng_second_task

# 📁 Project: Person Api

# A. Documentation

---

## End-point: Get Single Person

#### Description

- This gets a single person from the database.

### Method: GET
>```
>https://hng-second-task-tp2q.onrender.com/api/{user_id}
>```

### Response (**raw**)

```json
{
    "_id": "65029c58ff80e1ce7273e7a7",
    "name": "Olamide",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## End-point: Get All Persons

#### Description

- This gets all persons from the database.

### Method: GET
>```
>https://hng-second-task-tp2q.onrender.com/api
>```

### Response (**raw**)

```json
[
    {
        "_id": "65028c84ff80e1ce7273e79a",
        "name": "Olamide2",
        "__v": 0
    },
    {
        "_id": "6502a310561d6d4e7c5451ce",
        "name": "Osuolale",
        "__v": 0
    }
]
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Person

#### Description

- This updates the person by using its id.
- Replace user_id with the id of the person from the database.

### Method: PUT
>```
>https://hng-second-task-tp2q.onrender.com/api/{user_id}
>```
### Body (**raw**)

```json
{
    "name":"öla"
}
```

### Response (**raw**)

```json
{
    "_id": "65029c58ff80e1ce7273e7a7",
    "name": "öla",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create Person

#### Description

- This creates a new user/person and save the person to the database.
- Check the below example for more details

### Method: POST
>```
>https://hng-second-task-tp2q.onrender.com/api
>```
### Body (**raw**)

```json
{
    "name": "Olamide4"
}
```

### Response (**raw**)

```json
{
    "name": "Olamide4",
    "_id": "65028e91ff80e1ce7273e7a2",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Person

#### Description

- Deletes the Person data from the database using its user_id

### Method: DELETE
>```
>https://hng-second-task-tp2q.onrender.com/api/{user_id}
>```

### Response (**raw**)

```json
{
    "response": "person deleted"
}
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


# B. Installation

---

### Requirements

- To use this code in your local machine, make sure you have the following installed

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

Follow the below steps to use the repository

- Run the below command in your terminal

```
git clone https://github.com/oluwajueda/hng_second_task.git
```

Change to the cloned repository.

```
cd hng_second_task
```

### Step 2: Install the dependencies

To get all the dependencies, run the below command

```
npm install
```

### step 3: Create an environment variable

Create a .env file, add the below code and replace <your-mongo-url-connection-string-here> with your mongodb connection string.

```
Mongo_URI=<your-mongo-url-connection-string-here>
```

### Step 4: Run your app

Run the app with the below command 

```
npm start
```