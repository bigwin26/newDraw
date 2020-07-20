const admin = require("firebase-admin");
const serviceAccount = require("../../newDraw.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newdraw-8ce06.firebaseio.com",
});
const topic = "shoes";

export default function fcmController(
  productName: string,
  productLocation: string,
  title: string,
) {
  const body = "클릭시 해당 상품페이지로 이동합니다.";
  const message = {
    notification: {
      title,
      body,
    },
    data: { productName, productLocation },
    topic: topic,
  };

  // Send a message to devices subscribed to the provided topic.
  admin
    .messaging()
    .send(message)
    .then((response: string) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error: any) => {
      console.log("Error sending message:", error);
    });
}
