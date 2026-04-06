source .env.network
source .env.volume
source .env.db

if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then 
    docker kill $DB_CONTAINER_NAME && docker rm $DB_CONTAINER_NAME
else
    echo "A container with name $DB_CONTAINER_NAME does not exists."
fi

if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then 
    docker volume rm $VOLUME_NAME
else
    echo "A volume with the name $VOLUME_NAME does not exists. Skipping volume deletion"
fi

if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    docker network rm $NETWORK_NAME 
else
    echo "A network with the name $NETWORK_NAME does not exists. Skipping network deletion"
fi


docker kill $DB_CONTAINER_NAME
docker volume rm $VOLUME_NAME
docker network rm $NETWORK_NAME