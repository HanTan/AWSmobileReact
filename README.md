- react-native init hansAmazon
- awsmobile init
- react-native link amazon-cognito-identity-js

if cannot run use
```bash
rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios
```