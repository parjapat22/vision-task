import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import Image from "next/image";
import styles from "../styles/index.module.css";
import productData from "./api/products/products.json";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setProductList(productData);
  }, []);

  const getFilteredList = () => {
    if (!selectedValue) {
      return productList;
    }
    return productList.filter(
      (item) => item[selectedCategory] === selectedValue
    );
  };

  var filteredList = useMemo(getFilteredList, [selectedValue, productList]);

  const searchProducts = (query) => {
    if (!query) {
      return filteredList;
    }
    return filteredList.filter(
      (product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(query);
      }
    );
  };

  filteredList = searchProducts(searchQuery);

  const handleCategoryChange = (event) => {
    if (event.target.value == "") {
      setSelectedValue("");
    }
    setSelectedCategory(event.target.value);
  };

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const uniqueCategoryList = (products) => {
    let tempArr = [];

    if (!selectedCategory) {
      return [];
    }

    products.forEach((row) => {
      tempArr.push(row[selectedCategory]);
    });
    return [...new Set(tempArr)];
  };

  let uniqueData = uniqueCategoryList(productData);

  return (
    <div>
      <div className={styles.filterContainer}>
        <p style={{ marginRight: "0.5rem" }}>Filter by :</p>
        <div>
          <select
            name="filterCategoryList"
            id="filterCategoryList"
            onChange={handleCategoryChange}
            style={{ marginRight: "0.5rem" }}
          >
            <option value="">Select</option>
            <option value="brand">Brand</option>
            <option value="type">Type</option>
            <option value="color">Color</option>
          </select>

          <select
            name="filterValueList"
            id="filterValueList"
            onChange={handleValueChange}
          >
            <option value="">All</option>
            {uniqueData.map((categoryValue) => (
              <option key={categoryValue} value={categoryValue}>
                {categoryValue}
              </option>
            )
            )}
          </select>

          <div className={styles.search}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div>
        </div>
      </div>

      <main>
        <div className={styles.bannerImg}>
          <Image
            src='/banner.jpg'
            alt="Banner Image"
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div key="2">
          <div className={styles.products}>
            {filteredList.map((product) => (
              <ProductCard key={product.id} product={product} />
            )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;