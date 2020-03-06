const apiKey= '2221-EWsASYT-lUQ27rq6iySv4B9ZqCL882RQWOKZpa9rJM5vbEbMYxR-cEorkufusyLFnV2hIFnV9snsVtPVKTyG-PBt1LL-BI-Zd65OdQVMCE4Wha6f0TekwXTXXYx';

const Yelp= {
    searchY(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                      {headers: {
                          Authorization: `Bearer ${apiKey}`
                        }
                      }).then(response => {
                          return response.json();
                      })
                      .then(jsonResponse=> {
                          if (jsonResponse.businesses) {
                              return jsonResponse.businesses.map(business=> {
                                  return {
                                      id: business.id,
                                      imageSrc: business.image_url,
                                      name: business.name,
                                      address: business.location.address1,
                                      city: business.location.city,
                                      state: business.location.state,
                                      rating: business.rating,
                                  } 
                              })
                              
                          }
                      })

    }
}


export default Yelp;