## **SMOKE**
#### _...where there's smoke, there's fire..._
***

![Image](https://media.tenor.com/anXw_NzGr8EAAAAC/smoke.gif)

#### Written by Brian Cherchiglia
#### Published by Cherch
#### Created on July 6, 2023
***
***
#### [**Github**](https://github.com/cherch173/smoke)
#### [**Trello**]()
***
***
### _**Description**_
We're fortunate to be surrounded by creativity. 

Everywhere we look (if we look closely enough) is a  hance to spot a window for innovation, and with such marvels readily within our respective fields of vision, wouldn't we be fools to look away?

Well, what if we _weren't_ looking away, but rather, were looking **directly** at it, but our ability to see it was obscured?

Introducing: **SMOKE** -- a social network specifically centered around showcasing creative endeavors.

SMOKE allows its CREATIVES to post their CREATIONS (ranging from Art, Film, Music & Theater to Chemistry, Theses, Mathematics, Physics, Intellectual Property and more) and allows its USERS (aka SPARKS) to engage directly with it by leaving a COMMENT or, choosing to like the post.

By using detail functionality, we can initially showcase each creative endeavor in a social feed with truncated / redacted information (such as its image, link and name) allowing for a cleaner U/I experience where the user retains information both at the headline & detail levels.

***
![Image](https://media.tenor.com/87hMoRvfqRQAAAAC/twin-peaks-twin-peaks-the-return.gif)
***
### _**Concept**_
To build **SMOKE** we'll be using the MERN Stack (MongoDB, Express.js, React, Node,js).

The BACKEND of the site will be built with several components.  We'll use **NODE.js** to manage our server-side relations, while **Express.js** will provide our framework.  The DATA will be stored and managed in **MongoDB**.

The FRONTEND will be constructed primarily using **REACT**, utilitizing hooks such as useState, useEffect and more to transform an existing App.jsx file to import the PROPS of several different PAGES and COMPONENTS.

For **User Authorization** we'll be using React and Mongo's Built-In Authentication and JWT (JSON Web Tokens) to ensure privacy and user safety.

REGISTRATION (Sign Up), LOGGING IN and OUT will be handled using React FORMS using hooks such as useEffect and useState.
***
***
### _**Technologies**_
- MongoDB
- Express.js
- React
- Node.js
- JWT
- s3 / AWS
***
***
### _**Getting Started**_
As per **Cherch Games**' ethos, simplicity is key to a smooth user experience.

We'll have FOUR MODELS, all which interact with eachother.

**ENDEAVORS**
- **name:** TextField
- **featuredImage:** ImageField
- **genre:** linked by ID
- **website:** URLField (max 1 to prevent clutter)
- **likeButton:** BooleanValue (branded as **FIRE**)
- **comments:** linked by ID
- **detailsButton:**

This model will have full CRUD capabilities.

**GENRES (One to Many)**
- **type:** TextField [_Art, Animation, App, Blog, Book, Chemistry, Experiment, Film, Gaming, Invention, Intellectual Property, Music, Musical Theater, Play, Poetry, Program, Physics, Science, Short, Stand-Up, Thesis, Theory, Video Game, Website, or Other_]

**USERS (aka SPARKS)**
- username = textField
- email = textField
- password = textField
- confirmPassword = textField

**COMMENTS**
- date = dateField
- username = textField
- comment = textField
***
***
## _**WIREFRAME**_
![Image]()
***
***
## _**ERD**_
![Image]()
***
***

