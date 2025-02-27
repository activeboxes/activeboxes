# Update ActiveBoxes Docker Instances
echo "Updating ActiveBoxes..."
git pull
docker compose pull
docker compose up -d --remove-orphans
echo "Successfully updated ActiveBoxes."