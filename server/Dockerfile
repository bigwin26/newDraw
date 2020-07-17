FROM node:12

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 와일드카드를 사용
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["tsc && node", "dist/app.js"]

