const admin = require("firebase-admin");
const serviceAccount = require("../../../newDraw.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newdraw-8ce06.firebaseio.com",
});
const topic = "shoes";

export default function fcm(
  productName: string,
  productLocation: string,
  way: string,
) {
  const title =
    way === "5min"
      ? `잠시후 5분 뒤 ${productName}이 발매됩니다.`
      : `${productName}이 발매 되었습니다.`;
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
