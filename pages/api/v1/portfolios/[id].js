
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:Portdolio dynamic edit api route.

import PortfolioAPI from '@/lib/api/portfolios';

export default async function handlePortfolio(req, res) {
  const json = await new PortfolioAPI().getById(req.query.id);
  return res.json(json.data);
}