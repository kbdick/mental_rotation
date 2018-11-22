This is a Mental Rotation test application written in Typescript.

# How To Set Up This Project

This README is intended to allow someone with limited software development skills to set up the application using Github as a host. It assumes a Linux environment.

## Set Up Your Workspace

This application is a webapp created in Angular with Bootstrap as a frontend style template. Before building the applicatino, we need to set up our development environment.

1. Cloud9/AWS has a good integrated development environment. We'll add serve and build commands with that in mind, but your local environment may have different requirements.
2. You'll need to install Nodejs as a server at https://nodejs.org/en/download/, or update it with the node version manager by typing *nvm install stable*. Use this version as your default for new terminals with *nvm alias default 11.2.0* with the version number you're using.
3. Now install the Angular CLI with the node package manager by typing *npm install -g @angular/cli* 

## Initialize Git and a Github repository.

1. Setup Git locally (https://help.github.com/articles/set-up-git/). On your command line at the root directory, type *git init* to start tracking.
2. Set up a new Github repository and copy the Clone location. This one is *https://github.com/kbdick/mental_rotation.git*
3. Pull your remote repository to your local environment by typing *git clone https://github.com/kbdick/mental_rotation.git*
4. Add your files and commit your first changes to the remote before continuing to set up your project by typing *git add .*, *git commit -m "First commit"*, and then *git push origin master* to push your changes to the remote.
5. You may want to add your Github credentials to the cache helper so you don't have to type them all the time. *git config --global credential.helper cache*

## Create Angular Project

1. Git may have created a separate project folder in your root for your project. You can either move these files to the root, or navigate there.
2. Create a new project with *ng new mentalrotation*. Say Yes to routing, use SCSS as your stylesheet format. Don't use "-" in your project name.
3. After the project installs, which may take some time, move your files to the root location again if you wish to do so.

## Install and Setup Bootstrap & Font Awesome

1. Install Bootstrap with the node package manager, *npm install bootstrap font-awesome --save*. The save flag adds it to your package dependency list.

## Setup your Development Server

1. Type *npm install* to install your node dependencies from your package.json file.
3. Preload Bootstrap and Font Awesome to your stylesheet by adding them in the angular.json file. E.g., 
            "styles": [
              "src/styles.scss",
              "./node_modules/bootstrap/dist/css/bootstrap.css",
              "./node_modules/font-awesome/css/font-awesome.css"
            ],
2. On Cloud9, type *ng serve --host 0.0.0.0 --port 8080 --publicHost PROJECT-USER.c9users.io* to serve your project (replace PROJECT with your root folder name, and USER with your username, dash in between). You can add this as an *npm start* script in your package.json file. This may differe slightly depending on your development environment.

## Create New Components, etc.

This project is created with 
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build for Production

Run `ng build` to build the project, or, if hosting on Github, *ng build --prod --output-path dist --base-href "/FOLDERNAME/"*. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Host on Github Pages

This requires installing the angular-cli-pages library locally. Here is a good tutorial for that: https://alligator.io/angular/deploying-angular-app-github-pages/
Follow the instructions for your build above, then deploy with 'npx ngh'.