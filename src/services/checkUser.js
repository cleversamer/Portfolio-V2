/* eslint-disable import/no-anonymous-default-export */
import { query, where, getDocs } from "firebase/firestore";
import { blockedRef } from "../firebase";
import getVisitorData from "./getVisitorData";

export default function (blockUser, allowUser) {
  getVisitorData((res) => {
    const blockedQuery = query(blockedRef, where("IPv4", "==", res.data.IPv4));

    getDocs(blockedQuery).then((res) => {
      const blocked = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (blocked.length) {
        blockUser();
      } else {
        allowUser();
      }
    });
  });
}
