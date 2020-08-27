import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { useFetch } from '../../../effects/use-fetch.effect';

import * as ROUTES from '../../../components/routes/routes.paths';

const ShopDetails = () => {
  
    const history = useHistory();
    
    const { id } = useParams();
    const data = useFetch('/shop/' + id);
    // console.log('shop details', '/shop/'+id, shop);

    const handleDelete = {
      // const { match: { params }, history } = match;
    
      // axios.delete(`/api/users/${match.params.userId}`)
      //   .then(() => {
      //     history.push(`${ROUTES.SHOP}${ROUTES.LIST}`);
      //   });
      }

    return (
      <div>
      <h4>Shop Details</h4>
      {
        data && 
          <div className="text-white">
            <p>Shop Id: {data.id}</p>
            <p>Shop Name: {data.shopName}</p>
            <p>Business Type: </p>
            {
              data.businessTypes &&
                <ul>
                  {
                    data.businessTypes.map((businessType, i) => <li key={i}>{businessType}</li>)
                  }
                </ul>
            }
            < br />
            <p>Business Name: {data.businessName}</p>
            <p>Business Reg. No.: {data.businessNo}</p>
            <p>Contact Details: </p>
            {
              data.contactDetails &&
                <ul>
                  {
                    data.contactDetails.map(({ name, phone, mobile, email, comment }, i) =>
                      <li key={i}>Contact: {name} {phone} {mobile} {email} {comment}</li>)
                  }
                </ul>
            }
            <button onClick={() => history.push(`${ROUTES.SHOP}${ROUTES.LIST}`)}>Back</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
      }
      </div>
    )
}
export default ShopDetails;
