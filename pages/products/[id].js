import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { query } = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      if (query.id) {
        // add your Realm App Id to the .env.local file
        const REALM_APP_ID = "products-rlpht";
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        try {
          const user = await app.logIn(credentials);
          const oneProduct = await user.functions.getOneProduct(query.id);
          setProduct(oneProduct); // No need for the extra arrow function
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchProduct();
  }, [query]);
  

  return (
    <>
      {product && (
        <>
          <Head>
            <title>MongoDB E-Commerce Demo - {product.name}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="./css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./css/style.css"/>
          </Head>
          <div className="bg-white w-full min-h-screen">
            <Header />
            <Container>
              <ProductDetail product={product} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
