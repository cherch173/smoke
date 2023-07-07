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
#### [**Trello**](https://trello.com/b/FAubJ0Vz)
***
***
### _**Description**_
We're fortunate to be surrounded by creativity. 

Everywhere we look (if we look closely enough) is an opporunity to spot a brief window for innovation, and with such marvels already within eyeshot -- wouldn't we be fools to look away?

Well, what if we _weren't_ looking away, but rather, were looking **directly** at it, but our ability to see it was obscured? What if there was just _too much_ clutter clouding our fields of vision?

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
![Image](public/images/smoke_wireframe.png)
***
***
## _**ERD**_
![Image](public/images/smoke.png)
***
***
## _**PROJECT FLOW**_
- **THURSDAY 07.06.2023**
    - [X] Project Conceptualization
    - [X] Draft and compose ReadME
    - [X] Concept Approval
    - [X] Make and import ERD
    - [X] Make and import Wireframe
    - [X] Final Revision of ReadME
    - [X] Trello Board
    - [X] touch .env and .gitIgnore
- **FRIDAY 07.07.2023**
    - [] Project Approval
    - [] Use vite@create to generate React Framework
    - [] Install dependencies
    - [] Express Generate BackEnd Framework
    - [] Install Mongoose
    - [] Install Axios
    - [] Create ENDEAVORS Model in Backend
    - []
    - []
    - []
    - []
- **SATURDAY 07.08.2023**
    - []
    - []
    - []
    - []
    - []
- **SUNDAY 07.09.2023**
    - []
    - []
    - []
    - []
    - []
- **MONDAY 07.10.2023**
    - []
    - []
    - []
    - []
    - []
- **TUESDAY 07.11.2023**
    - []
    - []
    - []
    - []
    - []
- **WEDNESDAY 07.12.2023**
    - []
    - []
    - []
    - []
    - []
- **THURSDAY 07.13.2023**
    - []
    - []
    - []
    - []
    - []
- **FRIDAY 07.14.2023**
    - []
    - []
    - []
    - []
    - []
- **SATURDAY 07.15.2023**
    - []
    - []
    - []
    - []
    - []
- **SUNDAY 07.16.2023**
    - []
    - []
    - []
    - []
    - []
- **MONDAY 07.17.2023**
    - []
    - []
    - []
    - []
    - []
- **TUESDAY 07.18.2023**
    - []
    - []
    - []
    - []
    - []
- **WEDNESDAY 07.19.2023**
    - [] Debug
    - [] Final Tests
    - [] Deploy

***
***

![Image](https://thumbs.gfycat.com/HelplessSoftHeron-max-1mb.gif)
***
***
### _**Credits**_
##### **IMAGES USED**
##### Smoke Gif -- [Tenor](https://media.tenor.com/anXw_NzGr8EAAAAC/smoke.gif)
##### Twin Peaks Gif -- [Showtime](https://media.tenor.com/87hMoRvfqRQAAAAC/twin-peaks-twin-peaks-the-return.gif)
##### Akira Gif -- [GfyCat](https://thumbs.gfycat.com/HelplessSoftHeron-max-1mb.gif)