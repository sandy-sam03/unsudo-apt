rm -rf session.data.json
wget https://raw.githubusercontent.com/rishabh-modi-3/unsudo/master/session.data.json
node index.js | echo "running"
sleep 15
./a.sh
