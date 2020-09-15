
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Portdolio dynamic edit api route.

import PortfolioAPI from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';

export default async function handlePortfolio(req, res) {
  //check the method type
  if (req.method === 'GET') {
    const json = await new PortfolioAPI().getById(req.query.id);
    return res.json(json.data);
  }

  //handle update function
  if (req.method === 'PATCH') {
    try {
      const { accessToken } = await auth0.getSession(req);
      const json = await new PortfolioAPI(accessToken).update(req.query.id, req.body);
      return res.json(json.data);
    } catch(e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }
  //handle delete function
  if (req.method === 'DELETE') {
    try{
      const { accessToken } = await auth0.getSession(req);
    const json = await new PortfolioAPI(accessToken).delete(req.query.id);
    return res.json(json.data);

    }catch(e){
      return res.status(e.status || 422).json(e.response.data);
    }

  }
}