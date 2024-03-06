import React, { useEffect } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext'
import { useFavorite } from '../../Context/FavoriteContext'
import Card from "../../Components/Card";

const Products = () => {
  const { addToCart, items } = useCart()
  const { addToFavorite, favoriteItems, } = useFavorite()

  const { productList, loading, setProductID, setCategory, categories, setShowCategory, showCategory } = useProduct();

  const { category_id } = useParams()
  useEffect(() => {
    setCategory(category_id)
  }, [category_id])

  return (
    <>
      <nav className={styles.categoryNav}>
        <div>

          <h1 className={`truncate ${styles.categoryLink} `} onClick={() => setShowCategory("all")}>
            All
          </h1>

        </div>
        {categories &&
          categories.map((item, index) =>
          (
            <h1 key={`${item}-${index}`} className={`truncate ${styles.categoryLink} `} onClick={() => setShowCategory(item)}>
              {item}
            </h1>
          )
          )}
      </nav>
      <div className="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>

      <div className={styles.cardGroup}>
        {
          !loading ?
            showCategory == "Electronics" ? (
              productList?.filter(ele => ele.category == "electronics").map((item, index) => {
                const findCartItem = items.find((cart_item) => cart_item.id === item.id)
                const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
                return (
                  <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
                );
              })
            ) :

              showCategory == "Jewelery" ? (
                productList?.filter(ele => ele.category == "jewelery").map((item, index) => {
                  const findCartItem = items.find((cart_item) => cart_item.id === item.id)
                  const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
                  return (
                    <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
                  );
                })
              ) :
                showCategory == "Men's Clothing" ? (
                  productList?.filter(ele => ele.category == "men's clothing").map((item, index) => {
                    const findCartItem = items.find((cart_item) => cart_item.id === item.id)
                    const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
                    return (
                      <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
                    );
                  })
                ) :
                  showCategory == "Women's Clothing" ? (
                    productList?.filter(ele => ele.category == "women's clothing").map((item, index) => {
                      const findCartItem = items.find((cart_item) => cart_item.id === item.id)
                      const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
                      return (
                        <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
                      );
                    })
                  ) :
                    (
                      productList?.map((item, index) => {
                        const findCartItem = items.find((cart_item) => cart_item.id === item.id)
                        const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
                        return (
                          <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
                        );
                      })
                    )
            : (
              <Spinner />
            )}
      </div>
    </>
  );
};

export default Products;
