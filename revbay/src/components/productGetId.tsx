import Product from "../common/Product"

export default function ProductTableData(props:{products:Product[]}){
    const productArray = props.products.map(o =>{
            return(
                
                    {o.productId}
            )
    });
    return({productArray})
}