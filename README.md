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
