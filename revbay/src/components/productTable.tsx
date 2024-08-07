import Product from "../common/Product"

export default function ProductTableData(props:{products:Product[]}){
    const productArray = props.products.map(o =>{
            return(
                <tr>
                    <td>{o.name}</td>
                    <td>{o.price}</td>
                    <td>{o.productId}</td>
                </tr>
            )
    });
    return(<tbody>{productArray}</tbody>)
}

