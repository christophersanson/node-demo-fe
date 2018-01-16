# GCB CICD for Firebase Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Overview
This repo is set up with Google Container Builder to automate build, test, and deploy workflows for dev, staging, and prod environments

## Deploy to dev
Push to dev branch to automatically build, test, and deploy the app to the Firebase dev environment as configured in cloudbuild.yaml using a GCB build trigger.

### Deploy to staging
Push to master branch to automatically build, test, and deploy the app to the Firebase staging environment as configured in cloudbuild-stage.yaml using a GCB build trigger. The build also saves the generated dist folder in GCS, updates a deploy-sha.txt file with the commit sha, and submit a PR to stable branch for promoting the release from staging to production.

### Deploy to production
Merging the PR to stable branch triggers a deploy to Firebase production environment as configured in cloudbuild-release.yaml. It parses the commit sha from deploy-sha.txt, pulls in the cached dist folder from GCS, and deploys to Firebase without a rebuild.
