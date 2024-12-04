const { Firestore } = require('@google-cloud/firestore');

// Menggunakan kredensial default yang sudah dikonfigurasi dengan gcloud
async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-novi', // ID proyek Google Cloud Anda
    });
 
    const predictCollection = db.collection('predictions');
    return await predictCollection.doc(id).set(data);
  } catch (error) {
    console.error('Error storing data:', error);
  }
}

module.exports = storeData;
