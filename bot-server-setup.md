## Bot Server Setup On New Instance
- Convert Into A Script Eventually
``` 
sudo yum install update

sudo yum install git

sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -

sudo yum install -y nodejs

npm -v && node -v && git --version

mkdir bot201011

git clone https://github.com/nft-crew/db-connector-api.git
git clone https://github.com/nft-crew/bot-connector-api.git
git clone https://github.com/nft-crew/bot.git

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

sudo npm install pm2 -g
cd db-connector-api
npm i
npm run build
pm2 start npm --name "db connector" -- start

cd db-connector-bot
npm i
npm run build
pm2 start npm --name "bot connector" -- start

cd bot
source ~/.nvm/nvm.sh
nvm i v14.18.1
npm cache clean --force
npm run build

pm2 flush
cd db-connector-api
git pull
npm run build
pm2 start npm --name "bot" -- start
```