import { useEffect, useState } from "react";
import {
    query,
    collection,
    where,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetPrompts = () => {
    const [prompts, setPrompts] = useState([]);

    // const promptsCollectionRef = collection(db, "prompts");
    const { userID } = useGetUserInfo();

    const getPrompts = async () => {
        let unsubscribe;
        try {
            const queryTransactions = query(
                collection(db, 'prompts'),
                where("userID", "==", userID),
                orderBy("createdAt")
            );

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    docs.push({ ...data, id });
                    // console.log(data);
                });

                setPrompts(docs);

            });
        } catch (err) {
            console.error(err);
        }

        return () => unsubscribe();
    };

    useEffect(() => {
        getPrompts();
    }, []);

    return { prompts };
};
