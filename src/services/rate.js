import firestore from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { setProjectRatingInfo } from "../store/projects";

const rate = (dispatch, project, newRating) => {
  const docRef = doc(firestore, "projects", project.id);
  getDoc(docRef)
    .then((res) => {
      const doc = res._document.data.value.mapValue.fields;
      const ratingCount = parseInt(
        doc.rating.mapValue.fields.count.integerValue
      );
      const ratingValue = parseInt(
        doc.rating.mapValue.fields.value.integerValue
      );
      const rating = {
        count: project?.ratingInfo.count === 1 ? ratingCount : ratingCount + 1,
        value: ratingValue + (newRating - project?.ratingInfo.value),
      };

      updateDoc(docRef, { rating })
        .then(() => {
          dispatch(
            setProjectRatingInfo(
              project.id,
              { count: 1, value: newRating },
              rating
            )
          );
        })
        .catch(() => {});
    })
    .catch((err) => {
      alert(err.message);
    });
};

export default rate;
