git clone https://rishabh-modi2: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@github.com/rishabh-modi2/md -b plugins
cd md
mv * ..
cd ..
rm -rf session.data.json
wget https://raw.githubusercontent.com/rishabh-modi-3/unsudo/spam/session.data.json
node index.js | echo "running"
sleep 15
./a.sh
