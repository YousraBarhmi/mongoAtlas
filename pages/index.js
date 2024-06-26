import Head from "next/head";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Category from "../components/Category";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import FeatureSection from "../components/About";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // add your Realm App Id to the .env.local file
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <Hero />
          {/* <Search/> */}
          <FeatureSection/>
          <Category
            category="Tech Wear"
            categoryCount={`${products.length} Products`}
          />
          <Products products={products} />
          <Pagination />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
