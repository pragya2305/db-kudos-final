import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import {BiCoinStack} from "react-icons/bi"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



const Product = ({ products, onAdd,getToken,setAuth,isAuth,handleShowLogin,badgeCount,setBadgeCount}) => {





    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [flag,setFlag]=useState(false)
    
    const filteredProducts = products.filter((product) => {

        if (product.title.toLowerCase().includes(search) ) {
          return product;
        }
      });



    useEffect(() => {
        console.log("product page rendered")
        
    }, []);

    useEffect(() => {
        
    }, [products])

    const addProductToCart = product => () => {

        if (isAuth) {
            console.log("cart add")
            onAdd(product);
            createNotification('success');
        }
        else {
            handleShowLogin();
        }
        

    }

     const createNotification = () => {
         NotificationManager.success('Badge added to your cart',"",1000);
          
    }

    useEffect(() => {
        
    }, [products,flag])

    

  const sortByInput = (e) => {
        const value = e.target.value;
        console.log("selected", value)
        
        if (value === "alphabet_asc") {
            function compare(a, b) {
                const A = a.title.toUpperCase();
                const B = b.title.toUpperCase();

                let comparison = 0;
                if (A > B) {
                    comparison = 1;
                } else if (A < B) {
                    comparison = -1;
                }
                return comparison;
            };


            products.sort(compare);
            console.log("sorted", products)
            if (flag == false)
                setFlag(true)
            else
                setFlag(false)
        }
        else if (value === "alphabet_desc") {
            function compare(a, b) {
                const A = a.title.toUpperCase();
                const B = b.title.toUpperCase();
    
                let comparison = 0;
                if (A > B) {
                    comparison = -1;
                } else if (A < B) {
                    comparison = 1;
                }
                return comparison;
            };
    
    
            products.sort(compare);
            console.log("sorted", products)
            if (flag == false)
                setFlag(true)
            else
                setFlag(false)
    
           

        }
        else if (value === "price_asc") {
            function compare(a, b) {
                const A = a.points;
                const B = b.points;
    
                let comparison = 0;
                if (A > B) {
                    comparison = 1;
                } else if (A < B) {
                    comparison = -1;
                }
                return comparison;
            };
    
    
            products.sort(compare);
            console.log("sorted", products)
            if (flag == false)
                setFlag(true)
            else
                setFlag(false)

            
        }
        else if (value === "price_desc") {
            function compare(a, b) {
                const A = a.points;
                const B = b.points;
    
                let comparison = 0;
                if (A > B) {
                    comparison = -1;
                } else if (A < B) {
                    comparison = 1;
                }
                return comparison;
            };
    
    
            products.sort(compare);
            console.log("sorted", products)
            if (flag == false)
                setFlag(true)
            else
                setFlag(false)

            
      }
      else if (value === "by_count") {
            console.log(products)
            console.log("badgecount",badgeCount)
            function compare(a, b) {
                  
                //const productHave=[{id:'10',qty:10}]
                //const exist = productHave.find(x => x.id === a.id);
                var A=badgeCount[parseInt(a.id)-1]
                var B=badgeCount[parseInt(b.id)-1]
                //console.log("exist",exist)
                // if(exist)
                //     A = exist.qty;
                // const exist1 = productHave.find(x => x.id === b.id);
                //console.log("exist1",exist1)
                // if(exist1)
                //     B = exist1.qty;
                let comparison = 0;
                if (A > B) {
                comparison = -1;
                } else if (A < B) {
                comparison = 1;
                    }
                return comparison;
                };
    
                products.sort(compare);
                console.log("sorted", products)
                if(flag==false)
                    setFlag(true)
                else
                    setFlag(false)

            
        }
    }
 


    
    function FormRow() {
        return (
            <React.Fragment>

                {filteredProducts.map(product => {
                    return (
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>

                                <div key={product.id}>
                                    <img style={{ width: '43%', height: '43%' }} src={product.img} />
                                
                                    <p>Kudos: {product.points}<BiCoinStack size={25} /></p>
                                   
                                    <p>
                                        {
                
                                                <Button variant="outline-success" onClick={addProductToCart(product)}>Add to Cart</Button>
                                               
                                        }
                
                                    </p>
                                </div>
                            </Paper>
                        </Grid>

                    );
                })}


            </React.Fragment>
        );
    }


    return (
        <div >

            <Header search={search}
                setSearch={setSearch}
                getToken={getToken}
                setAuth={setAuth}
                isAuth={isAuth}
                handleShowLogin={handleShowLogin}
                products={products}
            />
             <div className="control" style={{width:"50%", height:"40%",marginLeft: '81%', marginTop:"1%"}}>
                <div className="select" >
                    <select onChange={e => {
                                            sortByInput(e)
                                        }}>
                        <option value="Choose a Filter" disabled selected>Sort by</option>

                        <option value='alphabet_asc'>Name - A-Z</option>
                        <option value='alphabet_desc'>Name - Z-A</option>

                        <option value='price_asc'>Price - Lowest to Highest</option>
                        <option value='price_desc'>Price - Highest to Lowest</option>
                        <option value='by_count'>Badge Count</option>

                    </select>
                </div>
            </div>
            
            <NotificationContainer />
            <div className={classes.root} style={{ margin: '2%' }}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={2}>
                        <FormRow />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
    }

export default Product
