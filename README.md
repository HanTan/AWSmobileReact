Initial setup:
- react-native init hansAmazon
- awsmobile init
Link AWS cognito library
- react-native link amazon-cognito-identity-js
- awsmobile user-signin enable
- awsmobile push

if cannot run use
```bash
rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios
```