rm -rf ~/.activepieces
docker compose down
docker volume rm activeboxes_redis_data
docker volume rm activeboxes_postgres_data
echo "Deleted activeboxes dockers and volumes."