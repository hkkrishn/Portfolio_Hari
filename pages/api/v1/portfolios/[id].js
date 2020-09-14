//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Create API route

import PortfolioApi from '@/lib/api/portfolios';

export  const  handlePortfolio = async (req, res)=> {
  const json = await new PortfolioApi().getById(req.query.id);
  return res.json(json.data);
}