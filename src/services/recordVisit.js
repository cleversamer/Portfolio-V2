/* eslint-disable import/no-anonymous-default-export */
import getVisitorData from "./getVisitorData";
import sendEmail from "./sendEmail";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { visitorsRef } from "../firebase";

export default function (blockUser) {
  getVisitorData((res) => {
    const currentDate = new Date();

    addDoc(visitorsRef, {
      visitDate: currentDate.toDateString(),
      visitTime: currentDate.toTimeString(),
      visitorData: res.data,
      timestamp: serverTimestamp(),
    });
    sendEmail({
      lastVisit: `${currentDate.toDateString()} at ${currentDate.toTimeString()}`,
    });
  });
}
