import runAuditSummary from '../services/auditSummary.js';

const audit = async (_req, res) => {
  const url = _req.body.url;

  if (url) {
    try {
      const report = await runAuditSummary(url);
      res.status(200).json(report); // Send the report as JSON
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error running audit' });
    }
  } else {
    res.status(400).json({ error: 'No URL provided' }); // Handle the case where no URL is provided
  }
  
};

const analysisRoutes = (app) => {
  app.post('/audit', audit);
};

export default analysisRoutes;
