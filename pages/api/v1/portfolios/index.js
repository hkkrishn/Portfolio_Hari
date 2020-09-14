//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: API endpoint for data regarding projects sent from create new project form

import PortfolioAPI from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';


export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new PortfolioAPI(accessToken).createPortfolio(req.body);
    return res.json(json.data);
  } catch(e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}

