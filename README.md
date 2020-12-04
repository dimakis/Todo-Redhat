![alt text](https://github.com/dimakis/Todo-Redhat/blob/main/public/appScreenshot.png)
# Note to Red Hat:
I started out completely from scratch in this app, choosing Javascript and react, which are not what I'm most comfortable with, but technologies that are very new to me that intrigue me alot. Whilst I had basic CRUD capabilities I had never looked into the idea of persistance that didn't include a server before. So as I researched it I came across a really good article explaining the methodology of it. whilst trying to implement the local storage functionallity I had to double back and integrate much more of the code from the tutorial into my project than I would have liked. I'm quite sickened I didn't peridodically git commit my project as i would have rolled back to before me implementing the persistance and just given you that. It is now ingrained in me to make sure I'm keeping proper version control going forward. I am actually extremely disappointed in what I am handing up. I thought I would be able to implement the persistance quickly and move on to the filtering of the tasks however I ended up spending way too much time just trying to get it back functional again. 
I started a different version in Java as I didn't want to submit something from a web tutorial but it was just a cli app without full CRUD as between trying to fix this react app and answering the questions I ran out of time. 

# About the App

To run just git clone the repo. then change directory into the Todo-Redhat direcotry. Run 'npm install' and finally 'npm start' or 'npm start --p 3000' to start on port 3000.

The app uses the useState, useContext and useReducer react hooks to store global state. It's styled with Material UI. The Todos are then saved locally in the client browser. Full CRUD functionality is available with "striking-through" of a completed todo for that completed task feeling. The ability to add a new todo in the add-task bar. Edit of each task and deletion of todos is also fully functional.


On the plus side I have learned alot more about react and js in the process. Here are the main websites I used as references:

https://medium.com/wesionary-team/building-a-todo-app-using-react-redux-and-material-ui-688281d968ba
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
https://medium.com/@walkccc/build-a-todo-list-app-with-react-hooks-and-context-a7f8e9f158af
https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks#step-2-%E2%80%94-styling-your-application


