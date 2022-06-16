## NodeJS Express Api
Links:
- https://code.visualstudio.com/docs/containers/quickstart-node

```bash
# @ express directory
npm install

# run app locally
npm run start
curl localhost:3000

# docker build
docker build -t argocd-nodejs-express:latest .

# docker run
docker run --rm -d  -p 3000:3000/tcp argocd-nodejs-express:latest
curl localhost:3000

# tag and push
docker tag argocd-nodejs-express jhawthorn22/argocd-nodejs-express:1.0.0
docker push jhawthorn22/argocd-nodejs-express:1.0.0
```
