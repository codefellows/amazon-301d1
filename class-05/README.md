# Class 5: AWS Elastic Beanstalk Deployment Workshop 

## Overview
It's time to cover code deployments!

We'll start out by looking at a quick deployment using the Heroku platform.  This should you up nicely for understanding commonalities and differences between platforms.  After an initial demonstration in Heroku, it'll be time to deploy in AWS.  Today, we'll be using the AWS Elastic Beanstalk service and will progressively be adding additional configuration options and tools as we progress through this course.  The main outcome of today's lecture is that you can deploy a static and/or dynamic web applicatoin, using a custom NodeJS/ExpressJS server, on an AWS deployment platform.  There are several platforms available for deployment in AWS, including static deployment in S3 (Amazon Simple Storage Service).  For today, we'll use Elastic Beanstalk so that we can quickly integrate a database and configuration options in the future, thus making our application more dynamic and "real".

## Basic Steps for Elastic Beanstalk Deployment
- **Step 1:** Create an AWS account
- **Step 2:** Login to AWS Elastic Beanstalk (https://aws.amazon.com/elasticbeanstalk/)
- **Step 3:** Create a new web server environment
- **Step 4:** Apply appropriate config options (nothing major for today)
- **Step 5:** "Zip up" the application (not the parent folder).  This can be done by `cd` into the root of your project, then running (*update the app and zip directory names first*): `zip -r app_dir_name zip_dir_name.zip .`  

## Learning Objectives
As a result of completing lecture 5 of Code 301, students will:
- Be able to deploy a website to AWS Elastic Beanstalk
- Be able to deploy a website to Heroku and understand commonalities and differences between Heroku and AWS
- Be able to create a simple NodeJS/ExpressJS server that will serve up a static `index.html` file


