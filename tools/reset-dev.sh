rm -rf ~/.activepieces
rm -rf node_modules/
docker container rm activeboxes_devcontainer_db_1 --force
docker container rm activeboxes_devcontainer_redis_1 --force
docker container rm activeboxes_devcontainer_app_1 --force
docker volume rm activeboxes_devcontainer_redis_data
docker volume rm activeboxes_devcontainer_postgres_data

echo "Deleted activeboxes dev dockers and volumes."