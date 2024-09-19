import storage from '@react-native-firebase/storage';

const uploadMusicToFirebase = async (fileUri) => {
  const reference = storage().ref(`/music/${new Date().getTime()}.mp3`);
  await reference.putFile(fileUri);
  const downloadUrl = await reference.getDownloadURL();
  console.log('File available at:', downloadUrl);
};