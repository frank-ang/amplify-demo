#!/bin/bash
WEBSITE_BUCKET=www.sandbox00.demolab.host
DISTRIBUTION_ID=E3HZ9Q26DQLRUC
echo "syncing build files to s3..."
aws s3 sync "build/" s3://$WEBSITE_BUCKET
echo "invalidating cloudfront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --output text
