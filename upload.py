import boto3
import os
import glob

all_file = glob.glob('build/**', recursive=True)
all_file = [x.replace("\\", "/") for x in all_file]
file_list = [x for x in all_file if "." in x]
s3 = boto3.resource(
    's3',
    aws_access_key_id='AKIA6KKKCCTBGWF4DAIN',
    aws_secret_access_key='eeT0eNOHdlr/UUW2gRWk3JjUPssBB8CmKh/Orjo6')
bucket = s3.Bucket("nomulog")
for file_path in file_list:
    if "html" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "text/html"})
    elif "ico" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "image/x-icon"})
    elif "json" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "application/json"})
    elif "png" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "image/png"})
    elif "js" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "application/javascript"})
    elif "txt" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "text/plain"})
    elif "css" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "text/css"})
    elif "map" in file_path.split(".")[-1]:
        bucket.upload_file(file_path, file_path.replace("build/", ""), ExtraArgs={"ContentType": "binary/octet-stream"})