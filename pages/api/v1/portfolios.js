//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: API endpoint for data regarding projects sent from create new project form

import PortfolioAPI from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';


export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    console.log(accessToken)
    await new PortfolioApi().createPortfolio(req.body);
    return res.json({message: 'Portfolio was created!'});
  } catch(e) {
    return res.status(e.status || 400).end(e.message);
  }
}

