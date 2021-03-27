# PR1_Marvel

# Overview - Project Description

# User Story
As a Marvel Comics Fan

I want to search for a character

When I search for a character then I can see their biography, recent works and a video clip of their recent work

Acceptance Criteria:

    -It’s done when I can pick from a drop down list of Marvel Characters then I’m directed to a new page.
    -It's done when the search history displays on the main page.
    -It's done when the search history persists.
    -It's done when the clear button clears the search history
        -Extra - It's done when the search history is clickable.
        -Extra - It's done when you are directed to the bio page of the character selected from the search history.
    -It's done when I can view the character’s bio, and recent work.
    -It's done when a headshot of the character displays in the bio
        -Extra - It's done when the comic page displays as an icon next to the list of comic books
    -It's done when character movie's display in a dropdown list.
    -It's done when a YouTube trailer plays upon selection of a movie.
    -It's done when both the marvel and youtube API's are being used.
    

# Wire Frame
![Main_Page](./assets/images/Wireframe_1.png)
![Bio_Page](./assets/images/Wireframe_2.png)

# Rough Breakdown of tasks
HTML File - Main page -

    -Link CSS file 
    -Link script file
    -Use Pure CSS inside of html (https://purecss.io/)
    -code html - use wireframe for reference

CSS File - 1 file for both pages - 

    -only add general styles - i.e body, h1, etc.
    -use Pure CSS for specific styles per page (https://purecss.io/)

Script File - Main Page -

    -Function - fetch API 
    -Function - divert to secondary page on click 
    -Function - store selection in local storage
    -Function - append search history to page - pull selection from local storage
    -Function - clear button clears search history 
    -Function - Extra - make search history clickable
    -Function - Extra - Only show top 3 in search history

HTML File - Bio page -

    -Link CSS file 
    -Link script file
    -Use Pure inside of html (https://purecss.io/)
    -code html - use wireframe for reference

Script File - Bio Page

    -Function - fetch API

    -Function - Go back button - go back to main page on click

    -Function - pull character name from API - append into character name, pull character image from API - append into html, pull character bio from API - append into html, pull comic list from API - append into html, pull movie list from API, append into html

    -Function - play youtube trailer upon selection of movie - pull youtube video from API, append into html

# API's
| [Youtube API](https://www.youtube.com/yt/dev/api-resources.html) 

| [Marvel API](https://developer.marvel.com/) 

# Usage
All you need to use the Marvel Character Search is internet access and a web browser!
Follow this link ()

Website Preview: 
![Marvel Character Search](./Assets/images/Website_Preview.png)

# Credits