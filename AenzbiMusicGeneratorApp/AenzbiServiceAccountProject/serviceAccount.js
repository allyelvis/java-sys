const { Storage } = require('@google-cloud/storage');
const { Firestore } = require('@google-cloud/firestore');

// Path to your service account key file
const keyFilename = '/path/to/your/service-account-file.json';

// Initialize Google Cloud Storage client
const storage = new Storage({ keyFilename });

// Initialize Firestore client
const firestore = new Firestore({ keyFilename });

// Example function to list buckets in Google Cloud Storage
async function listBuckets() {
  try {
    const [buckets] = await storage.getBuckets();
    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (error) {
    console.error('Error listing buckets:', error);
  }
}

// Example function to get a Firestore document
async function getDocument() {
  const docRef = firestore.collection('your-collection').doc('your-document');
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      console.log('Document data:', doc.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

// Call example functions
listBuckets();
getDocument();
