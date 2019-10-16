import { useEffect, useState } from "react";
import { db } from "../firebaseconfig";

const useCollection = (collection: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = db.collection(collection).onSnapshot((snapshot) => {
            const collectionData = snapshot.docs.map((doc) => {
                console.info(doc.data());
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setData(collectionData);
            setLoading(false);
        })
        return () => unsubscribe();
        // eslint-disable-next-line
    }, []);

    return [data, loading];
}

export { useCollection };