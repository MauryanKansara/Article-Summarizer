import { faCopy, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Body = () => {
  const [articleUrl, setArticleUrl] = useState("");
  const [responsee, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const { userID } = useGetUserInfo();

  const api_call = async (articleUrl) => {
    setIsLoading(true);
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${articleUrl}&length=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7968ab64efmshd140615378e49a2p1e6733jsn17a4fbed4aea",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setResponse(result.summary);
      // if (response.status === 200) {
      await addDoc(collection(db, "prompts"), {
        userID: userID,
        articleUrl: articleUrl,
        response: result.summary,
        createdAt: serverTimestamp(),
      });
      // }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api_call(articleUrl);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <FontAwesomeIcon
            icon={faPaperclip}
            className="absolute left-0 my-2 ml-3 w-5"
            style={{ color: "#788cb0" }}
          />

          <input
            type="url"
            placeholder="Paste the article link"
            required
            className="url_input peer"
            value={articleUrl}
            onChange={(e) => setArticleUrl(e.target.value)}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>

        {isLoading === true && (
          <div>
            <Skeleton height={60} className="mb-2" />
            <Skeleton height={60} width={300} className="mb-2" />
            <Skeleton height={400} />
          </div>
        )}
        {/* Browse History */}
        {isLoading === false && responsee && (
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto mt-5">
            <div>
              <div className="link_card">
                <div className="copy_btn" onClick={() => {}}>
                  {/* <FontAwesomeIcon
                    icon={faCopy}
                    style={{ color: "#788cb0" }}
                    className="w-[50%] h-[50%] object-contain"
                  /> */}
                  <FontAwesomeIcon
                    icon={faFileLines}
                    style={{ color: "#8c94a1" }}
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-900 font-medium text-sm truncate">
                  {articleUrl} testttttttttttttttttttttttttt
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Display Result */}
      {isLoading === false && responsee && (
        <div className="my-10 max-w-full flex justify-center items-center">
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                {responsee}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Body;
