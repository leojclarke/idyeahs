# A React and MongoDB starter kit for neuefische students

## Installation
1. Clone this repo and rename the folder
1. `rm -rf .git && git init` to start a fresh git repo
1. Replace all placeholder code in `package.json`
1. Check dependencies in `package.json` and remove everything you don't need
1. Run `npm install`
1. Change `DB_URL` setting in `.env` to your needs
1. Create a new repository on github.
1. Add this repo as a remote to your local repo, e.g.: `git remote add origin git@github.com:<my-user>/<my-repo>.git`
1. Commit and push your changes `git push -u origin master` 

## Development
1. Start your MongoDB! `mongod`
1. In a separate terminal window run `npm start`
1. In case you need custom environment variables, create a file `.env.local`. See further instructions [here](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

## Get an overview
- The folders `src` and `public` contain the frontend code, the rest is backend
- Check available scripts in `package.json`
- Update `.prettierrc` to your needs
- Happy Hacking!

## Deployment (make your app visible to the world)
1. Create an account on [heroku](https://heroku.com)
1. Install [heroku cli tools](https://devcenter.heroku.com/articles/heroku-cli)
1. Verify the installation with `heroku -v`
1. Login to heroku with `heroku login`
1. Inside your local app folder run `heroku create`. Heroku will give you a web and git url for your app. A new remote named `heroku` has been added to your git repo 
1. Run `git push heroku master` inside your app folder to deploy your app on heroku.
1. Alternatively you can connect heroku with your github repository in the `deploy tab` of your app settings on heroku. You should enable automatic deployment on every update on your github master branch.
1. Open your app with `heroku open` inside your local app folder

### Connect a mongo db
1. Create an account on [mongodb atlas](https://www.mongodb.com/cloud/atlas)
1. Create a cluster with user and password
1. Whitelist all IPs in the security tab of your cluster
1. Add `DB_URL` and other env/config vars in your heroku app settings e.g.: `key: DB_URL` with `value: mongodb+srv://<username>:<password>@cluster0-ckdgx.mongodb.net/<your-cluster>?retryWrites=true`. You can find this under `connect` in your mongo cluster.
