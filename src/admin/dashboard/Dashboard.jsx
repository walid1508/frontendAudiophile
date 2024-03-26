import DashCard from "./DashCard";
import MonthlySalesReport from "./MonthlySalesReport";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

const Dashboard = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchCategories = () => {
        axios.get('http://localhost:4000/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => console.error('Error: ', error));
    };

    const fetchProducts = () => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => console.error('Error: ', error));
    }

    const fetchUsers = () => {
        axios.get('http://localhost:4000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => console.error('Error: ', error));
    }



    useEffect(() => {
        fetchCategories();
        fetchProducts();
        fetchUsers();
    }, []);


    return (
        <div>
            <Helmet>
                <title>Audiophile | Admin</title>
                <meta name="description" content="Admin page" />
            </Helmet>
            <h3 className="text-2xl font-extralight p-4">
                Dashboard
            </h3>

            <DashCard
                productsCount={products.length}
                categoriesCount={categories.length}
                usersCount={users.length}
                totalSales={0}
            />
            <div className="mt-20">
                <MonthlySalesReport />
            </div>
        </div>
    );
};

export default Dashboard;