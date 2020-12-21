const express = require("express");
const URL = require("../models/urlModel");
const router = express.Router();

router.get("/:urlHash", async (req, res) => {
  const urlHash = req.params.urlHash;
  try {
    const url = await URL.findOne({ urlHash });

    if (url) {
      url.clicks++;
      await url.save();
  
      console.log(url);

      return res.redirect(url.longUrl);
    } else
      res.status(404).json({
        message: "Can not find this URL",
      });
  } catch (error) {
    res.status(500).json({
      message: "Error occured",
    });
  }
});

module.exports = router;
