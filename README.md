# Test Data

### Create Movie

// Error: Unknown Movie Format\
node src/app --action createMovie --movie

// Error: Movie Already In DB\
node src/app --action createMovie --movie "Bugsy Malone, Jodie Foster, 16, 5, 4, 1976"

// Movie Created + Details\
node src/app --action createMovie --movie "_title_, _actor_, _director_, _genre_, _rating_, _released_"

---

### View All Movies

// Returns List Of All Movies\
node src/app --action readMovie

---

### View Movie By ID

// Error: Unknown ID Format\
node src/app --action readMovie --search id --val

// Error: Nothing Found For ID: "0"\
node src/app --action readMovie --search id --val 0

// Returns Search Results\
node src/app --action readMovie --search id --val 5

---

### View Movie By Title

// Error: Unknown Title Format\
node src/app --action readMovie --search title --val

// Error: Nothing Found For Title: "Some Title"\
node src/app --action readMovie --search title --val "Some Title"

// Returns Search Results\
node src/app --action readMovie --search title --val "Triple 9"

---

### View Movie By Actor

// Error: Unknown Actor Format\
node src/app --action readMovie --search actor --val

// Error: Nothing Found For Actor: "John Doe"\
node src/app --action readMovie --search actor --val "John Doe"

// Returns Search Results\
node src/app --action readMovie --search actor --val "Gregory Peck"

---

### View Movie By Director

// Error: Unknown Director Format\
node src/app --action readMovie --search director --val

// Error: Director: "John Doe" Not Found\
node src/app --action readMovie --search director --val "John Doe"

// Returns Search Results\
node src/app --action readMovie --search director --val "Richard Donner"

---

### View Movie By Genre

// Error: Unknown Genre Format\
node src/app --action readMovie --search genre --val

// Error: Genre: "xxxx" Not Found\
node src/app --action readMovie --search genre --val xxxx

// Returns Search Results\
node src/app --action readMovie --search genre --val Comedy

---

### View Movie By Release Year

// Error: Unknown Release Year Format\
node src/app --action readMovie --search released --val

// Error: Nothing Found For Release Year: "0"\
node src/app --action readMovie --search released --val 0

// Returns Search Results\
node src/app --action readMovie --search released --val 1976

---

### View Movie By Rating

// Error: Unknown Rating Format\
node src/app --action readMovie --search rating --val

// Error: Rating: "0" Not Found\
node src/app --action readMovie --search rating --val 0

// Returns Search Results\
node src/app --action readMovie --search rating --val 3

---

### Update Movie

// Error: Unknown ID Format\
node src/app --action updateMovie --id

// Error: Unknown Movie Format\
node src/app --action updateMovie --id 1 --movie

// Error: Invalid Movie Format\
node src/app --action updateMovie --id 1 --movie "Ted 2"

// Error: No Movie Found with ID: 0\
node src/app --action updateMovie --id 0 --movie "Bugsy Malone, Jodie Foster, 16, 5, 4, 1976"

// Movie Updated + Details\
node src/app --action updateMovie --id 16 --movie "Bugsy Malone, Jodie Foster, 16, 5, 5, 1976"

---

### Delete Movie

// Error: Unknown ID Format\
node src/app --action deleteMovie --id

// Error: No Movie Found With ID: 0\
node src/app --action deleteMovie --id 0

// Movie Deleted + Details\
node src/app --action deleteMovie --id 16

---

### Create Director

// Error: Unknown Director Format\
node src/app --action createDirector --director

// Error: Director Already In DB\
node src/app --action createDirector --director "Alan Parker"

// Director Created + Details\
node src/app --action createDirector --director "_director name_"

---

### View All Directors

// Returns List Of All Directors\
node src/app --action readDirector

---

### View Director By ID

// Error: Unknown ID Format\
node src/app --action readDirector --search id --val

// Error: Nothing Found For ID: 0\
node src/app --action readDirector --search id --val 0

// Returns Search Results\
node src/app --action readDirector --search id --val 5

---

### View Director By Name

// Error: Unknown Name Format\
node src/app --action readDirector --search name --val

// Error: Nothing Found For Name: "Some Name"\
node src/app --action readDirector --search name --val "Some Name"

// Returns Search Results\
node src/app --action readDirector --search name --val "_director name_"

---

### Update Director

// Error: Unknown ID Format\
node src/app --action updateDirector --id

// Error: Unknown Director Format\
node src/app --action updateDirector --id 16 --director

// Error: No Director Found with ID: 0\
node src/app --action updateDirector --id 0 --director "Alan Parker"

// Director Updated + Details\
node src/app --action updateDirector --id 16 --director "_director name_"

---

### Delete Director

// Error: Unknown ID Format\
node src/app --action deleteDirector --id

// Error: No Director Found With ID: 0\
node src/app --action deleteDirector --id 0

// Director Deleted + Details\
node src/app --action deleteDirector --id 17

---

### Create Genre

// Error: Invalid Genre Format\
node src/app --action createGenre --genre

// Error: Genre Already In DB\
node src/app --action createGenre --genre "Action"

// Genre Created + Details\
node src/app --action createGenre --genre "_genre name_"

---

### View All Genres

// Returns List Of All Genres\
node src/app --action readGenre

---

### View Genre By ID

// Error: Unknown ID Format\
node src/app --action readGenre --search id --val

// Error: Nothing Found For ID: 0\
node src/app --action readGenre --search id --val 0

// Returns Search Results\
node src/app --action readGenre --search id --val 5

---

### View Genre By Name

// Error: Unknown Name Format\
node src/app --action readGenre --search name --val

// Error: Nothing Found For Name: "Some Name"\
node src/app --action readGenre --search name --val "Some Name"

// Returns Search Results\
node src/app --action readGenre --search name --val "_genre name_"

---

### Update Genre

// Error: Unknown ID Format\
node src/app --action updateGenre --id

// Error: Unknown Genre Format\
node src/app --action updateGenre --id 1 --genre

// Error: No Genre Found with ID: 0\
node src/app --action updateGenre --id 0 --genre "Psychological Horror"

// Genre Updated + Details\
node src/app --action updateGenre --id 1 --genre "_genre name_"

---

### Delete Genre

// Error: Unknown ID Format\
node src/app --action deleteGenre --id

// Error: No Genre Found With ID: 0\
node src/app --action deleteGenre --id 0

// Genre Deleted + Details\
node src/app --action deleteGenre --id 10

---

### Create Rating

// Error: Invalid Rating Format\
node src/app --action createRating --rating

// Error: Rating Already In DB\
node src/app --action createRating --rating "The Best"

// Rating Created + Details\
node src/app --action createRating --rating "_rating name_"

---

### View All Ratings

// Returns List Of All Ratings\
node src/app --action readRating

---

### View Rating By ID

// Error: Unknown ID Format\
node src/app --action readRating --search id --val

// Error: Nothing Found For ID: 0\
node src/app --action readRating --search id --val 0

// Returns Search Results\
node src/app --action readRating --search id --val 5

---

### View Rating By Name

// Error: Unknown Name Format\
node src/app --action readRating --search name --val

// Error: Nothing Found For Name: "Some Name"\
node src/app --action readRating --search name --val "Some Name"

// Returns Search Results\
node src/app --action readRating --search name --val "_rating name_"

---

### Update Rating

// Error: Unknown ID Format\
node src/app --action updateRating --id

// Error: Unknown Rating Format\
node src/app --action updateRating --id 1 --rating

// Error: No Rating Found with ID: 0\
node src/app --action updateRating --id 0 --rating "The Best"

// Rating Updated + Details\
node src/app --action updateRating --id 5 --rating "_rating name_"

---

### Delete Genre

// Error: Unknown ID Format\
node src/app --action deleteRating --id

// Error: No Rating Found With ID: 0\
node src/app --action deleteRating --id 0

// Rating Deleted + Details\
node src/app --action deleteRating --id 5

---
