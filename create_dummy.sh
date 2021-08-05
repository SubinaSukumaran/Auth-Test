# Create dummy files inside storage
touch $(pwd)/storage/app/public/dummy && \
touch $(pwd)/storage/framework/cache/data/dummy && \
touch $(pwd)/storage/framework/sessions/dummy && \
touch $(pwd)/storage/framework/testing/dummy && \
touch $(pwd)/storage/framework/views/dummy && \
echo "Successfully created dummy files..."