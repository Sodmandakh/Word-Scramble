"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./category.module.css";

export default function CategoryPage() {
  const [data, setData] = useState({ words: [] });
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getAllWord");
      console.log(res.data.words, "~~~~~~");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const categoryMerge = () => {
    // Filter out duplicate elements
    // let mergedCategories = data?.words?.filter(
    //   (word, index) => data?.words?.indexOf(word) === index
    // );

    const arr = [1, 2, 3, 4, 5, 6];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    // arr.map((cur) => {});
    const sum1 = arr.reduce((sum, cur) => sum + cur, 0); // sum = 0

    let mergedCategories = data.words.reduce((prev, cur) => {
      // cur.category ==> animal

      // prev[animal]
      // ...{} ==>
      // ...{animal:[{}]} => animal:[{}]
      // ...{animal:[{}], job: [{}]} => animal:[{1}], job: [{}], animel: [{2}]

      const obj = { key1: "value1", key2: "value2" };
      // console.log(obj["key1"], obj.key1);
      // console.log(prev[cur.category], prev.animal);
      return { ...prev, [cur.category]: [...(prev[cur.category] || []), cur] };
    }, {});
    const arrObj = Object.keys(mergedCategories);

    setCategories(arrObj);
  };
  useEffect(() => {
    categoryMerge();
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data?.words);

  // Sample array with duplicate elements
  // let arr = [1, 2, 3, 4, 2, 3, 5, 6, 7, 1, 3, 4];

  // // Filter out duplicate elements
  // let mergedElements = arr.filter((element, index) => arr.indexOf(element) === index);

  // console.log(mergedElements);
  console.log(categories);
  if (!categories) {
    console.log("loading");
  }
  return (
    <div className={styles.body}>
      <div className={styles.flex}>
        <div className={styles.box}>
          <div className={styles.boxName}>Choose Category</div>
          <div className={styles.zras}></div>
          <div className={styles.categoryList}>
            {categories.map((category) => {
              <div key={category} className={styles.categoryItem}>
                <button className={styles.categoryButton}>{category}</button>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
