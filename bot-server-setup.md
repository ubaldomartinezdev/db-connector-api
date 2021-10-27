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

# Github auth to clone repos #
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

sudo npm install pm2 -g

source ~/.nvm/nvm.sh

# Run only if any of the processes have been started before #
npm cache clean --force
pm2 flush

cd db-connector-api
nvm i v14.18.1
npm i
npm run build
pm2 start npm --name "db connector" -- start

cd db-connector-bot
nvm i v14.18.1
npm i
npm run build
pm2 start npm --name "bot connector" -- start

cd db-connector-api
nvm i v14.18.1
npm i
npm run build
pm2 start npm --name "bot" -- start
```
