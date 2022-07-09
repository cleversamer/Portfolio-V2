/* eslint-disable import/no-anonymous-default-export */
import { query, where, onSnapshot } from "firebase/firestore";
import { blockedRef } from "../firebase";
import getVisitorData from "./getVisitorData";

export default function (blockUser) {
  getVisitorData((res) => {
    const blockedQuery = query(blockedRef, where("IPv4", "==", res.data.IPv4));

    onSnapshot(blockedQuery, (snapshot) => {
      const blocked = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      blockUser(blocked.length);
    });
  });
}
