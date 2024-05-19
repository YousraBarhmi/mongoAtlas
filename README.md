# Pastry Shop Website

Welcome to the Pastry Shop website project! This project is built using MongoDB Atlas, Node.js (with Next.js framework), and Tailwind CSS. It is an e-commerce platform for a pastry shop that includes features such as product search by name, filter by categories, and order placement.

![localhost_3000_](https://github.com/chaimaebk1/mongoAtlas/assets/138295122/07155d4b-b978-4621-b69d-9f021768f23d)


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Branch Details](#branch-details)
- [Contributing](#contributing)

## Features
- **Search by Name:** Users can search for pastries by their names using MongoDB Atlas Search, including autocomplete functionality.
- **Filter by Categories:** Users can filter pastries based on predefined categories.
- **Order Placement:** Users can place orders for their desired pastries.

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js
- **Database:** MongoDB Atlas

## Setup Instructions
1. **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/pastry-shop.git](https://github.com/chaimaebk1/mongoAtlas.git)
    cd pastry-shop
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the following variables:
    ```env
    MONGODB_URI=your-mongodb-atlas-connection-string
    NEXT_PUBLIC_API_URL=your-api-url
    ```

4. **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
- **Search Functionality:**
  - Use the search bar on the homepage to find pastries by name. The search utilizes MongoDB Atlas Search to provide real-time suggestions and autocomplete.

- **Category Filtering:**
  - Navigate to the categories section to filter pastries based on their types, such as cakes, cookies, or bread.

- **Order Placement:**
  - Select a pastry and click on the "Order" button to place an order. Follow the on-screen instructions to complete your purchase.

## Branch Details

### Atlas Search Branch
In the `atlas-search` branch, we have implemented advanced search capabilities using MongoDB Atlas Search. This includes features such as:
- **Autocomplete:** As users type in the search bar, they receive real-time suggestions to complete their queries.
- **Full-text Search:** Users can perform comprehensive searches that return relevant results based on the text entered.

To check out the `atlas-search` branch and explore these features:
```sh
git checkout atlas-search
```

## Contributing
We welcome contributions to improve the Pastry Shop website. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Contact
For any questions or suggestions, please contact us at balakichaimae@gmail.com or barhmiyousra3@gmail.com .
