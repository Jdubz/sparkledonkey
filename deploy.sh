#!/usr/bin/env bash

KEYFILE="auth/sparkledonkeyvillage.json"
PROJECT="sparkledonkeyvillage"
BUCKET="gs://staging.sparkledonkeyvillage.com"

if [ "$1" == "production" ]
then
  BUCKET="gs://www.sparkledonkeyvillage.com"
fi

gcloud auth activate-service-account --key-file $KEYFILE
gcloud config set project $PROJECT
gsutil rm ${BUCKET}/**

ZIPEXT="html,js,map,json,png,jpeg,jpg,css"

if [ $1 == "production" ]
then
  gsutil cp -r -z $ZIPEXT ./public/** $BUCKET
else
  gsutil -h Cache-Control:no-cache cp -r -z $ZIPEXT ./public/** $BUCKET
fi
gsutil iam ch allUsers:objectViewer $BUCKET